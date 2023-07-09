/* Server Side Queries for Course */

import { connectToDB } from "@utils/database";
import Course from "@models/course";

const getProjectionField = (projectionField = {}) => {
  return { _id: 1, ...projectionField };
};

export const getAllCourses = async ({ projectionField }) => {
  try {
    await connectToDB();
    return await Course.find({}, getProjectionField(projectionField));
  } catch (error) {
    console.log("error while retrieving all courses", error);
  }
};

export const getCourseByName = async ({ courseName, projectionField }) => {
  try {
    await connectToDB();
    return await Course.findOne(
      { courseName },
      getProjectionField(projectionField)
    );
  } catch (error) {
    console.log("error while retrieving course by name", error);
  }
};

export const getCourseMetaData = async ({ courseName }) => {
  try {
    await connectToDB();
    return await Course.findOne({ courseName }, { metaData: 1 });
  } catch (error) {
    console.log("error while retrieving meta data for course", error);
  }
};
