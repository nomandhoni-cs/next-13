"use client";
import { useState} from "react";
const CourseSearch = ({getSearchReasults}) => {
    const [query, setQuery] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/courses/search/?query=${query}`);
        const courses = await res.json();
        getSearchReasults(courses);
    }
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search Courses"
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button">Search</button>
    </form>
  );
};
export default CourseSearch;
