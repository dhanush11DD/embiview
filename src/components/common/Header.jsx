import { Link } from "react-router-dom";
import brandLogo from "../../assets/embiviev-logo.png";
import { Icon } from "@iconify/react";
import { useState } from "react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Automation",
    path: "/automation",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function Header() {
  const [hideNav, setHideNav] = useState(true);

  function handleNav() {
    setHideNav(!hideNav);
  }

  return (
    <header className="container-fluid bg-secondary text-white lg:py-8 py-4 absolute top-0 left-0 right-0 z-10">
      {/* responsive nav items */}
      <div className={`absolute bg-secondary bg-opacity-70 top-0 left-0 right-0 bottom-0 w-full h-screen z-20 ${hideNav ? 'scale-x-0' : 'scale-x-100'} origin-left transition-all duration-300`}>
        <div className="bg-secondary w-4/6 h-full">
          <div className="p-2 flex justify-between items-center">
            <div className="">
              <img src={brandLogo} alt="" className="" />
            </div>
            <div className="">
              <Icon
                icon="line-md:menu-to-close-transition"
                className="text-white text-2xl cursor-pointer"
                onClick={handleNav}
              />
            </div>
          </div>
          <ul className="flex flex-col gap-3 mt-3 p-5">
            {navLinks.map((link, index) => (
              <li key={index} className="py-3 border-b border-b-slate-700">
                <Link to={link.path} className="text-white content-2 p-2 header-list">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* responsive nav items */}
      <div className="container m-0 md:m-auto flex justify-between items-center">
        <div className="">
          <img src={brandLogo} alt="" className="" />
        </div>
        <div className="lg:flex hidden">
          <ul className="flex  gap-4 md:flex-row md:gap-10">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link to={link.path} className="text-white content-2 header-list">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="hidden lg:block">
            <button className="btn btn-fill">Talk to our team</button>
          </div>
          <div className=" lg:hidden block">
            <Icon
              icon="heroicons-outline:menu-alt-2"
              className="text-white text-2xl"
              onClick={handleNav}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
