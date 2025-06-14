const NavBar = () => {
  return (
    <>
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <div className="relative max-w-7xl mx-auto px-2 md:px-3 py-4 flex items-center justify-between">
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
            <a
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-473BF0 transition font-bold"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
