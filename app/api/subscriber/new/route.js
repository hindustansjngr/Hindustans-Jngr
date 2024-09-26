import { connectToDB } from "@utils/database";
import Subscriber from "@models/subscriber";

export const POST = async (req) => {
  const { email } = await req.json();
  try {
    await connectToDB();

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return new Response("Email already subscribed", { status: 409 })
    }

    const newPrompt = new Subscriber({ email });
    console.log(email);
    await newPrompt.save();
    return new Response("Subscribed", { status: 201 });
  } catch (error) {
    return new Response("Failed to subscribe", { status: 500 });
  }
};
