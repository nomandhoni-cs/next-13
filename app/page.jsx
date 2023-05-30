'use client'
import { useState, useEffect } from "react";
import LoadingPage from "./loading";
import Courses from "./componenets/Courses"
import CourseSearch from "./componenets/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => { 
      const response = await fetch("http://localhost:3000/api/courses", {
        next: {
          revalidate: 60,
        },
      });
      // await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
      const courses = await response.json();
      setCourses(courses);
      setIsLoading(false);
    }
    fetchCourses();
  }, []);
  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Home Page</h1>
      <CourseSearch getSearchReasults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage;