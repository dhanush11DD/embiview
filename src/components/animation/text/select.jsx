import { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "../../../utils/cn.js";

const Select = forwardRef(function Input({ className, type, ...props }, ref) {
  const radius = 100; // change this to increase the radius of the hover effect
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <select
        name="cars" id="cars"
        type={type}
        className={cn(

          `flex w-full  border-none bg-white text-black shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 
          focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400
          disabled:cursor-not-allowed disabled:opacity-50
          group-hover/input:shadow-none transition duration-400
          `,
          className
        )}
        ref={ref}
        {...props}
      />
    </motion.div>
  );
});

Select.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};

Select.displayName = "Select";

export { Select };
