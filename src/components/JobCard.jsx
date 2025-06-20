import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const JobCard = ({jobs}) => {
  const { theme, } = useContext(ThemeContext);
  return (
    <div
      className={`grid grid-cols-3 gap-3 h-fit w-full px-8 place-items-center py-[100px] ${
        theme === "dark" ? "dark:bg-gray-500" : "bg-gray-100"
      }`}
    >
      {jobs.map((jobs) => (
        <div
          className={`${
            theme === "dark" ? "dark:bg-gray-800" : "bg-gray-100"} rounded-xl shadow-md relative flex flex-col items-start mb-15 px-3 pb-3 w-full max-w-[19rem]`
          }
        >
          <img
            className="object-contain h-[50px] w-[50px] relative bottom-5.5 rounded-xl ml-3"
            src={jobs.logo}
            alt=""
          />
          <div className="flex flex-col justify-around p-3">
            <div className={`flex ${theme === "dark" ? "dark:text-gray-100" : "text-gray-800"} text-base`}>
              <p>{jobs.postedAt}</p>
              <p className="px-1.5">•</p>
              <p>{jobs.contract}</p>
            </div>

            <p className={`text-lg font-extrabold ${theme === "dark" ? "dark:text-white" : "text-gray-800"}`}>{jobs.position}</p>

            <p className="text-gray-500 text-base">{jobs.company}</p>
          </div>

          <p className="text-[#5964e0] font-bold text-xs p-3">
            {jobs.location}
          </p>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
