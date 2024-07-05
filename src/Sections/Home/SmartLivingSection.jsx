import { Icon } from "@iconify/react";
import { smartLiving } from "../../constants/home.jsx";
import { smartLive1, smartLive2, smartLive3 } from "../../assets/home";
import { Link } from "react-router-dom";
import AnimatedTextSection from "../../components/animation/text/AnimatedTextSection.jsx";

function SmartLivingSection() {
  return (
    <section className="container-fluid  bg-secondary py-24">
      <div className="container flex justify-between flex-col lg:flex-row gap-12 lg:gap-40">
        <div className="flex-1 lg:p-10 text-center lg:text-start flex items-center">
          <AnimatedTextSection
            isBlack={true}
            blueHead={smartLiving.blueHead}
            heading={smartLiving.heading}
            content={smartLiving.content}
            buttonText="Smartify Now"
            buttonLink="/automation"
            buttonIcon={"heroicons:arrow-up-16-solid"}
          />
        </div>
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 md:gap-6">
          <div className="h-full max-w-[250px] justify-self-end">
            <img src={smartLive2} alt="" className="w-full h-full" />
          </div>
          <div className="row-span-2 max-w-[300px] lg:scale-x-125 lg:translate-x-7">
            <img src={smartLive1} alt="" className="w-full h-full" />
          </div>
          <div className=" h-full max-w-[250px] justify-self-end">
            <img src={smartLive3} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmartLivingSection;
