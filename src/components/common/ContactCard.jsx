import React from "react";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Icon } from "@iconify/react";
import contactImg from "../../assets/contact-card.png";
import { Link } from "react-router-dom";

const listArr = [
  {
    icon: <Icon icon="material-symbols:quickreply-outline" />,
    title: "Instant Access",
    content: "Begin exploring Embiview’s full suite of features immediately",
  },
  {
    icon: <Icon icon="icon-park-outline:workbench" />,
    title: "Quality",
    content: "Reliability you can count on with seamless performance.",
  },
  {
    icon: <Icon icon="bx:support" />,
    title: "Dedicated Support",
    content: "Our team is here to assist you every step of the way.",
  }
]

function ContactCard({ contactSec }) {
  return (
    <Section isBlack={false} className="">
      <Container className="bg-[#192080] rounded-3xl relative gap-6 text-white items-center py-9 lg:py-16 px-5 lg:px-28">

        <div className="lg:w-[60%] w-full h-full">
          <div className="flex flex-col">
            <h2 className="heading-lg">{contactSec.heading}</h2>
            <p className="content-2 text-dark-text">{contactSec.content}</p>
            <Link to="/contact" className="btn bg-glass-gradient mt-10 text-white w-fit cursor-pointer gap-3 ">
              <p className="pointer-events-none">Let’s Connect</p>
              <Icon
                icon="heroicons:arrow-up-16-solid"
                className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
              />
            </Link>
          </div>
          <div className="absolute pointer-events-none bottom-0 left-0 z-0 max-w-[300px] hidden md:block">
            <img src={contactImg} alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:w-[40%] w-full">
          {
            listArr.map((item, index) => (
              <div className="p-3 flex items-center gap-3 bg-glass-gradient rounded-xl z-10" key={index}>
                <div className="bg-glass-gradient text-3xl p-4 flex items-center justify-center rounded-md h-full">
                  {item.icon}
                </div>
                <div className="w-4/6">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <h3 className="text-base text-dark-text">{item.content}</h3>
                </div>
              </div>
            ))

          }

        </div>
      </Container>
    </Section>
  );
}

export default ContactCard;
