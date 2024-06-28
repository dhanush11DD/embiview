import React from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/embiviev-logo.png";
import { footer } from "../../constants/footer";
import Container from "../../layout/Container";

function Footer() {
  return (
    <section className="bg-secondary text-white">
          <Container  className="lg:flex-col md:py-0 lg:py-0 md:p-16 lg:p-20 py-10 px-2 md:gap-12 bg-[#101722]">
    {/* top */}
    <div className="w-full flex lg:flex-row flex-col justify-center md:items-start items-center lg:justify-between md:gap-12 xl:gap-20 lg:gap-10">
      {/* Left Details */}
      <div className="flex flex-col md:items-start justify-center items-center gap-3 md:mb-0 mb-8">
        <img src={brandLogo} width={100} height={100} alt="logo" />
        <p className="w-full text-[#B3B3B3] font-medium leading-6 tracking-[0.32px] md:max-w-[380px] md:text-start text-center lg:block md:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna
        </p>
      </div>

      {/* Right Links */}
      <div className="w-full flex md:flex-row flex-col justify-between md:items-start items-center md:mb-0 mb-10">
        {/* Our Services */}
        <div className="flex flex-col md:text-base md:text-start text-center leading-9 md:mb-0 mb-8">
          <div className="uppercase md:mb-4 text-white md:border-l-4 md:border-toptitle md:pl-2">
            <p className="font-bold">Our Services</p>
          </div>
          {footer.services.map((item,i) => (
            <p
              key={i}
              className="leading-9 md:font-semibold text-[#B3B3B3]"
            >
              {item}
            </p>
          ))}
        </div>
        {/* Links */}
        <div className="flex flex-col md:text-base md:text-start text-center leading-9 md:mb-0 mb-8">
          <div className="uppercase md:mb-4 font-bold text-white md:border-l-4 md:border-toptitle md:pl-2">
            <p className="">Links</p>
          </div>

          {footer.links.map((item,i) => (
            <p
              key={i}
              className="leading-9 md:font-medium text-[#B3B3B3]"
            >
              {item}
            </p>
          ))}
        </div>
        {/* New Business */}
        <div className="flex flex-col md:text-start text-center leading-9 md:font-semibold text-[#B3B3B3] tracking-[0.32px]">
          {/* Title */}
          <p className="md:text-base  text-white uppercase">
            New Business
          </p>
          {/* Email */}
          <p className="md:mb-6 mb-2">embiview@gmail.com</p>
          {/* Address */}
          <p className="md:max-w-[300px] md:mb-6 mb-2">
            3891 Ranchview Dr. Richardson, California 62639
          </p>
          {/* Phone */}
          <p className="">+123 2343 2354</p>
        </div>
      </div>
    </div>
    {/* bottom */}
    <div className="h-auto w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center font-semibold md:text-base text-[11px] text-white  leading-7 tracking-[0.2px]">
      {/* Copyright */}
      <div>© 2024 Embiview. All Rights Reserved by Embiview Pvt Ltd.</div>

      {/* Legal */}
      <div className="flex gap-2">
        <p>Terms & Condition</p>
        <span>|</span>
        <p>Privacy & Policy</p>
      </div>
    </div>
    </Container>
    </section>
  );
}

export default Footer;
