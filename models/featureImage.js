import { Schema, model, models } from "mongoose";

const featureImageSchema = new Schema({
  image_url: {
    type: String,
    required: [true, "Email is required"]
  },
});

const FeatureImage = models.FeatureImage || model("FeatureImage", featureImageSchema);
export default FeatureImage;
