import { useRef } from "react";
import { benefits } from "../../constants/automation.jsx";
import { easeOut, motion, useInView } from "framer-motion";
import { AutomationFeatures } from "../../assets/automation/index.js";
import Section from "../../layout/Section.jsx";
import {
  arrow1,
  arrow2,
  arrow3,
  arrow4,
} from "../../assets/home/animation/index.js";
import Container from "../../layout/Container.jsx";
import { cn } from "../../utils/cn.js";
import {
  automation1,
  automation2,
  automation3,
  automation4,
} from "../../assets/automation/animation/index.js";

function KeyBenefits() {
  const vectorVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3, ease: easeOut },
    }),
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.4, ease: easeOut },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.4, ease: easeOut },
    }),
  };

  const featuresVector = [
    {
      id: 1,
      image: automation1,
      alt: "vector2",
      className: "top-[108px] ",
    },
    {
      id: 2,
      image: automation2,
      alt: "vector1",
      className: "top-[90px]",
    },

    {
      id: 3,
      image: automation3,
      alt: "vector3",
      className: "top-[56px] ",
    },
    {
      id: 4,
      image: automation4,
      alt: "vector4",
      className: " top-[64px] scale-[1.25]",
    },
  ];

  const featuresArrowData = [
    {
      id: 1,
      image: arrow1,
      alt: "arrow1",
      className: "absolute -top-8 right-[80%]",
      // style: "calc(50% - 228px)",
    },
    {
      id: 2,
      image: arrow2,
      alt: "arrow2",
      className: "absolute -top-8 left-[80%]",
      // style: "calc(50% + 112px)",
    },
    {
      id: 3,
      image: arrow3,
      alt: "arrow3",
      className: "absolute top-[280px] right-[80%]",
      // style: "calc(50% - 228px)",
    },
    {
      id: 4,
      image: arrow4,
      alt: "arrow4",
      className: "absolute top-[280px] left-[80%]",
      // style: "calc(50% + 112px)",
    },
  ];
  const textRef = useRef(null);
  const bottomDivRef = useRef(null);

  const isTextInView = useInView(textRef, { once: true });
  const isBottomDivInView = useInView(bottomDivRef, { once: true });
  return (
    <Section isBlack={true} className="">
      <Container className="">
        <div className="">
          <motion.div
            className="text-center text-white py-10 md:mb-28"
            ref={textRef}
          >
            <motion.p
              className="blue-heading mb-2 text-center"
              variants={textVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              custom={0}
            >
              {benefits.blueHead}
            </motion.p>
            <motion.h2
              className="heading-lg text-center"
              variants={textVariants}
              initial="hidden"
              animate={isTextInView ? "visible" : "hidden"}
              custom={1}
            >
              {benefits.heading}
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 grid-rows-none text-dark-text gap-5 md:gap-16">
            {/* First content div */}
            <motion.div
              className="bg-[#212B37] order-2 lg:order-1 rounded-2xl p-6"
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              custom={2}
            >
              <h3 className="heading-sm text-white pb-3 text-start">
                {benefits.listContent[0].title}
              </h3>
              <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3 text-start">
                {benefits.listContent[0].listItems.map((listItem, idx) => (
                  <motion.li
                    key={idx}
                    variants={textVariants}
                    initial="hidden"
                    animate={isBottomDivInView ? "visible" : "hidden"}
                    custom={idx + 3}
                  >
                    {listItem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Center image div */}
            <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 order-1 lg:order-2 justify-center items-center lg:flex hidden">
              <div
                className={`w-full flex flex-col justify-center items-center`}
              >
                <motion.div
                  ref={bottomDivRef}
                  className="w-full h-full relative flex md:flex-row flex-col md:justify-center lg:items-center md:items-end shrink-0"
                >
                  {/* Vectors */}
                  <div className="lg:h-[30vh] ">
                    {featuresVector.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={vectorVariants}
                        initial="hidden"
                        animate={isBottomDivInView ? "visible" : "hidden"}
                        custom={item.id}
                        className="z-10"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className={cn(
                            "absolute left-1/2 transform -translate-x-1/2",
                            item.className
                          )}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="lg:block hidden">
                    {featuresArrowData.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={arrowVariants}
                        initial="hidden"
                        animate={isBottomDivInView ? "visible" : "hidden"}
                        custom={item.id}
                        className="bg-red-100"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className={item.className}
                          sizes={item.sizes}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 flex order-1 lg:order-2 justify-center items-center lg:hidden">
              <img src={AutomationFeatures} alt="Center Image" />
            </div>

            {/* Second content div */}
            <motion.div
              className="bg-[#212B37] order-3 lg:order-3 rounded-2xl p-6"
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              custom={4}
            >
              <h3 className="heading-sm text-white pb-3">
                {benefits.listContent[1].title}
              </h3>
              <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
                {benefits.listContent[1].listItems.map((listItem, idx) => (
                  <motion.li
                    key={idx}
                    variants={textVariants}
                    initial="hidden"
                    animate={isBottomDivInView ? "visible" : "hidden"}
                    custom={idx + 5}
                  >
                    {listItem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Third content div */}
            <motion.div
              className="bg-[#212B37] order-1 lg:order-2 rounded-2xl p-6"
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              custom={6}
            >
              <h3 className="heading-sm text-white pb-3">
                {benefits.listContent[2].title}
              </h3>
              <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
                {benefits.listContent[2].listItems.map((listItem, idx) => (
                  <motion.li
                    key={idx}
                    variants={textVariants}
                    initial="hidden"
                    animate={isBottomDivInView ? "visible" : "hidden"}
                    custom={idx + 7}
                  >
                    {listItem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Fourth content div */}
            <motion.div
              className="bg-[#212B37] order-4 md:order-4 rounded-2xl p-6"
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              custom={8}
            >
              <h3 className="heading-sm text-white pb-3">
                {benefits.listContent[3].title}
              </h3>
              <ul className="list-disc list-outside ml-4 text-default p-2 flex flex-col mb-3">
                {benefits.listContent[3].listItems.map((listItem, idx) => (
                  <motion.li
                    key={idx}
                    variants={textVariants}
                    initial="hidden"
                    animate={isBottomDivInView ? "visible" : "hidden"}
                    custom={idx + 9}
                  >
                    {listItem}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default KeyBenefits;
