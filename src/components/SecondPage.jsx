import Video from "../assets/belinsky.mp4";

const SecondPage = () => {
  return (
    <section className="font-exo text-[#0D0D0D] mb-[4vh] overflow-x-hidden">
      <div className="grid w-full h-full md:grid-cols-2">
        {/* Video */}
        <div className="h-[50vh] w-[100vw] md:w-[50vw] bg-slate-400 relative group">
          <video
            autoStart
            autoPlay
            muted
            loop
            src={Video}
            type="video/mp4"
            className="absolute object-cover w-full h-full "
          />
          <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
            <div className="absolute bottom-[15%] left-[4.4%]">
              <h3 className="text-2xl font-semibold text-white">
                TV Series X Indiehome
              </h3>
              <p className="text-white drop-shadow-md">
                Teknisi Magang - Web Series 12 Episodes Starring
                <br />
                Dustin, Tiffany, and Turah{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Photo Studio */}
        <div className="h-[50vh] w-[100vw] md:w-[50vw] bg-slate-400 relative group">
          <img
            src="https://images.unsplash.com/photo-1545242640-7c9e9cc07d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2041&q=80"
            alt=""
            className="absolute w-full h-[50vh] object-cover"
          />
          <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
            <div className="absolute bottom-[15%] left-[4.4%]">
              <h3 className="text-2xl font-semibold text-white">
                Photo Studio
              </h3>
              <p className="text-white drop-shadow-md">
                Belinsky Production House ready to make your <br /> product
                launch brilliantly
              </p>
            </div>
          </div>
        </div>
        {/* Photo Product */}
        <div className="h-[50vh] w-[100vw] md:w-[50vw] bg-slate-400 relative group">
          <img
            src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt=""
            className="absolute object-cover w-full h-full"
          />
          <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
            <div className="absolute bottom-[15%] left-[4.4%]">
              <h3 className="text-2xl font-semibold text-white">
                Photo Product
              </h3>
              <p className="text-white drop-shadow-md">
                Belinsky Production House ready to make your <br /> product
                launch brilliantly
              </p>
            </div>
          </div>
        </div>
        {/* Photo Product */}
        <div className="h-[50vh] w-[100vw] md:w-[50vw] bg-slate-400 relative group">
          <img
            src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt=""
            className="absolute object-cover w-full h-full"
          />
          <div className="group-hover:opacity-0 transition-all duration-300 absolute h-full w-full bg-gradient-to-t from-[#363636] to-transparent">
            <div className="absolute bottom-[15%] left-[4.4%]">
              <h3 className="text-2xl font-semibold text-white">
                Photo Product
              </h3>
              <p className="text-white drop-shadow-md">
                Belinsky Production House ready to make your <br /> product
                launch brilliantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
