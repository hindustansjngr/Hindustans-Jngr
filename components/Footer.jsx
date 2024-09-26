"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
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
            Contact Us Here.
            <br />
            <a className="text-black text-2xl" href="mailto:hindustanjngr@gmail.com">hindustanjngr@gmail.com</a>
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <a href={"/"} className="mx-3 text-base text-center text-gray-600">
            <Image
              src={"/assets/icons/facebook.png"}
              width={40}
              height={40}
              alt="facebook"
            />
          </a>
          <a href={"https://www.instagram.com/hindustans_jngr/"} className="mx-3 text-base text-center text-gray-600">
            <Image
              src={"/assets/icons/instagram.png"}
              width={40}
              height={40}
              alt="instagram"
            />
          </a>
          <a href={"/"} className="mx-3 text-base text-center text-gray-600">
            <Image
              src={"/assets/icons/twitter.png"}
              width={40}
              height={40}
              alt="twitter"
            />
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <p className="text-base text-center text-gray-600">
            Copyright &copy; <a href="/">Hindustan's Jngr</a> - All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
