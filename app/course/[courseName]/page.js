import { getCourseByName, getCourseMetaData } from "@utils/serverCourseQueries";

export async function generateMetadata({ params: { courseName } }) {
  const course = await getCourseMetaData({ courseName });
  return course.metaData;
}

const Course = async ({ params: { courseName } }) => {
  const { courseDescription, coursePromoContent, topics } =
    await getCourseByName({
      courseName,
      projectionField: {
        courseName: 1,
        courseDescription: 1,
        courseOverview: 1,
        topics: 1,
      },
    });
  return <div>baba</div>;
};

export default Course;
