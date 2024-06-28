import React from "react";
import { benefits } from "../../constants/automation.jsx";
import { AutomationFeatures } from "../../assets/automation/index.js";
import Section from "../../layout/Section.jsx";
import Container from "../../layout/Container.jsx";

function KeyBenefits() {
  return (
    <Section isBlack={true} className="">
      <Container className="">
        <div className="">
        <div className="text-center text-white py-10 md:mb-28">
          <p className="blue-heading mb-2 text-center">{benefits.blueHead}</p>
          <h2 className="heading-lg text-center">{benefits.heading}</h2>
        </div>
        <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 grid-rows-none text-dark-text gap-5 md:gap-16">
          {/* First content div */}
          <div className="bg-[#212B37] order-2 lg:order-1 rounded-2xl p-6">
            <h3 className="heading-sm text-white pb-3 text-start">
              {benefits.listContent[0].title}
            </h3>
            <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3 text-start">
              {benefits.listContent[0].listItems.map((listItem, idx) => (
                <li key={idx}>{listItem}</li>
              ))}
            </ul>
          </div>

          {/* Center image div */}
          <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 flex order-1 lg:order-2 justify-center items-center">
            <img src={AutomationFeatures} alt="Center Image" />
          </div>

          {/* Second content div */}
          <div className="bg-[#212B37] order-3 lg:order-3 rounded-2xl p-6">
            <h3 className="heading-sm text-white pb-3">
              {benefits.listContent[1].title}
            </h3>
            <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
              {benefits.listContent[1].listItems.map((listItem, idx) => (
                <li key={idx}>{listItem}</li>
              ))}
            </ul>
          </div>

          {/* Third content div */}
          <div className="bg-[#212B37] order-1 lg:order-2 rounded-2xl p-6">
            <h3 className="heading-sm text-white pb-3">
              {benefits.listContent[2].title}
            </h3>
            <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
              {benefits.listContent[2].listItems.map((listItem, idx) => (
                <li key={idx}>{listItem}</li>
              ))}
            </ul>
          </div>

          {/* Fourth content div */}
          <div className="bg-[#212B37] order-4 md:order-4 rounded-2xl p-6">
            <h3 className="heading-sm text-white pb-3">
              {benefits.listContent[3].title}
            </h3>
            <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
              {benefits.listContent[3].listItems.map((listItem, idx) => (
                <li key={idx}>{listItem}</li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </Container>
    </Section>
  );
}

export default KeyBenefits;
