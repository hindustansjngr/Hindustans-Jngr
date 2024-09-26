"use client"

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

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
  )
}

function Feed() {
  const [searchText, setSearchText] = useState("")
  const [posts, setPosts] = useState([])
  const handleSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <section className="feed">

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  )
}

export default Feed
