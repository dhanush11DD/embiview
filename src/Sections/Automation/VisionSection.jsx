import React from "react";
import { vision } from "../../constants/automation.jsx";
import { Icon } from "@iconify/react";
import { smartHome, smartHome2 } from "../../assets/automation/index.js";
import Section from "../../layout/Section.jsx";
import Container from "../../layout/Container.jsx";

function VisionSection() {
  return (
    <Section isBlack={false} className="">
      <Container className="">
        <div className="flex flex-col lg:flex-row w-full gap-16">
          <div className="w-full lg:w-[60%] ">
            <div className="lg:max-w-[80%] w-full break-keep mb-10">
              <p className="blue-heading text-center lg:text-start">{vision.blueHead}</p>
              <h2 className="heading-lg text-light-heading text-center lg:text-start">
                {vision.heading}
              </h2>
              <p className="content-2 text-light-text text-center lg:text-start">{vision.content}</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-5 md:gap-8">
              {vision.listContent.map((item, index) => (
                <li className="flex items-center gap-4" key={index}>
                  <Icon
                    icon="teenyicons:tick-circle-solid"
                    className="text-primary text-xl"
                  />
                  <p className="content-2 text-light-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full hidden lg:block lg:w-[40%]">
            <div className="relative">
              <div className="max-w-[400px] absolute top-0 left-0">
                <img src={smartHome} alt="" className="" />
              </div>
              <div className="max-w-[250px] absolute top-64 -left-12">
                <img src={smartHome2} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default VisionSection;
