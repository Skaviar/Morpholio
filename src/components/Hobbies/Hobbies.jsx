import React, { useContext } from "react";
import Hobby from "./Hobby";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Hobbies = () => {
  const hobbyData = useContext(GlobalDataContext).hobbies.hobbyData;

  return (
    <div className="flex flex-1 flex-col items-center sm:overflow-y-scroll scrollbar-hide mb-8 ">
      <div className="text-4xl md:text-5xl font-bold p-4 md:mt-6">Hobbies</div>
      <div className="flex flex-col md:m-8 gap-10 items-center">
        {hobbyData.map((hobby, index) => (
          <Hobby key={index} hobby={hobby} isEven={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
