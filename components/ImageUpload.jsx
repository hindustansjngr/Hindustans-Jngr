"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

function ImageUpload({ setPost, post }) {
  const [url, setUrl] = useState("");
  return (
    <>
      <CldUploadWidget
        uploadPreset="hindustansjngr"
        onSuccess={({ event, info }) => {
          if (event === "success") {
            setUrl(info.secure_url);
            setPost({ ...post, image: info.secure_url });
          }
        }}
      >
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className="px-5 py-1.5 rounded text-sm bg-primary-orange text-white border-none"
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>

      {url && (
        <Image
          src={url}
          alt="Uploaded Image"
          width={300}
          height={300}
          className="my-3"
        />
      )}
    </>
  );
}

export default ImageUpload;
