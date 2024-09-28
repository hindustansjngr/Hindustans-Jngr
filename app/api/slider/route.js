import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";

export const POST = async () => {
  try {
    await connectToDB();
    const images = await FeatureImage.find({});
    if (!images) return new Response("No images found", { status: 404 });
    return new Response(JSON.stringify(images), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
