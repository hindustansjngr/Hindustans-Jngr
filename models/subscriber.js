import { Schema, model, models } from "mongoose";

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
});

const Subscriber = models.Subscriber || model("Subscriber", subscriberSchema);
export default Subscriber;
