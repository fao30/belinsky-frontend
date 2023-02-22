import InputForm from "./InputForm";
import toast, { Toaster } from "react-hot-toast";

import { useFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "emailjs-com";

// Regex for validations
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Form = () => {
  // Formic Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      textarea: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      companyName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Invalid phone number")
        .required("Required"),
      textarea: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // // emailjs send
      emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        values,
        process.env.REACT_APP_PUBLIC_KEY
      );
      console.log(formik.values, "<----- ONSUBMIT");
      toast.loading("Sending...", {
        duration: 1000,
      });
      setTimeout(() => {
        toast.success("Proposal Request Sent!");
        resetForm();
      }, 1000);
    },
  });

  return (
    <>
      <form
        className="p-[3vw] lg:px-[8vw] h-fit w-[90%] md:w-[85%] xl:w-[70%] bg-white mx-auto -mt-16 drop-shadow-[0_1.5px_1.5px_black]"
        onSubmit={formik.handleSubmit}
      >
        <Toaster />
        <div className="font-[600] flex flex-col md:flex-row justify-center w-full h-full text-[#022581] xl:text-2xl    gap-10 p-5">
          <InputForm
            label="Name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            formikErrors={
              formik.errors.name && formik.touched.name ? (
                <p>{formik.errors.name}</p>
              ) : null
            }
          />
          <InputForm
            label="Company Name"
            type="text"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            formikErrors={
              formik.errors.companyName && formik.touched.companyName ? (
                <>{formik.errors.companyName}</>
              ) : null
            }
          />
        </div>
        <div className="font-[600] flex flex-col md:flex-row justify-center w-full h-full text-[#022581] xl:text-2xl    gap-10 p-5">
          <InputForm
            label="Email"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            formikErrors={
              formik.errors.email && formik.touched.email ? (
                <p>{formik.errors.email}</p>
              ) : null
            }
          />
          <InputForm
            label="Phone"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            formikErrors={
              formik.errors.phone && formik.touched.phone ? (
                <p>{formik.errors.phone}</p>
              ) : null
            }
          />
        </div>
        <div className="font-[600] flex flex-col p-5 md:flex-row justify-start w-full h-full text-[#022581] xl:text-2xl   ">
          <div className="flex flex-col w-full h-full gap-y-2">
            <label htmlFor="textarea" className="ml-1 lg:text-xl">
              Your Message
            </label>
            <textarea
              id="textarea"
              className="bg-[#E0E0E0] px-3 py-2 caret-[#022581] rounded-lg   lg:text-lg"
              rows="7"
              name="textarea"
              value={formik.values.textarea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.textarea && formik.touched.textarea ? (
              <p className="ml-1 text-sm text-red-600 md:text-base">
                {formik.errors.textarea}
              </p>
            ) : null}
            <button
              type="submit"
              className="font-[600] py-[0.85rem] w-[5.5rem] md:py-4 md:w-[8rem] xl:py-[1.1rem] xl:w-[13rem] text-sm lg:  xl:text-lg text-center bg-[#022581] text-white mt-5 rounded-2xl uppercase active:bg-[#022581]/90 transition duration-300"
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
