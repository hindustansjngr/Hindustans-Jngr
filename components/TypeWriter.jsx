"use client";

import { Typewriter } from "react-simple-typewriter";

function TypeWriter({ messages }) {
  return (
    <Typewriter words={messages} loop={true} typeSpeed={100}/>
  );
}

export default TypeWriter;
