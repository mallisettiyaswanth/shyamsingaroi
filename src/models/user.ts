import mongoose, { model, Schema } from "mongoose";

interface UserSchemaInterface {
  name: string;
  role: string;
  clerkId: String;
}

const UserSchemaInterface = new Schema<UserSchemaInterface>({
  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  clerkId: {
    type: String,
  },
});

const User =
  mongoose.models?.User ||
  model<UserSchemaInterface>("User", UserSchemaInterface);
