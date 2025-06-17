import Button from "../Button";

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
}

const PricingCard = ({ name, description, price }: PricingCardProps) => {
  return (
    <div className="scale-80">
      <div className="w-[90vw] max-w-sm h-auto pb-6 bg-white flex flex-col items-center gap-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 ">
        <div className="w-24 h-7 bg-indigo-600/10 bg-opacity-10 rounded-2xl mt-10 flex items-center justify-center">
          <p className="text-center text-indigo-600 text-xs font-bold uppercase tracking-widest ">
            {name}
          </p>
        </div>
        <div className="text-gray-900 text-5xl font-bold leading-[58px] mt-5">
          {price}
        </div>
        <div className="opacity-70 text-center justify-start text-gray-900 text-base font-normal leading-7">
          One time purchase
        </div>
        <div className="w-72 text-center justify-start text-gray-900 text-base font-normal leading-7">
          {description}
        </div>
        <Button to="/signup" className="w-80 h-14 mt-7">
          Get started for free
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
