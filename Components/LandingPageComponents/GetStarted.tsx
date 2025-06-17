import Button from "../Button";

const GetStarted = () => {
  return (
    <section className="bg-slate-100 md:w-screen mt-20 pl-5">
      <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-center items-center w-full lg:min-h-[691px]">
        <div className="flex flex-col items-start md:max-w-[414px] md:max-h-[320px] md:mr-80 mb-10 md:p-0 p-5">
          <h1 className="font-bold text-start text-2xl md:text-4xl mb-10 leading-tight md:leading-tight">
            Getting started with Albino is easier than ever
          </h1>
          <h2 className="text-gray-500 text-start font-bold text-xs md:text-base lg:max-w-[550px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page so quickly with Albino.
          </h2>
          <Button
            to="/signup"
            className="px-5 py-3.5 mt-14 text-lg w-[229px] max-md:px-5 max-md:mt-10"
            arrow={true}
          >
            Get started for free
          </Button>
        </div>
        <div className="mt-4 pr-5 pb-5 md:pr-0 md:pb-0">
          <img
            src="../../assets/GettingStartedImage.jpg"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
