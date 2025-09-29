import { Link } from "react-router-dom";
import MaxWidthWrapper from "../../Components/Wrapper/MaxWidthWrapper";
import NavIcons from "../../Components/NavIcons/NavIcons";
import NavItems from "../../Components/NavItems/NavItems";
import { MenuIcon, X } from "lucide-react";
import { useContext, useState } from "react";
import WebContext from "../../ContextApi/WebContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="flex items-center">
              <img
                src="/header_logo.png"
                className="h-8 md:h-10"
                alt="Furniro Logo"
              />
            </Link>

            <div className="items-center justify-between hidden md:flex">
              <NavItems />
            </div>

            <div className="items-center justify-between hidden md:flex">
              <NavIcons />
            </div>

            <div className="md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                {!isOpen ? (
                  <MenuIcon className="w-6 h-6" />
                ) : (
                  <X className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
      <div
        className={`
          fixed top-30 left-0 h-full w-full bg-white shadow-md z-40
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-col gap-10">
          {isOpen && <NavItems openMenu={setIsOpen} />}
          {isOpen && <NavIcons openMenu={setIsOpen} />}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

    </nav>
  );
};

export default Navbar;
