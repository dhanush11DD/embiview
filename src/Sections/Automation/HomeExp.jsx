import React from "react";
import { homeExp } from "../../constants/automation.jsx";
import { Icon } from "@iconify/react";
import Section from "../../layout/Section.jsx";
import Container from "../../layout/Container.jsx";

function HomeExp() {
  return (
    <Section isBlack={false} className="">
      <Container className="">
        <div className="">
          <div className="mb-12 md:mb-20">
            <p className="blue-heading mb-2 text-center">{homeExp.blueHead}</p>
            <h2 className="heading-lg text-light-heading text-center">
              {homeExp.heading}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 justify-items-center gap-20 px-7 md:px-2">
            {homeExp.listContent.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="bg-primary mx-auto md:mx-0  p-3 mb-3 rounded-lg flex items-center text-white text-4xl">
                  {item.icon}
                </div>
                <div className="">
                  <h3 className="heading-sm  text-center md:text-start">
                    {item.title}
                  </h3>
                  <p className="text-light-text content-1 hidden md:block">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HomeExp;
