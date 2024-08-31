import { Schema, model, models } from "mongoose";

// Define the user schema
const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Username is invalid. It should contain 8-20 characters including at least one uppercase letter, one number, and one special character.",
    ],
  },
  image: {
    type: String,
  },
});

// Create the User model
const User = models.User || model("User", userSchema);

export default User;
