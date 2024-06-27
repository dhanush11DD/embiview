import React from "react";

function ContactCard({ contactSec }) {
  return (
    <section className="container-fluid bg-white py-24">
      <div className="container py-28 px-16 bg-[#192080] rounded-2xl relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] border-4 -top-10 -right-14 z-0  border-dark-text rounded-full "></div>
        <div className="absolute w-[600px] h-[600px] border-4 -top-20 -right-80 z-0  border-dark-text rounded-full "></div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="">
            <h1 className="heading-lg text-white">{contactSec.heading}</h1>
            <p className="content-2 text-dark-text">{contactSec.content}</p>
          </div>
          <div className=" z-10">
            <button className="btn btn-white">
              <p className="space-x-11">Let’s connect!</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
