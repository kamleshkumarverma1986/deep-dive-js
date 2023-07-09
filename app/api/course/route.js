import Course from "@models/course";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const {
    userId,
    courseName,
    courseDescription,
    coursePromoContent,
    price,
    discountInPercentage,
    metaData,
  } = await request.json();

  try {
    await connectToDB();
    const sessionUser = await User.findById(userId);

    // Add for admin check also [TODO]
    if (!sessionUser) {
      return new Response("You are unauthorized", { status: 401 });
    }

    const newCourse = new Course({
      courseName,
      courseDescription,
      coursePromoContent,
      price,
      discountInPercentage,
      metaData,
    });

    await newCourse.save();
    return new Response(JSON.stringify(newCourse), { status: 201 });
  } catch (error) {
    console.log("error", error);
    return new Response("Failed to create a new course", { status: 500 });
  }
};
