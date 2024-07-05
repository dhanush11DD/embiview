import { Icon } from "@iconify/react";
import { heroContent } from "../../constants/home.jsx";
import { Header } from "../../components/common";
import { hero1, hero2 } from "../../assets/home";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../layout/Container.jsx";
import Section from "../../layout/Section.jsx";
import ReactCurvedText from 'react-curved-text'

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
            <h1 className="heading-xl">{heroContent.mainContent}</h1>
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
              <div className="-top-[96px] -left-20 absolute  z-20">
                <div className="animate-spin animate-spin-slow">
                  <ReactCurvedText id="rotatingText" width='300' className="tracking-normal "
                    height={300}
                    cx='152'
                    cy={150}
                    rx={100}
                    ry={100}
                    startOffset='0'
                    reversed={true}
                    text='Discover Embedded Android Solutions with us'
                    textProps={{
                      style: {
                        fontSize: '16px',  // Set font size
                        letterSpacing: '0.3em' , // Adjust letter spacing for spacing between characters
                        textTransform: 'uppercase'  // Capitalize text, use 'uppercase' or 'lowercase' or 'capitalize'
                      }
                    }}
                    textPathProps={{ "fill": "#ffffff" }}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null} />
                </div>
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
