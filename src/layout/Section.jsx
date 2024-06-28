import PropTypes from "prop-types";
import { cn } from "../utils/cn";

function Section({ isBlack, children, className }) {
  return (
    <div
     className={cn(`${
        isBlack ? "bg-secondary" : "bg-white"
      } relative flex justify-center items-center md:py-24 py-10 md:px-0 px-6 `, className)}
      
    >
      {children}
    </div>
  );
}

Section.propTypes = {
  isBlack: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
