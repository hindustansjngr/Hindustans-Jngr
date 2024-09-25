import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import { writeFile } from "fs/promises";

export const POST = async (req) => {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return new Response("Image not uploaded", { status: 500 });
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/post/${file.name}`;
  await writeFile(path, buffer);

  const userId = data.get("userId");
  const prompt = data.get("prompt");
  const tag = data.get("tag");
  try {
    await connectToDB();
    const newPrompt = new Prompt({ creator: userId, image: path.slice(8), prompt, tag });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
