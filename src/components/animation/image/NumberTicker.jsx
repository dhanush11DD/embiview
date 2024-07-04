import { useInView, useMotionValue, useSpring } from "framer-motion";
import React from "react";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return (
    <span
      className={"inline-block tabular-nums text-black "}
      ref={ref}
    />
  );
}

NumberTicker.propTypes = {
  value: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["up", "down"]),
  delay: PropTypes.number,
  className: PropTypes.string,
};
