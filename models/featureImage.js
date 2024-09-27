import { Schema, model, models } from "mongoose";

const featureImageSchema = new Schema({
  image_url: {
    type: String,
    unique: [true, "Image already exists"],
    required: [true, "Image is required"],
  },
  alt_text: {
    type: String,
  },
});

const FeatureImage =
  models.FeatureImage || model("FeatureImage", featureImageSchema);
export default FeatureImage;
