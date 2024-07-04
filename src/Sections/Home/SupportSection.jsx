import { supportedHardware } from "../../constants/home.jsx";
import AnimatedTextSection from "../../components/animation/text/AnimatedTextSection.jsx";

function SupportSection() {
  return (
    <section className="container-fluid  bg-secondary py-24">
      <div className="container flex justify-between flex-col lg:flex-row gap-8 lg:gap-40">
        <div className="flex-1 p-2 md:p-10  flex items-center">
          <AnimatedTextSection
            isBlack={true}
            blueHead={supportedHardware.blueHead}
            heading={supportedHardware.heading}
            content={supportedHardware.content}
            buttonText="View All"
            buttonLink="/products"
            buttonIcon="heroicons:arrow-up-16-solid"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3 md:gap-8 text-white">
          {supportedHardware.gridContent.map((content, index) => (
            <div
              key={index}
              className=" text-center aspect-square h-full w-full flex flex-col justify-center gap-8 items-center border border-[#2E3B4C] rounded-xl md:rounded-3xl p-7 bg-radial-gradient"
            >
              <div className="max-w-[170px]">
                <img src={content.img} alt="" className="" />
              </div>
              <p className="text-base -my-5 mx-auto  lg:my-0 w-full text-center">
                {content.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
