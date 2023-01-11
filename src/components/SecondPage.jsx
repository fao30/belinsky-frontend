const CardWithOverlay = () => {
  return (
    <section className="font-exo text-[#0D0D0D] mb-[4vh] overflow-x-hidden">
      <div className="grid w-full h-full md:grid-cols-2">
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
      </div>
    </section>
  );
};

export default CardWithOverlay;
