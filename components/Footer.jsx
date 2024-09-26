"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

function Footer() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      document.getElementById("email").value = session.user.email;
    }
  }, [session]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/subscriber/new`, {
        method: "POST",
        body: JSON.stringify({
          email: document.getElementById("email").value,
        }),
      });
      if (response.ok) {
        alert("Subscribed");
      } else if (response.status === 409) {
        alert("Email already subscribed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-16">
        <form
          className="relative w-full flex-center"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="search_input peer"
          />
          <button
            type="submit"
            className="mx-3 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Subscribe
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center">
          <p className="text-base text-center text-gray-600">
            2024 Hindustan's Jnge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
