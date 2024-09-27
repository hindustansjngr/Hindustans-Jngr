"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function page() {
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState("Add");

  const [images, setImages] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("/api/feature-image");
      const data = await response.json();
      setImages(data);
      console.log(data);
    };
    fetchImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.set("file", file);

    const response = await fetch("/api/feature-image/add", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      setSubmitting(false);
      alert("Image uploaded successfully");
      router.push("/");
    }
  };

  const handleDelete = async (id) => {
    const hasConfirmed = confirm("Are you sure you want to delete this image?");
    if (hasConfirmed) {
      const response = await fetch(`/api/feature-image/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.push("/");
      }
    }
  };
  return (
    <div>
      <p className="my-8 desc text-left max-w-md">
        Toggle Featured Image Here. This is the slider shown in Home page of <b>Hindsutan's Jngr</b>.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Image
          </span>
          <input
            onChange={(e) => setFile(e.target.files?.[0])}
            placeholder="Upload"
            type="file"
            name="file"
          />
        </label>
        <div className="flex-end my-8 mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 rounded-full text-sm bg-primary-orange text-white border-none"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>

      <div className="mt-16">
        {images.map((image) => (
          <div className="my-16">
            <Image src={image.image_url} alt="image" width={500} height={500} />
            <button
              className="my-4 px-5 py-1.5 rounded-full text-sm bg-primary-orange text-white border-none"
              onClick={() => handleDelete(image._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
