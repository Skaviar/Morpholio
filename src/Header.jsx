import { Link, useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "./provider/GlobalDataProvider";

const Header = ({ handleScrollToTop }) => {
  const globalData = useContext(GlobalDataContext);
  const header = globalData.about.header;

  const urls = Object.keys(globalData).map((key) => ({
    url: globalData[key].url,
    label: globalData[key].label,
  }));
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(!isMenuOpen);
    }
  };
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location.pathname]);

  const setActiveUrl = (url) => {
    setCurrentUrl(url);
    handleScrollToTop();
  };

  return (
    <header className="font-semibold border-b border-gray-300 md:border-gray-100">
      <nav className="flex flex-row items-center p-4 px-2 bg-primary h-max md:flex-col md:items-center xl:flex-row">
        <div className="flex items-center justify-center flex-1 md:justify-normal">
          <span className="hidden px-2 text-xs md:flex">&#x25A0;</span>
          <span className="text-lg font-bold">{header.name}</span>
          <img
            className="hidden h-8 ml-2 mr-1 md:flex"
            src={header.logo}
            alt="Logo"
          />
          <div className="flex flex-row items-center gap-1 ml-2 text-base">
            <span>{header.degreeShort}</span>
            <span>@</span>
            <span className="hidden md:flex">{header.university}</span>
            <span className="md:hidden">{header.universityShort}</span>
          </div>
        </div>
        <div>
          <img
            className={`w-5 ${!isMenuOpen ? `flex` : `hidden`} md:hidden`}
            onClick={handleMenuToggle}
            src={header.menu}
            alt="Logo"
          />
        </div>

        {isMenuOpen && (
          <div
            className="absolute inset-0 w-screen h-screen backdrop-filter backdrop-blur-sm md:hidden"
            onClick={() => handleMenuToggle()}
          />
        )}

        <div>
          <ul
            className={`pt-5 md:pt-0 w-1/2 h-screen flex transition-transform duration-300 transform md:transform-none md:transition-none flex-col absolute top-0 right-0  bg-primary text-center border border-gray-200  md:border-none md:static md:h-auto md:w-auto md:flex md:flex-row md:text-base
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {urls.map((element, index) => (
              <Link
                to={element.url}
                key={index}
                className={`md:text-center px-4 py-4 sm:py-2 transition duration-100 ease-out hover:bg-secondary md:hover:scale-105 cursor-pointer 
                ${currentUrl === element.url ? "bg-secondary" : "bg-primary"}`}
                onClick={() => handleMenuToggle()}
              >
                {element.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
