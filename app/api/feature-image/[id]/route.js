import { connectToDB } from "@utils/database";
import FeatureImage from "@models/featureImage";

// DELETE (delete)
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await FeatureImage.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the prompt", { status: 500 });
  }
};
