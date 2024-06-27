import React from "react";
import { features } from "../../constants/home.jsx";
import { homeFeatures } from "../../assets/home";

function KeyBenefits() {
  return (
    <section className="container-fluid bg-secondary py-24">
      <div className="container">
        <div className="text-center text-white ">
            <p className="blue-heading mb-2">{features.blueHead}</p>
            <h2 className="heading-lg">{features.heading}</h2>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 text-dark-text gap-16 my-28">
  {/* First content div */}
  <div className="bg-[#212B37] rounded-2xl px-6 py-9">
    <h3 className="heading-sm text-white pb-3">{features.listContent[0].title}</h3>
    <p className="text-default">{features.listContent[0].content}</p>
  </div>

  {/* Center image div */}
  <div className="row-span-2 flex justify-center items-center">
    <img src={homeFeatures} alt="Center Image" />
  </div>

  {/* Second content div */}
  <div className="bg-[#212B37] rounded-2xl px-6 py-9">
    <h3 className="heading-sm text-white pb-3">{features.listContent[1].title}</h3>
    <p className="text-default">{features.listContent[1].content}</p>
  </div>

  {/* Third content div */}
  <div className="bg-[#212B37] rounded-2xl px-6 py-9">
    <h3 className="heading-sm text-white pb-3">{features.listContent[2].title}</h3>
    <p className="text-default">{features.listContent[2].content}</p>
  </div>

  {/* Fourth content div */}
  <div className="bg-[#212B37] rounded-2xl px-6 py-9">
    <h3 className="heading-sm text-white pb-3">{features.listContent[3].title}</h3>
    <p className="text-default">{features.listContent[3].content}</p>
  </div>
</div>

      </div>
    </section>
  );
}

export default KeyBenefits;
