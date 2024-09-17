import React from "react";

const LargeContainer = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto w-full md:px-8 sm:px-6 px-3">
      {children}
    </div>
  );
};

export default LargeContainer;
