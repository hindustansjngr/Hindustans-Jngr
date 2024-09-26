import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";
import { writeFile } from "fs/promises";

export const POST = async (req) => {
    console.log("Getting")
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return new Response("Image not uploaded", { status: 500 });
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/feature-images/${file.name}`;
  await writeFile(path, buffer);

  try {
    await connectToDB();
    const newFeatureImage = new FeatureImage({ image_url: path.slice(8) });
    await newFeatureImage.save();
    return new Response("Added new feature image", { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
