import React, { useContext, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { ThemeContext } from "../context/themeContext";

const Header = ({ filteredJobs }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    fulltime: false,
  });

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value, event.target.checked);

    // Update the formData state based on the input field changes
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: value, // Update the specific field in formData
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(formData);
    filteredJobs(formData); // Call the filterJobs function with the formData
  };

  return (
    <header
      className={`w-full h-full flex flex-col items-center ${
        theme === "dark" ? "dark:text-[#5964e0]" : "text-white"
      } px-40 py-10 relative rounded-bl-full ${
        theme === "dark" ? "dark:bg-gray-800" : "bg-[#5964e0]"
      }`}
    >
      <div className="flex justify-between w-full">
        <a href="http://localhost:5173/">
          {" "}
          <h3 className="text-2xl font-bold">devjobs</h3>
        </a>

        <div className="flex gap-2 items-center text-2xl">
          <IoSunny />
          <input
            type="checkbox"
            defaultChecked
            onChange={toggleTheme}
            checked={theme === "dark" ? true : false}
            className={`toggle bg-white text-[#5964e0] checked:bg-gray-800 checked:border-white checked:text-white checked:text-shadow-gray-100`}
          />

          <IoMoon />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`flex absolute top-12.5 bg-white px-3 my-10 rounded-md w-fit  text-black border-[1px] border-gray-200 *:flex *:items-center gap-4 *:gap-2 ${
          theme === "dark"
            ? "dark:bg-gray-800 dark:border-[#5964e0]"
            : "bg-white text-black border-gray-100"
        }`}
      >
        <div className="text-[#5964e0] border-r-1 border-slate-200 px-3 py-3 w-full">
          <FaMagnifyingGlass />
          <input
            name="title"
            onChange={handleInputChange}
            className={`w-full pl-2 ${
              theme === "dark"
                ? "text-gray-200 placeholder:text-gray-700"
                : "text-black placeholder:text-gray-200"
            }`}
            type="text"
            placeholder="Filter by title, companies, expertise..."
          />
        </div>

        <div
          className={`text-[#5964e0] border-r-1 border-slate-200 px-3 py-3 w-full`}
        >
          <FaLocationDot />
          <input
            name="location"
            onChange={handleInputChange}
            className={`w-full pl-2 ${
              theme === "dark"
                ? "text-gray-200 placeholder:text-gray-700"
                : "text-black placeholder:text-gray-200"
            }`}
            type="text"
            placeholder="Filter by location"
          />
        </div>

        <div className="w-[582px] flex">
          <div className="">
            <input
              onChange={handleInputChange}
              className="accent-[#5964e0] hover:accent-black appearance-none w-4 h-4 rounded-sm bg-gray-300 shrink-0
    checked:appearance-auto align-middle my-[10px] cursor-pointer"
              type="checkbox"
              name="fulltime"
              id=""
            />
            <label
              htmlFor="fulltime"
              className={`font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-black"
              } text-[12px] ml-2`}
            >
              Full Time Only
            </label>
            <button
              type="submit"
              className="bg-[#5964e0] text-white w-fit px-5 py-1 ml-4 rounded-sm hover:bg-black"
            >
              {" "}
              Search
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Header;
