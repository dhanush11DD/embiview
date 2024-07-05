import { Link } from "react-router-dom";
import brandLogo from "../../assets/embiviev-logo.png";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Careers",
    path: "/career",
  },
];

function Header() {
  const [hideNav, setHideNav] = useState(true);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false); // New state for background color change

  function handleNav() {
    setHideNav(!hideNav);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setScrollUp(false);
      } else {
        // Scrolling up
        setScrollUp(true);
      }
      setLastScrollY(window.scrollY);

      if (window.scrollY > 50) { // Adjust this value based on when you want the background color to change
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <HeroGradingTop />
      <HeroGradingBottom1 />
      <HeroGradingBottom2 />
      <header
        className={`container-fluid text-white lg:py-8 py-4 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          scrollUp ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "bg-secondary" : "bg-transparent"}`}
      >
        {/* responsive nav items */}
        <div
          className={`absolute bg-opacity-70 top-0 left-0 right-0 bottom-0 w-full h-screen z-20 ${
            hideNav ? "scale-x-0" : "scale-x-100"
          } origin-left transition-all duration-300`}
        >
          <div className="w-4/6 h-full">
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
                  <Link
                    to={link.path}
                    className="text-white content-2 p-2 header-list"
                  >
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
            <ul className="flex gap-4 md:flex-row md:gap-10">
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
              <Link to="/contact">
                <button className="btn btn-fill">Talk to our team</button>
              </Link>
            </div>
            <div className="lg:hidden block">
              <Icon
                icon="heroicons-outline:menu-alt-2"
                className="text-white text-2xl"
                onClick={handleNav}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;


function HeroGradingTop() {
  return (
    <span
      className="absolute w-[344.006px] h-[172.083px] transform -rotate-[12.698deg] flex-shrink-0 top-2 left-8 lg:block hidden"
      style={{ fill: "#1F73F6", filter: "blur(138.36184692382812px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="680"
        height="452"
        viewBox="0 0 680 452"
        fill="none"
      >
        <g filter="url(#filter0_f_968_12108)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M207.708 -8.22194C248.759 -15.9199 272.711 7.1563 305.088 17.293C337.023 27.2914 392.73 25.8911 393.006 49.7924C393.286 73.9744 335.13 88.8242 306.164 110.318C283.947 126.804 275.908 150.018 245.451 159.284C212.81 169.215 181.369 162.573 151.925 157.243C114.983 150.555 65.5492 148.728 57.8168 125.319C49.9949 101.639 90.6577 76.2629 117.328 52.5022C143.375 29.2961 165.965 -0.394159 207.708 -8.22194Z"
            fill="#1F73F6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_968_12108"
            x="-229.889"
            y="-296.489"
            width="909.62"
            height="747.621"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="143.362"
              result="effect1_foregroundBlur_968_12108"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

function HeroGradingBottom1() {
  return (
    <span
      className="absolute w-[483px] h-[374px] transform -rotate-[26.33deg] flex-shrink-0 top-1/3 right-1/2 lg:block hidden"
      style={{ fill: "#921774", filter: "blur(174px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="948"
        height="868"
        viewBox="0 0 948 868"
        fill="none"
      >
        <g filter="url(#filter0_f_968_8103)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M684.749 358.025C738.733 334.981 788.529 377.694 841.864 392.538C894.471 407.178 973.731 394.335 989.995 442.976C1006.45 492.188 932.591 532.869 905.162 581.849C884.123 619.418 887.96 668.151 850.269 692.489C809.873 718.573 760.205 710.681 714.283 705.104C656.665 698.106 584.292 703.248 557.623 656.948C530.645 610.111 572.335 551.124 594.954 497.938C617.046 445.992 629.856 381.457 684.749 358.025Z"
            fill="#921774"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_968_8103"
            x="0.837891"
            y="-196.664"
            width="1539.52"
            height="1455.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="274"
              result="effect1_foregroundBlur_968_8103"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

function HeroGradingBottom2() {
  return (
    <span
      className="absolute w-[483px] h-[374px] transform -rotate-[26.33deg] flex-shrink-0 top-1/2 right-1/2 lg:block hidden"
      style={{ fill: "#1F73F6", filter: "blur(174px)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1037"
        height="844"
        viewBox="0 0 1037 844"
        fill="none"
      >
        <g filter="url(#filter0_f_968_8102)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M684.739 555.479C738.722 532.435 788.518 575.149 841.853 589.992C894.46 604.633 973.721 591.789 989.984 640.43C1006.44 689.642 932.58 730.323 905.151 779.304C884.113 816.873 887.949 865.605 850.258 889.943C809.862 916.027 760.194 908.135 714.272 902.558C656.654 895.56 584.281 900.703 557.612 854.402C530.634 807.566 572.324 748.579 594.943 695.392C617.035 643.446 629.845 578.912 684.739 555.479Z"
            fill="#1F73F6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_968_8102"
            x="0.827148"
            y="0.790771"
            width="1539.52"
            height="1455.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="274"
              result="effect1_foregroundBlur_968_8102"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}

