import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Fullname is required!"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  image: {
    // profile pic
    type: String,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

const User = models.User || model("User", UserSchema);

export default User;
