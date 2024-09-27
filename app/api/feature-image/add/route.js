import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";
import { writeFile } from "fs/promises";

export const POST = async (req) => {
  const { image } = await req.json();

  console.log(image)

  try {
    await connectToDB();
    const newFeatureImage = new FeatureImage({ image_url: image });
    await newFeatureImage.save();
    return new Response("Added new feature image", { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
