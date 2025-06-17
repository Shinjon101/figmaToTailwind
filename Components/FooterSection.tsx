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
      <nav className="mt-5 text-lg tracking-normal leading-10 ">
        <ul className="list-none p-0 m-0">
          {links.map((link, index) => (
            <li key={index} className="leading-10 ">
              <a href={`#${link.toLocaleLowerCase()}`}> {link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterSection;
