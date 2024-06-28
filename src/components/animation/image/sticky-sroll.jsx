"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

import PropTypes from "prop-types";
import { cn } from "../../../utils/cn";
import Section from "../../../layout/Section";
import { Icon } from "@iconify/react/dist/iconify.js";

export const StickyScroll = ({ content, contentClassName }) => {
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
          className={cn(
            "hidden lg:block w-[500px] aspect-square sticky top-0 rounded-2xl border-[1px] border-light-text overflow-hidden",
            contentClassName
          )}
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
  );
};

StickyScroll.propTypes = {
  content: PropTypes.array,
  contentClassName: PropTypes.string,
};
