import React from "react";
import { footer } from "../../constants/footer";

function Footer() {
  return (
    <section className="container-fluid bg-secondary pt-16 pb-5">
      <div className="container text-dark-text">
        <div className="grid grid-cols-12 gap-12 mb-28">
          <div className="col-span-3">
            {/* <img src="" alt="" className="" /> */}
            <h2 className="text-3xl font-bold pb-3">EMBIVIEW</h2>
            <p className="text-default font-medium">{footer.description}</p>
          </div>
          <div className="col-span-9 flex ">
            <ul className="flex-2">
              <li className="text-base leading-9 uppercase font-bold text-white mb-4">
                OUR SERVICES
              </li>
              {footer.services.map((service, index) => (
                <li key={index} className="text-default  mb-2">
                  {service}
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              <li className="text-base leading-9 uppercase font-bold text-white mb-4">
                LINKS
              </li>
              {footer.links.map((link, index) => (
                <li key={index} className="text-default mb-2">
                  {link}
                </li>
              ))}
            </ul>
            <div className="flex-3">
              <div className="">
                <h4 className="text-base leading-9 uppercase font-bold text-white mb-4">
                  NEW BUSINESS ?
                </h4>
                <ul className="mb-6">
                  {footer.emails.map((email, index) => (
                    <li
                      key={index}
                      className="text-default text-dark-text mb-2"
                    >
                      {email}
                    </li>
                  ))}
                </ul>
                <p className="">{footer.address}</p>
              </div>
            </div>
          </div>
        </div>
        {/* copy rights section */}
        <div className="text-default text-white flex flex-col lg:flex-row items-center justify-between">
          <div className="">
            <p className="">Copyright © 2024 Embiview. All rights reserved</p>
          </div>
          <div className=" flex">
            <p className="px-4 border-r-2">Terms & Condition</p>
            <p className="px-4">Privacy & Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
