import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Sticky1, Sticky2, Sticky3 } from "../../assets/img/products";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import { content } from "../../constants/products";

gsap.registerPlugin(ScrollTrigger);

const images = [Sticky1, Sticky2, Sticky3];

function ScrollProduct() {
  useEffect(() => {
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

      images.forEach((_, i) => {
        if (i !== images.length - 1) {
          animation
            .to(`.image-${i}`, { opacity: 1, zIndex: 2, duration: 1 })
            .to(`.image-${i}`, { opacity: 0, zIndex: 1, duration: 1 }, "+=1");
        } else {
          animation.to(`.image-${i}`, { opacity: 1, zIndex: 2, duration: 1 });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="lg:hidden text-center space-y-10 py-10 px-6">
          {content.map((item, index) => (
            <div key={index} className="w-full text-white ">
              <h2 className="mb-10 heading-lg">{item.title}</h2>
              <div
                className="w-[60%] mx-auto aspect-square rounded-2xl border-[0.5px] border-light-text p-8 mb-8"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #4B3987 0%, #111A28 100%)",
                }}
              >
                <img
                  src={item.mobileImage}
                  alt="mobile image"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mb-6 text-light-text">{item.description}</p>
              <div className="flex flex-col items-center">
                <ul className="lg:w-full">
                  {item.points.map((point, index) => (
                    <li key={index} className="flex items-center content-2">
                      <Icon
                        icon="mdi:check-bold"
                        className="bg-primary text-black rounded-full p-1 mr-2"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
        <section className="sectionRef  bg-secondary hidden lg:flex">
      <Container>
        {/* left */}
        <div className="imageRef w-1/2 h-screen flex flex-col justify-center items-center">
          <div className="w-[500px] h-[500px] relative">
            {images.map((src, index) => (
              <div
                key={index}
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #4B3987 0%, #111A28 100%)",
                }}
                className={`image image-${index} absolute w-full h-full border-[1px] border-light-text rounded-2xl p-16`}
              >
                <img
                  src={src}
                  alt={`img-${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* right */}
        <div className="w-1/2 flex justify-center items-center flex-col">
          {content.map((content, index) => (
            <div
              key={index}
              className="text-white h-[40rem] flex flex-col justify-center ml-auto my-32"
            >
              <h2 className="heading-lg">{content.title}</h2>
              <div className="mt-3 pl-6 border-l border-[#4E4D4F]">
                <p className="mb-6 text-light-text">{content.description}</p>
                <ul className="lg:w-full">
                  {content.points.map((point, idx) => (
                    <li key={idx} className="flex items-center content-2">
                      <Icon
                        icon="mdi:check-bold"
                        className="bg-primary text-black rounded-full p-1 mr-2"
                      />
                      {point}
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
    </>
    
  );
}

export default ScrollProduct;
