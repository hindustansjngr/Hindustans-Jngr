import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await FeatureImage.find({});
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
