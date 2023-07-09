import Course from "@models/course";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    console.log("courseId ", request);
    const courseId = 1;
    await connectToDB();
    const course = await Course.findById(courseId);
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to get the course", { status: 500 });
  }
};
