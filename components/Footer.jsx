"use client";

import { useSession } from "next-auth/react";

function Footer() {
  const { data: session } = useSession();

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
            value={session?.user.email}
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
            2023 Promptopia. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
