import Link from "next/link";
async function fetchCourses() {
  const response = await fetch("http://localhost:3000/api/courses", {
    next: {
      revalidate: 60,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
  const courses = await response.json();
  return courses;
}
const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <div className="courses">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <h3>{course.title}</h3>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={`/courses/${course.id}`} className="btn" target="_blank">Go to Course</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
