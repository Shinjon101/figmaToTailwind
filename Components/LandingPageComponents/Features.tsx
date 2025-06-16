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
    <div className="md:max-w-[290px] md:max-h-[210px]  md:grid-cols-3 md:mx-10 mb-15">
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
    <section className="bg-white w-full flex justify-center md:pt-30 pt-10 mt-2 pl-4">
      <div className="lg:max-w-[1024px] lg:min-h-[210px] md:flex md:flex-row flex-col">
        {features.map((feature) => (
          <Feature
            key={feature.iconPath + feature.title}
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
