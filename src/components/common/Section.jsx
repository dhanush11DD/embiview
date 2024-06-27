import React from "react";

function Section({ isBlack, children }) {
  return (
    <div
      className={`${
        isBlack ? "bg-secondary" : "bg-white"
      } md:py-24 py-10 container-fluid flex justify-center items-center`}
    >
      <div className="w-full flex lg:flex-col flex-row container">
        {children}
      </div>
    </div>
  );
}

export default Section;
