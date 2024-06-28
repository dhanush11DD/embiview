import { heroImg } from "../../assets/automation";
import { heroContent } from "../../constants/automation.jsx";
import { Icon } from "@iconify/react";
import { Header } from "../../components/common";
import Section from "../../layout/Section";
import Container from "../../layout/Container";

function HeroSection() {
  return (
    <Section
      isBlack={true}
      className="lg:min-h-screen flex flex-col md:py-0"
    >
      <Header />
      <Container className="lg:relative lg:py-24">
        <div className=" flex flex-col lg:flex-row w-full">
          <div className="lg:w-[50%] w-full flex-col flex items-center lg:items-start justify-center gap-3 md:gap-8">
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
          </div>
          <div className="lg:w-[50%] w-full">
            <div className="">
              <img src={heroImg} alt="Home automation" className="w-full" />
            </div>
          </div>
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
