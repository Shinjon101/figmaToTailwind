const features = [
  {
    iconPath: "../../src/assets/icons/code.jpg",
    title: "Project management",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    iconPath: "../../src/assets/icons/countdown-2.jpg",
    title: "Time tracking",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    iconPath: "../../src/assets/icons/smartphone.jpg",
    title: "Beautiful mobile app",
    description:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

interface FeatureProps {
  iconPath: string;
  title: string;
  description: string;
}

const Feature = ({ iconPath, title, description }: FeatureProps) => {
  return (
    <div className="lg:max-w-[290px] max-h-[210px] sm:grid-cols-3 grid-cols-3 lg:mx-10">
      <img src={iconPath} />
      <h3 className=" mt-5 text-xl font-bold tracking-tight leading-loose">
        {title}
      </h3>
      <p className="mt-5 text-lg leading-7">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-white w-full flex justify-center lg:pt-30">
      <div className="lg:max-w-[1024] min-h-[210] flex flex-row  ">
        {features.map((feature) => (
          <Feature
            iconPath={feature.iconPath}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
