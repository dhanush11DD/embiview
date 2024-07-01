import { Icon } from "@iconify/react";
import { whatSets } from "../../constants/home";
import { AndroidVid } from "../../assets/home";

function WhatSetSection() {
  return (
    <section className="container-fluied  py-28">
      <div className="container text-light-text flex flex-col-reverse lg:flex-row gap-16">
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col gap-2 pb-6 lg:pb-16">
            <p className="blue-heading ">{whatSets.blueHead}</p>
            <h2 className="heading-lg text-light-heading xl:w-[70%] lg:w-[80%] w-full">
              {whatSets.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-12 gap-x-6">
            {whatSets.listContent.map((item, index) => (
              <div key={index} className="flex gap-6 items-center">
                <div className="">
                  <Icon
                    icon="teenyicons:tick-circle-outline"
                    className="text-2xl text-primary"
                  />{" "}
                </div>
                <p className="text-light-text content-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-full self-end">
          <div className="border  border-gray-400 text-white rounded-3xl relative">
            <video autoPlay loop muted playsInline className="rounded-3xl">
              <source src={AndroidVid}  />
            </video>
            <div className="absolute p-5 bg-[#253241] hidden md:block rounded-2xl z-10 -top-16 left-8">
              <p className="heading-md ">85% </p>
              <p className="text-base font-bold"> Battery Health</p>
            </div>
            <div className="absolute p-5 bg-[#253241] hidden md:block rounded-2xl z-10 -bottom-16 -right-8">
              <p className="heading-md ">75%</p>
              <p className="text-base font-bold">Energy Savings Achieved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatSetSection;
