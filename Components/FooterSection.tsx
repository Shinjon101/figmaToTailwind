import React from "react";

interface FooterSectionProps {
  title: string;
  links: string[];
  className?: string;
}
const FooterSection = ({ title, links, className }: FooterSectionProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="self-start text-base tracking-normal leading-7 bg-blend-normal">
        {title}
      </h3>
      <nav className="mt-5 text-lg tracking-normal leading-10 cursor-pointer">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {link}
            {index < links.length - 1 && <br />}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default FooterSection;
