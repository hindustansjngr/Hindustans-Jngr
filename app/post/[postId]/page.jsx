import Post from "@components/Post";

export default async function PostPage({ params }) {
  const { postId } = params;
  return (
    <Post id={postId} />
  );
}
