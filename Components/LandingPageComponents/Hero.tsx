import Button from "../Button";

const Hero = () => {
  return (
    <>
      <section className="bg-white w-full flex justify-center pt-30">
        <div className="max-w-6xl lg:min-w-[860px] lg:min-h-[970px] sm:grid-cols-2 grid-cols-2 ">
          <div className=" flex flex-col items-center tems-start text-left lg:max-w-[850px]">
            <h1 className="font-bold text-center text-4xl md:text-6xl mb-10 leading-tight md:leading-tight">
              Get things done by awesome remote team
            </h1>
            <h2 className="text-gray-500 text-center font-bold text-xs md:text-lg lg:max-w-[550px]">
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand.
            </h2>
            <Button
              onClick={() => console.log("meow")}
              className="px-5 py-3.5 mt-14 text-lg w-[229px] max-md:px-5 max-md:mt-10"
              arrow={true}
            >
              Get started for free
            </Button>
          </div>
          <div className="lg:min-w-[850px] lg:min-h-[560px]">
            <img
              src="../../src/assets/HeroImage.jpg"
              className="shadow-lg lg:mt-30 mt-20 rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
