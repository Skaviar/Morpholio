import React from "react";

const Blog = (props) => {
  const { blog, isLast, isEven } = props;
  return (
    <div>
      <div
        className={`flex flex-col xl:flex-row items-center ${
          !isLast ? "pb-10" : "pb-0"
        }
        ${!isEven ? "xl:flex-row-reverse" : ""}`}
      >
        <img
          src={blog.img}
          alt={blog.title}
          className="object-contain w-[250px] h-[300px] mx-10"
        />
        <div className="flex flex-col gap-10 items-center">
          <div className="text-xl lg:text-3xl font-semibold w-4/5">
            {blog.title}{" "}
            <a
              href={blog.link}
              className="text-lg lg:text-2xl text-blue-950 font-bold underline"
            >
              {blog.label}
            </a>
          </div>
          <div className="w-4/5 text-lg text-justify">{blog.info}</div>
        </div>
      </div>
      {!isLast && (
        <div className="self-center border-b-[1px] border-gray-400" />
      )}
    </div>
  );
};

export default Blog;
