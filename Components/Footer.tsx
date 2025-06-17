import FooterBrand from "./FooterBrand";
import FooterSection from "./FooterSection";

const Footer = () => {
  const companyLinks = ["About us", "Contact us", "Careers", "Press"];

  const productLinks = ["Features", "Pricing", "News", "Help desk", "Support"];

  const servicesLinks = [
    "Digital Marketing",
    "Content Writing",
    "SEO for Business",
    "UI Design",
  ];

  const legalLinks = ["Privacy Policy", "Terms & Conditions", "Return Policy"];
  return (
    <footer className="flex flex-col text-gray-900">
      <div className=" flex flex-col  items-center md:flex-row md:flex-wrap gap-5 justify-between md:items-start self-center mt-28 w-full  mb-10 max-w-[1093px] max-md:mt-10 max-md:max-w-full">
        <FooterBrand
          title="YourCompany"
          description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page."
        />
        <div className="grid grid-cols-2 gap-5 mt-2 md:contents">
          <FooterSection title="Company" links={companyLinks} />

          <FooterSection title="Product" links={productLinks} />

          <FooterSection title="Services" links={servicesLinks} />

          <FooterSection title="Legal" links={legalLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
