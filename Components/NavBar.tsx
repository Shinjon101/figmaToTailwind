import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="relative max-w-7xl mx-auto px-8 md:px-10 py-4 flex items-center justify-between">
          <div className="flex-shrink-0 text-xl font-bold text-gray-900">
            YourCompany
          </div>

          <nav className="left-1/2 top-1/2  hidden md:flex space-x-8">
            {["Pricing", "Demo", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold text-gray-800 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <Button className="px-4 py-2 text-bold">
              Get started for free
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
