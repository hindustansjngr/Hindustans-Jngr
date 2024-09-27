"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

function Post({ id }) {
  const [post, setPost] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/prompt/${id}`);
        const data = await response.json();
        console.log(response);
        if (!response.ok) {
          router.push("/");
        }
        setPost(data);
        console.log(data);
      } catch (error) {
        router.push("/");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {post && (
        <div>
          <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
              <Image
                src={post.creator.image}
                alt="user_image"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />

              <div className="flex flex-col">
                <h3 className="font-satoshi font-semibold text-gray-900">
                  {post.creator.username}
                </h3>
                <p className="font-inter text-sm text-gray-500">
                  {post.creator.email}
                </p>
              </div>
            </div>
          </div>
          <CldImage src={post.image} alt="Post Image" width={800} height={800} className="my-2" />
          <p className="my-5 font-satoshi text-2xl text-gray-700">
            {post.prompt}
          </p>
          <p
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={() => {
              handleTagClick && handleTagClick(post.tag);
            }}
          >
            {post.tag}
          </p>
        </div>
      )}
    </div>
  );
}

export default Post;
