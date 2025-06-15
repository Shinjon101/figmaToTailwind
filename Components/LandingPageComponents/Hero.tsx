import Button from "../Button";

const Hero = () => {
  return (
    <>
      <section className="bg-white w-full flex justify-center pt-30">
        <div className="lg:min-w-[860px] min-h-[970px] sm:grid-cols-2 grid-cols-2">
          <div className=" flex flex-col items-center ">
            <h1 className="font-bold text-4xl md:text-6xl mb-10">
              Awesome Title
            </h1>
            <h2 className="text-gray-500 font-bold text-xs md:text-sm">
              This is a great place to describe your product and what it does.
            </h2>
            <Button
              onClick={() => console.log("meow")}
              className="px-5 py-3.5 mt-14 text-lg w-[229px] max-md:px-5 max-md:mt-10"
              arrow={true}
            >
              Get started for free
            </Button>
          </div>
          <div className="lg:min-w-[850px] min-h-[560px]">
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
