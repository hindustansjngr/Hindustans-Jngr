import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";

export const GET = async (req) => {
  try {
    await connectToDB();
    const prompts = await FeatureImage.find({});
    console.log(prompts);
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
