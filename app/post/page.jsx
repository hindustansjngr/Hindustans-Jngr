"use client";

import PromptCard from "@components/PromptCard";
import { useState, useEffect } from "react";

function page() {
  const [post, setPost] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const fetchPosts = async (pageNo) => {
    const response = await fetch(`/api/prompt?pageNo=${pageNo}`);
    const data = await response.json();

    // Append new data to the existing posts
    setPost((prevPosts) => [...prevPosts, ...data]);
  };

  useEffect(() => {
    fetchPosts(pageNo);
  }, [pageNo]);

  const handleLoadMore = () => {
    setPageNo((prevPageNo) => prevPageNo + 1);
  };

  return (
    <section className="feed">
      <div className="mt-16">
        {post.map((post) => (
          <PromptCard key={post._id} post={post} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={handleLoadMore}
          className="px-5 py-2 rounded bg-primary-orange text-white border-none"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default page;
