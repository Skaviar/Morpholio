import React, { useContext } from "react";
import Blog from "./Blog";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Blogs = () => {
  const blogs = useContext(GlobalDataContext).blogs;

  return (
    <div className="w-screen flex flex-1 flex-col items-center bg-primary sm:overflow-y-scroll scrollbar-hide">
      <img
        src={blogs.cover}
        alt="blog cover"
        className="w-screen h-[50vh] object-center object-cover"
      />
      <div className="mb-[5%] md:relative md:bottom-[180px]  md:mb-[-5%] flex flex-col w-4/5 lg:w-3/5 bg-primary items-center">
        <div className="text-4xl md:text-5xl font-bold p-4 md:mt-6">
          My Blogs
        </div>
        <div className="mx-10 font-semibold md:text-lg md:mx-20 lg:mx-32 mt-10 text-justify">
          {blogs.summary}
        </div>
      </div>
      <div className="flex-col flex md:w-4/5 min-[1600px]:w-[65%] mb-10 items-center">
        <div className=" w-4/5 border-b-[1px] border-gray-800 xl:mb-18" />
        <div className="flex flex-col items-center w-4/5">
          {blogs.blogData.map((blog, index) => (
            <Blog
              key={index}
              blog={blog}
              isEven={index % 2 === 0}
              isLast={index === blogs.blogData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
