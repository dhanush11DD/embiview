import React from "react";
import { vision } from "../../constants/automation.jsx";
import { Icon } from "@iconify/react";
import { smartHome, smartHome2 } from "../../assets/automation/index.js";
import Section from "../../layout/Section.jsx";
import Container from "../../layout/Container.jsx";
import { motion, useCycle } from "framer-motion";

function VisionSection() {
  const [position, cyclePosition] = useCycle(0, 1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      cyclePosition();
    }, 2000);
    return () => clearInterval(interval);
  }, [cyclePosition]);

  const positionVariants = [
    { top: "0px", left: "0px", width: "450px" },
    { top: "280px", left: "-92px", width: "250px" },
  ];

  return (
    <Section isBlack={false} className="">
      <Container className="">
        <div className="flex flex-col lg:flex-row w-full gap-16">
          <div className="w-full lg:w-[60%] ">
            <div className="lg:max-w-[80%] w-full break-keep mb-10">
              <p className="blue-heading text-center lg:text-start">
                {vision.blueHead}
              </p>
              <h2 className="heading-lg text-light-heading text-center lg:text-start">
                {vision.heading}
              </h2>
              <p className="content-2 text-light-text text-center lg:text-start">
                {vision.content}
              </p>
            </div>
            <ul className="grid md:grid-cols-2 gap-5 md:gap-8">
              {vision.listContent.map((item, index) => (
                <li className="flex items-center gap-4" key={index}>
                  <Icon
                    icon="teenyicons:tick-circle-solid"
                    className="text-primary text-xl"
                  />
                  <p className="content-2 text-light-text">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full hidden lg:block lg:w-[40%]">
            <div className="relative">
              <motion.div
                className=" "
                // animate={positionVariants[position]}
                // transition={{ duration: 0.5 }}
              >
                <img src={smartHome2} alt="" className="absolute z-10 top-[280px] left-[-92px] w-[250px] max-w-full" />
              </motion.div>
              <motion.div
                className="absolute"
                // animate={positionVariants[1 - position]}
                // transition={{ duration: 0.5 }}
              >
                <img src={ smartHome} alt="" className="max-w-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default VisionSection;
