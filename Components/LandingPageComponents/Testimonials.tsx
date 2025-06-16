const testimonies = [
  {
    ppPath: "../../src/assets/ProfilePicture/pp1.jpg",
    quote: "You made it so simple",
    description:
      "My new site is so much faster and easier to work with than my old site.",
    name: "Corey Valdez",
    position: "Founder at Zenix",
  },
  {
    ppPath: "../../src/assets/ProfilePicture/pp2.jpg",
    quote: "Simply the best",
    description:
      "Better than all the rest. I’d recommend this product to beginners.",
    name: "Ian Klein",
    position: "Digital Marketer",
  },
];

interface TestimonyProp {
  ppPath: string;
  quote: string;
  description: string;
  name: string;
  position: string;
}

const TestimonyCard = ({
  ppPath,
  quote,
  description,
  name,
  position,
}: TestimonyProp) => {
  return (
    <div className="flex flex-col items-center">
      <img className="rounded-full w-16 h-16" src={ppPath}></img>
      <div className="text-center justify-start text-gray-900 text-2xl font-bold my-10">
        "{quote}"
      </div>
      <div className="w-96  opacity-70 text-center justify-start text-gray-900 text-lg font-normal">
        {description}
      </div>
      <div className="text-center justify-start text-gray-900 text-base font-bold mt-8">
        {name}
      </div>
      <div className="opacity-70 text-center justify-start text-gray-900 text-base font-normal">
        {position}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white mt-30">
      <div className="flex md:flex-row flex-col justify-center gap-40">
        {testimonies.map((testimony) => (
          <TestimonyCard
            key={testimony.ppPath + testimony.quote}
            ppPath={testimony.ppPath}
            quote={testimony.quote}
            description={testimony.description}
            name={testimony.name}
            position={testimony.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
