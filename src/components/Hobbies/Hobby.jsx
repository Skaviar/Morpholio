import React from "react";

const Hobby = (props) => {
  const { hobby, isEven } = props;
  return (
    <div
      className={`flex flex-col w-5/6 md:w-auto xl:flex-row justify-center items-center border border-gray-200 shadow-lg ${
        isEven ? "xl:flex-row-reverse" : ""
      } `}
    >
      <img
        src={hobby.img}
        alt={hobby.hobbyname}
        className="p-4 object-cover w-max md:w-[600px]"
      />
      <div className=" md:w-[600px]">
        <div className="text-3xl text-center font-semibold">
          {hobby.hobbyname}
        </div>
        <div className="text-lg text-justify font-medium p-10">
          {hobby.description}
        </div>
      </div>
    </div>
  );
};

export default Hobby;
