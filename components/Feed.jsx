"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

function Feed() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();

    const fetchImages = async () => {
      const response = await fetch("/api/feature-image");
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <section className="feed">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {images.map((image) => (
          <div>
            <CldImage
              src={image.image_url}
              alt="Feature Image"
              width={1000}
              height={1000}
              className="w-full"
            />
            {/* <h2 className="my-3">{posts[0]?.prompt}</h2> */}
          </div>
        ))}
      </Carousel>

      <PromptCardList data={posts} handleTagClick={() => {}} />

      {posts.length > 0 && (
        <div className="flex justify-center items-center">
          <Link
            href={"/post"}
            className="px-5 py-2 rounded bg-primary-orange text-white border-none"
          >
            Show All
          </Link>
        </div>
      )}
    </section>
  );
}

export default Feed;
