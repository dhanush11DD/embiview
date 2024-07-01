import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { digitalSec } from "../../constants/ivi";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DigitalSection() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let ctx = gsap.context(() => {
        gsap.set(".image", { opacity: 0, zIndex: 1 });
        gsap.set(".image:first-child", { opacity: 1, zIndex: 2 });

        const animation = gsap.timeline({
          scrollTrigger: {
            trigger: ".sectionRef",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: ".imageRef",
          },
        });

        digitalSec.forEach((_, i) => {
          if (i !== digitalSec.length - 1) {
            animation
              .to(`.image-${i}`, { opacity: 1, zIndex: 2, duration: 1 })
              .to(`.image-${i}`, { opacity: 0, zIndex: 1, duration: 1 }, "+=1");
          } else {
            animation.to(`.image-${i}`, { opacity: 1, zIndex: 2, duration: 1 });
          }
        });
      });
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="sectionRef bg-secondary flex">
      <Container>
        {/* left */}
        <div className="imageRef w-full lg:w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="w-[500px] h-[500px] relative">
            {digitalSec.map((item, index) => (
              <div
                key={index}
                className={`image image-${index} absolute w-full h-full  p-5`}
              >
                <img
                  src={item.img}
                  alt={`img-${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 flex justify-center items-center flex-col">
          {digitalSec.map((item, index) => (
            <div
              key={index}
              className="text-white h-[40rem] flex flex-col justify-center ml-auto my-32"
            >
                <h2 className="heading-lg  text-center lg:text-start mb-3">
                  {item.heading}
                </h2>
                <div className=" px-2 text-center lg:text-start lg:px-8 py-2 lg:border-l border-gray-400">
                  <p className="content-2 text-dark-text mb-3">
                    {item.content}
                  </p>
                  <ul className="mt-8">
                    {item.listContent.map((item, index) => (
                      <li key={index} className=" flex items-center mb-3 gap-4">
                        <div className="text-primary text-xl">
                          <Icon icon="teenyicons:tick-circle-solid" />
                        </div>
                        <p className="content-2 text-dark-text ">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          ))}
        </div>
        <div className="h-80"></div>
      </Container>
    </section>
  );
}

export default DigitalSection;
