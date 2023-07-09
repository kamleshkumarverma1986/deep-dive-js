import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  courseName: {
    type: String,
    unique: [true, "Course already exists!"],
    required: [true, "Course name is required!"],
  },
  courseDescription: {
    type: String,
    required: [true, "Course description is required!"],
  },
  coursePromoContent: {
    type: String,
    required: [true, "Course promo content is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  discountInPercentage: {
    type: Number,
    required: [true, "Discount is required!"],
    default: 0,
  },
  metaData: {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    keywords: { type: String, required: true, trim: true },
  },
  isDraft: {
    type: Boolean,
    required: [true, "Draft is required!"],
    default: true,
  },
  topics: [
    {
      topicName: { type: String, required: true, trim: true },
      topicOverview: { type: String, required: true, trim: true },
      subTopics: [
        {
          subTopicName: { type: String, required: true, trim: true },
          subTopic: { type: Schema.Types.ObjectId, ref: "SubTopic" },
        },
      ],
    },
  ],
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
