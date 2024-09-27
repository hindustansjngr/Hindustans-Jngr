import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";

export const POST = async (req) => {
  const { alt_text, image } = await req.json();

  try {
    await connectToDB();
    const newFeatureImage = new FeatureImage({ image_url: image, alt_text: alt_text });
    await newFeatureImage.save();
    return new Response("Added new feature image", { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
