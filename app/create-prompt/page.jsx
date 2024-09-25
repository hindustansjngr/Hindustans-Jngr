"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

function page() {
  const { data: session } = useSession();
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState();
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      data.set("file", file);
      data.set("userId", session?.user.id);
      data.set("prompt", post.prompt);
      data.set("tag", post.tag);

      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      setFile={setFile}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
}

export default page;
