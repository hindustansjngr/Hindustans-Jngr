import { connectToDB } from "@utils/database";
import Subscriber from "@models/subscriber";

export const GET = async (req) => {
  try {
    await connectToDB();
    const prompts = await Subscriber.find({});
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
