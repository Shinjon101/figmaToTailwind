import PricingCard from "./PricingCard";

const plans = [
  {
    name: "Basic",
    price: "$29",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt massa a neque vestibulum, at finibus enim volutpat.",
  },

  {
    name: "Standard",
    price: "$49",
    description:
      "fringilla diam. Curabitur augue purus, cursus in blandit nec, vulputate at eros. Etiam id convallis nunc. Maecenas volutpat.",
  },
  {
    name: "Premium",
    price: "$99",
    description:
      "nteger a turpis nunc. Proin luctus nec sapien ac dignissim. Sed quis feugiat mi. Curabitur diam nisi, vulputate ac fringilla.",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="min-w-full bg-gray-900  flex flex-col items-center justify-center gap-6 mt-30 scroll-mb-9 overflow-hidden"
    >
      <div className="w-full max-w-5xl px-4  h-32  flex flex-col items-center justify-between mb-4 mt-20">
        <h1 className=" mt-5 md:mt-0 text-center justify-start text-white text-4xl font-bold leading-[48px] mb-6">
          Pricing & Plans
        </h1>
        <p className="w-full max-w-lg opacity-60 text-center text-white text-lg font-normal leading-loose">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            name={plan.name}
            description={plan.description}
            price={plan.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
