import InputForm from "./InputForm";
import { useReducer } from "react";

// initial values
const initialState = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  textarea: "",
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.name]: [action.value] };
    case "submit":
      console.log(state);
      return;
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleChange
  const handleChange = (e) => {
    dispatch({
      type: "update",
      name: e.target.name,
      value: e.target.value,
    });
  };

  // function handleClick
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
    dispatch({ type: "reset" });
  };

  return (
    <>
      <form className="h-fit w-[90%] p-[0.5rem] md:w-[85%] xl:w-[70rem] bg-white mx-auto -mt-16 drop-shadow-[0_1.5px_1.5px_black]">
        <div className="flex flex-col md:flex-row p-[1.5rem] xl:px-[7rem] xl:py-[3rem] justify-center w-full h-full text-black xl:text-2xl font-semibold gap-7">
          <InputForm
            label="Name"
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <InputForm
            label="Company Name"
            type="text"
            name="companyName"
            value={state.companyName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col md:flex-row px-[1.5rem] xl:px-[7rem] xl:py-[3rem] justify-center w-full h-full text-[#022581] xl:text-2xl font-semibold gap-7">
          <InputForm
            label="Email"
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <InputForm
            label="Phone"
            type="tel"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col p-5 md:flex-row xl:px-[7rem] xl:py-[3rem] justify-start w-full h-full text-[#022581] xl:text-2xl font-semibold gap-4">
          <div className="flex flex-col w-full h-full md:gap-y-2">
            <label htmlFor="textarea" className="ml-1 text-md lg:text-xl">
              Your Message
            </label>
            <textarea
              name="textarea"
              id="textarea"
              className="text-area bg-[#E0E0E0] px-3 py-5 caret-[#022581] rounded-lg"
              rows="7"
              value={state.textarea}
              onChange={handleChange}
            ></textarea>
            <button
              className="py-4 w-[8rem] xl:py-[1.1rem] xl:w-[25%] text-lg xl:text-xl text-center bg-[#022581] text-white mt-5 rounded-2xl uppercase font-bold"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
