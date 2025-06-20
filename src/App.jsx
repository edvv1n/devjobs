import React, { useContext } from "react";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import data from "./assets/data.json";
import { ThemeContext } from "./context/ThemeContext";
import { useState } from "react";

const App = () => {
  const { theme} = useContext(ThemeContext);
  const [jobs, setJobs] = useState(data || []);

  const filteredJobCard = (searchTerm) => {
    let filteredJobCard = data;

    // Filter by title/position
    if (searchTerm.title && searchTerm.title.trim() !== "") {
      filteredJobCard = filteredJobCard.filter((jobs) =>
        jobs.position.toLowerCase().includes(searchTerm.title.toLowerCase()) || jobs.company.toLowerCase().includes(searchTerm.title.toLowerCase())
      );
    }

    // Filter by location
    if (searchTerm.location && searchTerm.location.trim() !== "") {
      filteredJobCard = filteredJobCard.filter((jobs) =>
        jobs.location.toLowerCase().includes(searchTerm.location.toLowerCase())
      );
    }

    // Filter by fulltime (contract type)
    if (searchTerm.fulltime === true) {
      filteredJobCard = filteredJobCard.filter(
        (jobs) => jobs.contract.toLowerCase() === "full time"
      );
    }

    setJobs(filteredJobCard);
    console.log(filteredJobCard);
  };

  return (
    <div className={`${theme === "dark" ? "dark:bg-gray-500" : "bg-gray-100"}`}>
      <Header filteredJobs = {filteredJobCard} />
      <JobCard filteredJobs = {filteredJobCard} jobs = {jobs}/>
    </div>
  );
};

export default App;
