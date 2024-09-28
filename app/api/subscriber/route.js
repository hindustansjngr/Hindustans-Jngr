import { connectToDB } from "@utils/database";
import Subscriber from "@models/subscriber";

export const POST = async () => {
  try {
    await connectToDB();
    const subscribers = await Subscriber.find({});
    if (!subscribers)
      return new Response("No subscribers found", { status: 404 });
    return new Response(JSON.stringify(subscribers), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
