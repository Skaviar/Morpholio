import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";

const Project = (props) => {
  const { data, filter } = props;
  let visible =
    filter === "all" ||
    data.type.some((type) => type.toLowerCase() === filter.toLowerCase());
  return (
    <Transition
      as="div"
      className={`md:mx-5 my-2 md:my-0 flex flex-col items-start md:scale-[95%] bg-primary border border-gray-300 shadow-lg`}
      show={visible}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className={`flex  ${visible ? "flex-col" : "hidden"} sm:px-5`}>
        <img
          src={data.img}
          alt="Project"
          className="self-center object-fill h-56 p-2 px-6 w-120"
        />
        <div className="px-6 pt-4 text-xl font-semibold">
          {data.title}{" "}
          <a href={data.link} className="font-bold underline text-blue-950 ">
            [Github]
          </a>
        </div>
        <div className="px-6 font-semibold">{data.year}</div>
        <div className="px-6 pt-4 font-serif text-base">
          {data.tech.join(" - ")}
        </div>
        <ul className="px-6 py-4 text-lg">
          {data.points.map((point, index) => (
            <li key={index} className="p-1 list-disc">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Transition>
  );
};

export default Project;
