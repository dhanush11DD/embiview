import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import { MobileHeroProduct, Product_Hero } from "../../assets/img/products";
import { Header } from "../../components/common";
import { motion } from "framer-motion";
import { heroContent } from "../../constants/products";


const leftContentVariant = {
  hidden: { opacity: 0, x: -100 }, // Start from the left and hidden
  visible: { opacity: 1, x: 0 }, // End at the center and visible
};

const rightContentVariant = {
  hidden: { opacity: 0, x: 100 }, // Start from the right and hidden
  visible: { opacity: 1, x: 0 }, // End at the center and visible
};

export default function HeroProduct() {
  return (
    <Section isBlack={true} className="lg:min-h-screen ">
      <Header />



      <Container className="lg:relative lg:py-24">
        <div className=" flex flex-col lg:flex-row w-full ">
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
              <button className="btn btn-hover text-white btn-outline flex gap-3 group">
                <p className="">Explore More</p>
                <Icon
                  icon="heroicons:arrow-up-16-solid"
                  className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
                />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={rightContentVariant}
            transition={{ duration: 2 }}
            className="lg:w-[40%] w-full flex justify-end items-end"
          >
            <div className="max-w-[600px] mx-auto lg:ml-auto ">
              <img src={Product_Hero} alt="Product_Hero" className="w-full  hidden lg:block" />
              <img src={MobileHeroProduct} alt="MobileHeroProduct" className="w-full block lg:hidden" />
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

