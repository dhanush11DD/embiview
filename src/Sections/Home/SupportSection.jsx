import { Icon } from "@iconify/react";
import { RbPi } from "../../assets/home";
import { supportedHardware } from "../../constants/home.jsx";

function SupportSection() {
  return (
    <section className="container-fluid  bg-secondary py-24">
      <div className="container flex justify-between flex-col lg:flex-row gap-40">
        <div className="flex-1 p-10  flex items-center">
          <div className="flex flex-col gap-3">
            <p className="blue-heading ">{supportedHardware.blueHead}</p>
            <h2 className="heading-lg text-white   w-full">{supportedHardware.heading}</h2>
            <p className="content-2 text-dark-text pb-5">{supportedHardware.content}</p>
            <button className="btn btn-hover text-white btn-outline flex gap-3 group w-fit">
            <p className="">View All</p>
            <Icon
              icon="heroicons:arrow-up-16-solid"
              className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
            />
          </button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8 text-white">
          {
            supportedHardware.gridContent.map((content, index) => (
              <div className=" text-center aspect-square flex flex-col justify-center gap-8 items-center border border-[#2E3B4C] rounded-3xl p-7 bg-radial-gradient">
                <div className="max-w-[170px]">
                    <img src={content.img} alt="" className="" />
                </div>
                <p className="text-default w-full lg:w-[80%]">{content.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
