import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
    const url = new URL(req.url);
    const pageNo = parseInt(url.searchParams.get("pageNo")) || 1; // Default to page 1 if not provided
    const pageSize = 5; // Number of items per page
    
    try {
        await connectToDB();
        
        const prompts = await Prompt.find({})
        .populate("creator")
        .sort({ _id: -1 })
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize);
        
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 });
    }
}