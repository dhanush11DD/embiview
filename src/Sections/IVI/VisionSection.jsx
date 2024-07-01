import React from "react";
import { vision } from "../../constants/ivi";
import { Icon } from "@iconify/react";
import { smartHome, smartHome2 } from "../../assets/automation/index.js";
import Section from "../../layout/Section.jsx";
import Container from "../../layout/Container.jsx";
import { visionImg } from "../../assets/ivi";

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
          </div>
          <div className="w-full hidden lg:block lg:w-[40%]">
              <div className="max-w-[400px] mx-auto">
                <img src={visionImg} alt="" className="" />
              </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default VisionSection;
