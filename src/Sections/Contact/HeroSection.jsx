import { contactHero } from "../../assets/career";
import { heroContent } from "../../constants/contact";
import { Icon } from "@iconify/react";
import { Header } from "../../components/common";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const leftContentVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightContentVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function HeroSection() {
  return (
    <Section isBlack={true} className="lg:min-h-screen flex flex-col md:py-0">
      <Header />
      <Container className="lg:relative lg:py-24">
        <div className=" flex flex-col lg:flex-row w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={leftContentVariant}
            transition={{ duration: 2 }}
            className="flex-1 w-full flex-col flex items-center lg:items-start justify-center gap-3 md:gap-8"
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
            className="flex-1 w-full"
          >
            <div className="max-w-[490px] mx-auto py-6">
              <img src={contactHero} alt="Home automation" className="w-full" />
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

export default HeroSection;
