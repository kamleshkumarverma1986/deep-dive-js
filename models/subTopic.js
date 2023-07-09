import { Schema, model, models } from "mongoose";

const SubTopicSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  subTopicName: {
    type: String,
    unique: [true, "Sub-topic already exists!"],
    required: [true, "Sub-topic name is required!"],
  },
  htmlContent: {
    type: String,
  },
  isFree: { type: Boolean, required: true, default: true },
  isDraft: {
    type: Boolean,
    required: [true, "Draft is required!"],
    default: true,
  },
  metaData: {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    keywords: { type: String, required: true, trim: true },
  },
});

const SubTopic = models.SubTopic || model("SubTopic", SubTopicSchema);

export default SubTopic;
