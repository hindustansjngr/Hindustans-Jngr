"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      data.reverse();
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
            <img src={image.image_url} className="w-full" />
            {/* <h2 className="my-3">{posts[0]?.prompt}</h2> */}
          </div>
        ))}
      </Carousel>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
}

export default Feed;
