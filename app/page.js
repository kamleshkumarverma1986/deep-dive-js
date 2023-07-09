import CourseCard from "@components/CourseCard";
import { getAllCourses } from "@utils/serverCourseQueries";

const Home = async () => {
  const courses = await getAllCourses({
    projectionField: {
      courseName: 1,
      courseDescription: 1,
      coursePromoContent: 1,
    },
  });

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Enjoy JavaScript
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Boost up your skill</span>
      </h1>
      <p className="desc text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="flex justify-between items-start gap-5">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course._id}
              courseName={course.courseName}
              courseDescription={course.courseDescription}
              coursePromoContent={course.coursePromoContent}
            ></CourseCard>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
