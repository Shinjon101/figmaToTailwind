import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterBrandProps {
  title: string;
  description: string;
}

const FooterBrand = ({ title, description }: FooterBrandProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="self-start text-3xl font-bold tracking-normal">{title}</h2>
      <p className="mt-9 max-w-[200px] text-base tracking-normal leading-7 bg-blend-normal">
        {description}
      </p>
      <div className="flex flex-row gap-3 mt-5">
        <FaTwitter size={20} />
        <FaFacebook size={20} className="text-indigo-800" />
        <FaInstagram size={20} />
        <FaLinkedin size={20} />
      </div>
    </div>
  );
};

export default FooterBrand;
