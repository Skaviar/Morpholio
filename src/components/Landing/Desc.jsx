import React from "react";

const Desc = (props) => {
  const { description } = props;
  return (
    <div className="px-6 text-lg text-justify h-max md:py-2 md:px-0 ">
      {description}
    </div>
  );
};

export default Desc;
