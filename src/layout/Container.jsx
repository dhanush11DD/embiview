import PropTypes from "prop-types";
import { cn } from "../utils/cn";
export default function Container({ children, className }) {

    return <div className={cn("container flex lg:flex-row flex-col", className)} >
    {children}
    </div>;
}

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}