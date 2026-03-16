import React, { useContext, useState } from "react";
import Project from "./Project";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";
const Projects = () => {
  const projData = useContext(GlobalDataContext).projects.projData;
  const [filter, setFilter] = useState("all");

  const handleFilter = (type) => {
    setFilter(type.toLowerCase());
  };
  const types = ["All", "Frontend", "Backend", "AWS", "Mobile", "Blockchain"];

  return (
    <div className="flex flex-col flex-1 sm:overflow-y-scroll scrollbar-hide pb-4 md:pb-0">
      <div className="flex justify-center w-full bg-primary">
        <div className="flex flex-col items-center lg:items-start sm:m-2">
          <div className="my-8 text-5xl font-bold text-center w-screen">
            Projects
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 self-center justify-center items-center gap-4 my-2">
            {types.map((type, index) => (
              <button
                className=" py-0.5 w-[30vw] sm:w-[200px] text-center font-semibold bg-primary transition duration-100 ease-out hover:scale-105 hover:bg-secondary text-gray-800 border border-gray-400 rounded-full shadow"
                key={index}
                onClick={() => handleFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="grid px-2 self-center overflow-y-scroll scrollbar-hide w-[90%] sm:px-20 lg:grid-cols-2 ">
            {projData.map((project, index) => (
              <Project key={index} data={project} filter={filter} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
