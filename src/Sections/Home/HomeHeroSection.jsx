import { Icon } from "@iconify/react";
import { heroContent } from "../../constants/home.jsx";
import { Header } from "../../components/common";
import { android, hero1, hero2 } from "../../assets/home";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../layout/Container.jsx";
import Section from "../../layout/Section.jsx";

const leftContentVariant = {
  hidden: { opacity: 0, x: -100 }, // Start from the left and hidden
  visible: { opacity: 1, x: 0 }, // End at the center and visible
};

const rightContentVariant = {
  hidden: { opacity: 0, x: 100 }, // Start from the right and hidden
  visible: { opacity: 1, x: 0 }, // End at the center and visible
};

function HomeHeroSection() {
  return (
    <Section isBlack={true} className="lg:min-h-screen flex flex-col md:py-0">
      <Header />
      <Container className="lg:relative lg:py-24">
        <div className=" flex flex-col lg:flex-row gap-10 md:gap-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={leftContentVariant}
            transition={{ duration: 2 }}
            className="lg:w-[60%] w-full flex-col flex items-center lg:items-start justify-center gap-3 md:gap-8"
          >
            <h1 className="heading-xl">
              {heroContent.mainContent} 
                <span className="inline-block ml-6">
                <svg width="42" height="26" viewBox="0 0 42 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.0287 7.61847L34.7762 0.471688L34.0071 0.0142993L30.2317 7.17538C27.3791 5.71744 24.163 4.8884 20.779 4.8884C17.5629 4.8884 14.5006 5.63167 11.7599 6.94667L8.11025 0L7.34117 0.471688L10.9908 7.37549C4.4886 10.9632 0.0559328 17.9241 0 26H41.6C41.572 18.1242 37.3212 11.249 31.0287 7.61847ZM10.0819 17.8098C8.99119 17.8098 8.11025 16.895 8.11025 15.7515C8.11025 14.6509 9.00517 13.7218 10.0819 13.7218C11.1726 13.7218 12.0535 14.6366 12.0535 15.7515C12.0535 16.895 11.1726 17.8098 10.0819 17.8098ZM31.1685 17.8098C30.0918 17.8098 29.1829 16.895 29.1829 15.7515C29.1829 14.6509 30.0779 13.7218 31.1685 13.7218C32.2453 13.7218 33.1681 14.6366 33.1681 15.7515C33.1681 16.895 32.2453 17.8098 31.1685 17.8098Z" fill="url(#paint0_linear_1609_1555)"/>
                <defs>
                <linearGradient id="paint0_linear_1609_1555" x1="20.8" y1="0" x2="20.8" y2="26" gradientUnits="userSpaceOnUse">
                <stop stop-color="#22769B"/>
                <stop offset="1" stop-color="#587FD7"/>
                </linearGradient>
                </defs>
              </svg>
                </span>

            </h1>
            <p className="heading-md text-dark-text mb-6  text-center lg:text-start">
              {heroContent.content}
            </p>
            <div className="hidden lg:block">
              <Link to='/products'>
                <button className="btn btn-hover text-white btn-outline flex gap-3 group">
                  <p className="">Explore More</p>
                  <Icon
                    icon="heroicons:arrow-up-16-solid"
                    className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
                  />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rightContentVariant}
            transition={{ duration: 2 }}
            className="lg:w-[40%] w-full "
          >
            <div className="  relative w-[300px] h-[400px] md:w-[340px] md:h-[400px] lg:w-[360px] lg:h-[400px] mx-auto">
              <div className="absolute -left-6 top-6 lg:left-0 w-full h-full z-30">
                <img src={hero1} alt="Home automation" className="w-full" />
              </div>
              <div className="-top-[64px] -left-20 absolute  z-20">
                <svg id="rotatingText" viewBox="0 0 200 200" width="250" height="250">
                  <defs>
                    <path id="circle" d="M 100, 100
            m -75, 0
            a 75, 75 0 1, 0 150, 0
            a 75, 75 0 1, 0 -150, 0
            ">
                    </path>
                  </defs>
                  <text width="400">
                    <textPath  alignmentBaseline="top" href="#circle" className="text font-lato font-normal text-[16px] leading-[21px] tracking-[5px] uppercase fill-white ">
                    Discover Embedded Android Solutions with us
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute left-6 -top-6 lg:left-20 w-full h-full z-10">
                <img src={hero2} alt="Home automation" className="w-full" />
              </div>
            </div>
          </motion.div>
          <div className="">
            <button className="btn btn-hover mt-10 md:mb-6 text-white btn-outline flex gap-3 mx-auto lg:mx-0 lg:hidden  group">
              <p className="">Explore More</p>
              <Icon
                icon="heroicons:arrow-up-16-solid"
                className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
              />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HomeHeroSection;
