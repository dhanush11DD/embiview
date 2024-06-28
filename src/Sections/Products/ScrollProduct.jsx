import { Icon } from "@iconify/react/dist/iconify.js";
import { Sticky1, Sticky2, Sticky3 } from "../../assets/img/products";
// import { StickyScroll } from "../../components/animation/image/sticky-sroll";
import Container from "../../layout/Container";
import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

import Section from "../../layout/Section";

const content = [
  {
    title: "Home Automation",
    description:
      "Explore our vision for transformative home automation, prioritizing advanced technology for everyday living. We focus on customer support, security, privacy, and seamless device compatibility, ensuring a safe, secure, and convenient home environment tailored to your lifestyle.",
    points: [
      "Remote Access and Control",
      "Automation and Scheduling",
      "Integration with Smart Devices",
    ],
    mobileImage: Sticky1,
    image: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={Sticky1}
          className="max-w-[300px] aspect-square"
          alt="linear board demo"
        />
      </div>
    ),
    button: "Smartify Now",
  },
  {
    title: "Automotive Infotainment",
    description:
      "Enhance your driving with Android OS-powered infotainment systems, offering seamless access to apps, advanced navigation, entertainment, and connectivity features for enhanced comfort and convenience on the road.",
    points: [
      "Digital Instrument Clusters",
      "Head Up Displays (HUD)",
      "Rear Seat Entertainment Systems (RSE)",
    ],
    mobileImage: Sticky2,
    image: (
      <div
        className="h-full w-full  flex items-center justify-center text-white"
        style={{
          backgroundColor:
            "radial-gradient(50% 50% at 50% 50%, #4B3987 0%, #111A28 100%)",
        }}
      >
        <img
          src={Sticky2}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    button: "Explore More",
  },
  {
    title: "Tailored Android OS Solutions",
    description:
      "We specialize in customizing Android operating systems to meet the unique requirements of diverse products and industries. Our automated solutions streamline the development and deployment of tailored Android ROMs, integrating features and industrial settings.",
    points: [
      "Customized Linux Kernel",
      "Enhanced Cybersecurity & Functional Safety",
      "HALs and Services",
    ],
    mobileImage: Sticky3,
    image: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={Sticky3}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    button: "Explore More",
  },
];

export default function ScrollProduct() {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  useEffect(() => {
    setActiveCard(0);
  }, []);
  return (
    <div className="bg-secondary " >
      <Container className="justify-center items-center">
      <div className="lg:block hidden">
      <Section isBlack={true}>
      <motion.div
        className="h-[30rem] w-full overflow-y-auto flex justify-between relative space-x-10 rounded-md p-10 md:gap-20"
        ref={ref}
      >
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #4B3987 0%, #111A28 100%)",
          }}
          className=
            "hidden lg:block w-[500px] aspect-square sticky top-0 rounded-2xl border-[1px] border-light-text overflow-hidden"
            
          
        >
          {content[activeCard].image ?? null}
        </div>
        <div className="relative flex items-start px-4">
          <div className="max-w-xl -mt-4">
            {content.map((item, index) => (
              <div key={item.title + index} className={`${index !==2 && "lg:mb-40"}`}>
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="heading-lg text-white"
                >
                  {item.title}
                </motion.h2>
                <div className="mt-3 pl-6 border-l border-[#4E4D4F]">
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="content-2 text-light-text"
                  >
                    {item.description}
                  </motion.p>
                  <ul className="list-none mt-3 text-white">
                    {item.points.map((point, index) => (
                      <li key={index} className="flex items-center content-2">
                        <Icon
                          icon="mdi:check-bold"
                          className="bg-blue-500 rounded-full p-1 mr-2"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-outline lg:mt-8">{item.button}</button>
              </div>
            ))}
            <div className="" />
          </div>
        </div>
      </motion.div>
    </Section>
        </div>
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
      </Container>
    </div>
  );
}
