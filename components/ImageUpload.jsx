"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

function ImageUpload({ setPost, post }) {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      <CldUploadWidget
        uploadPreset="hindustansjngr"
        onSuccess={({ event, info }) => {
          if (event === "success") {
            setPublicId(info.public_id);
            setPost({ ...post, image: info.public_id });
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

      {publicId && (
        <CldImage
          src={publicId}
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
