import { heroImg } from "../../assets/automation";
import { heroContent } from "../../constants/automation.jsx";
import { Icon } from "@iconify/react";
import { Header } from "../../components/common";

function HeroSection() {
  return (
    <section className="container-fluid bg-secondary relative flex w-full justify-center items-center min-h-screen">
      {/* header starts */}
      <div className="header absolute top-0 left-0 w-full  my-8">
        <Header />
      </div>
      {/* header end */}
      <div className="container flex flex-col lg:flex-row w-full">
        <div className="lg:w-[50%] w-full flex-col flex items-start justify-center gap-8">
          <h1 className="heading-xl">{heroContent.mainContent}</h1>
          <p className="heading-md text-dark-text mb-6">
            {heroContent.content}
          </p>
          <button className="btn btn-hover text-white btn-outline flex gap-3 group">
            <p className="">Explore More</p>
            <Icon
              icon="heroicons:arrow-up-16-solid"
              className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
            />
          </button>
        </div>
        <div className="lg:w-[50%] w-full">
          <div className="">
            <img src={heroImg} alt="Home automation" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
