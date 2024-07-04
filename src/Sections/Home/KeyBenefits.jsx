import { useRef } from "react";
import { features } from "../../constants/home.jsx";
import { easeIn, easeOut, motion, useInView } from "framer-motion";
import { homeFeatures } from "../../assets/home";
import { cn } from "../../utils/cn.js";
import {
  arrow1,
  arrow2,
  arrow3,
  arrow4,
  rod1,
  rod2,
  rod3,
  rod4,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
} from "../../assets/home/animation/index.js";

function KeyBenefits() {
  const vectorVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2, ease: easeOut },
    }),
  };

  const rodVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.3, ease: easeIn },
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
      image: vector1,
      alt: "vector1",
      className: "top-[144px]",
      top: "128px",
    },
    {
      id: 2,
      image: vector2,
      alt: "vector2",
      className: "top-[140px] scale-125",
      top: "96px",
    },
    {
      id: 3,
      image: vector3,
      alt: "vector3",
      className: "top-[96px]",
      top: "72px",
    },
    {
      id: 4,
      image: vector4,
      alt: "vector4",
      className: " top-[64px]",
      top: "48px",
    },
    {
      id: 5,
      image: vector5,
      alt: "vector5",
      className: " top-[52px]",
      top: "24px",
    },
  ];

  const featuresRodData = [
    {
      id: 1,
      image: rod1,
      alt: "rod1",
      className: "absolute top-[128px]",
      style: "calc(50% - 152px)",
    },
    {
      id: 2,
      image: rod2,
      alt: "rod2",
      style: "calc(50% - 100px)",
      className: "absolute top-[224px]",
    },
    {
      id: 3,
      image: rod3,
      alt: "rod3",
      className: "absolute top-[244px]",
      style: "calc(50% - 64px)",
    },
    {
      id: 4,
      image: rod4,
      alt: "rod4",
      className: "absolute top-[160px]",
      style: "calc(50% + 100px)",
    },
  ];

  const featuresArrowData = [
    {
      id: 1,
      image: arrow1,
      alt: "arrow1",
      className: "absolute top-0 right-[70%]",
      // style: "calc(50% - 228px)",
    },
    {
      id: 2,
      image: arrow2,
      alt: "arrow2",
      className: "absolute top-0 left-[70%]",
      // style: "calc(50% + 112px)",
    },
    {
      id: 3,
      image: arrow3,
      alt: "arrow3",
      className: "absolute top-[280px] right-[70%]",
      // style: "calc(50% - 228px)",
    },
    {
      id: 4,
      image: arrow4,
      alt: "arrow4",
      className: "absolute top-[280px] left-[70%]",
      // style: "calc(50% + 112px)",
    },
  ];

  const textRef = useRef(null);
  const bottomDivRef = useRef(null);

  const isBottomDivInView = useInView(bottomDivRef, { once: true });
  const isTextInView = useInView(textRef, { once: true });

  return (
    <section className="container-fluid bg-secondary py-24">
      <div className="container">
        <motion.div className="text-center text-white " ref={textRef}>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            className="blue-heading mb-2"
            custom={0}
          >
            {features.blueHead}
          </motion.p>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            className="heading-lg"
            custom={1}
          >
            {features.heading}
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 grid-rows-none text-dark-text gap-6 md:gap-10 lg:gap-16 my-28">
          {/* First content div */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isBottomDivInView ? "visible" : "hidden"}
            className="bg-[#212B37]  order-2 lg:order-1 rounded-2xl px-6 py-9 hover:scale-110 transition-all duration-200 origin-bottom-right"
            custom={2}
          >
            <h3 className="heading-sm text-white pb-3">
              {features.listContent[0].title}
            </h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              className="text-default"
              custom={3}
            >
              {features.listContent[0].content}
            </motion.p>
          </motion.div>

          {/* Center image div */}
          <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 order-1 lg:order-2  justify-center items-center lg:flex hidden">
            <div className={`w-full flex flex-col justify-center items-center`}>
              <motion.div
                ref={bottomDivRef}
                className="w-full h-full relative flex md:flex-row flex-col md:justify-center lg:items-center md:items-end shrink-0"
                custom={4}
              >
                {/* Vectors */}
                <div className="lg:h-[30vh] ">
                  {featuresVector.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={vectorVariants}
                      initial="hidden"
                      animate={isBottomDivInView ? "visible" : "hidden"}
                      className="z-10"
                      custom={item.id}
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

                {featuresRodData.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={rodVariants}
                    initial="hidden"
                    animate={isBottomDivInView ? "visible" : "hidden"}
                    className="z-10"
                    custom={item.id}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={item.className}
                      style={{ right: item.style }}
                      sizes={item.sizes}
                    />
                  </motion.div>
                ))}

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

          <div className="row-span-2 col-span-1 md:col-span-2 lg:col-span-1 order-1 lg:order-2 flex justify-center items-center lg:hidden">
            <img src={homeFeatures} alt="Center Image" />
          </div>

          {/* Second content div */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isBottomDivInView ? "visible" : "hidden"}
            className="bg-[#212B37] order-3 lg:order-3  rounded-2xl px-6 py-9 hover:scale-110 transition-all duration-200 origin-top-right"
            custom={4}
          >
            <h3 className="heading-sm text-white pb-3">
              {features.listContent[1].title}
            </h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              className="text-default"
              custom={5}
            >
              {features.listContent[1].content}
            </motion.p>
          </motion.div>

          {/* Third content div */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isBottomDivInView ? "visible" : "hidden"}
            className="bg-[#212B37] order-1 lg:order-2 rounded-2xl px-6 py-9 hover:scale-110 transition-all duration-200 origin-bottom-left"
            custom={6}
          >
            <h3 className="heading-sm text-white pb-3">
              {features.listContent[2].title}
            </h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              className="text-default"
              custom={7}
            >
              {features.listContent[2].content}
            </motion.p>
          </motion.div>

          {/* Fourth content div */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isBottomDivInView ? "visible" : "hidden"}
            className="bg-[#212B37]  order-4 md:order-4 rounded-2xl px-6 py-9 hover:scale-110 transition-all duration-200 origin-top-left"
            custom={8}
          >
            <h3 className="heading-sm text-white pb-3">
              {features.listContent[3].title}
            </h3>
            <motion.p
              className="text-default"
              variants={textVariants}
              initial="hidden"
              animate={isBottomDivInView ? "visible" : "hidden"}
              custom={9}
            >
              {features.listContent[3].content}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default KeyBenefits;
