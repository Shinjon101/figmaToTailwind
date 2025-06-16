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
    <section className="w-screen bg-gray-900 md:h-[850px] flex flex-col items-center justify-center gap-6 mt-30">
      <div className="md:w-[769px] h-32 my-2 flex flex-col items-center justify-between mb-20">
        <h1 className="text-center justify-start text-white text-4xl font-bold leading-[48px] mb-6">
          Pricing & Plans
        </h1>
        <p className="w-[500px] opacity-60 text-center text-white text-lg font-normal leading-loose">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10">
        {plans.map((plan) => (
          <PricingCard
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
