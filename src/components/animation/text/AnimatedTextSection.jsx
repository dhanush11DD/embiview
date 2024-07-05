// src/components/AnimatedTextSection.jsx
import React from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.3, ease: "easeOut" },
  }),
};

const AnimatedTextSection = ({
  blueHead,
  heading,
  content,
  buttonText,
  buttonLink,
  buttonIcon,
  isBlack,
}) => {
  const textRef = React.useRef(null);
  const isTextInView = useInView(textRef, { once: true });

  return (
    <motion.div
      className={`flex flex-col ${isBlack ? "gap-3" : "gap-5"}`}
      ref={textRef}
    >
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        custom={0}
        className="blue-heading"
      >
        {blueHead}
      </motion.p>
      <motion.h2
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        custom={1}
        className={`heading-lg w-full ${
          isBlack
            ? "text-white"
            : "text-light-heading pb-2  xl:w-[70%] lg:w-[80%] "
        }`}
      >
        {heading}
      </motion.h2>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
        custom={2}
        className={`content-2 pb-5 ${
          isBlack ? "text-dark-text" : "text-light-text"
        }`}
      >
        {content}
      </motion.p>
      {buttonText && buttonLink && (
        <Link to={buttonLink}>
          <motion.button
            variants={textVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            custom={3}
            className="btn btn-hover btn-outline flex gap-3 group w-fit"
          >
            <p>{buttonText}</p>
            {buttonIcon && (
              <Icon
                icon={buttonIcon}
                className="text-lg rotate-45 group-hover:rotate-90 transition-all duration-75"
              />
            )}
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
};

AnimatedTextSection.propTypes = {
  blueHead: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonIcon: PropTypes.string,
  isBlack: PropTypes.bool,
};

export default AnimatedTextSection;
