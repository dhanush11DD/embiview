import React from "react";
import { benefits } from "../../constants/automation.jsx";
import { AutomationFeatures } from "../../assets/automation/index.js";

function KeyBenefits() {
  return (
    <section className="container-fluid bg-secondary py-24">
      <div className="container">
        <div className="text-center text-white mb-28">
            <p className="blue-heading mb-2">{benefits.blueHead}</p>
            <h2 className="heading-lg">{benefits.heading}</h2>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 text-dark-text gap-16">
  {/* First content div */}
  <div className="bg-[#212B37] rounded-2xl p-6">
    <h3 className="heading-sm text-white pb-3">{benefits.listContent[0].title}</h3>
    <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
      {benefits.listContent[0].listItems.map((listItem, idx) => (
        <li key={idx}>{listItem}</li>
      ))}
    </ul>
  </div>

  {/* Center image div */}
  <div className="row-span-2 flex justify-center items-center">
    <img src={AutomationFeatures} alt="Center Image" />
  </div>

  {/* Second content div */}
  <div className="bg-[#212B37] rounded-2xl p-6">
    <h3 className="heading-sm text-white pb-3">{benefits.listContent[1].title}</h3>
    <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
      {benefits.listContent[1].listItems.map((listItem, idx) => (
        <li key={idx}>{listItem}</li>
      ))}
    </ul>
  </div>

  {/* Third content div */}
  <div className="bg-[#212B37] rounded-2xl p-6">
    <h3 className="heading-sm text-white pb-3">{benefits.listContent[2].title}</h3>
    <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
      {benefits.listContent[2].listItems.map((listItem, idx) => (
        <li key={idx}>{listItem}</li>
      ))}
    </ul>
  </div>

  {/* Fourth content div */}
  <div className="bg-[#212B37] rounded-2xl p-6">
    <h3 className="heading-sm text-white pb-3">{benefits.listContent[3].title}</h3>
    <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
      {benefits.listContent[3].listItems.map((listItem, idx) => (
        <li key={idx}>{listItem}</li>
      ))}
    </ul>
  </div>
</div>

      </div>
    </section>
  );
}

export default KeyBenefits;
