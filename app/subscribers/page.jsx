"use client";

import { useState, useEffect } from "react";

function page() {
  const [subscribers, setSubscribers] = useState([]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch("/api/subscriber", {
          method: "POST",
          body: JSON.stringify({}),
        });
        const data = await response.json();
        data.reverse();
        setSubscribers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubscribers();
  }, []);

  return (
    <div>
      <h2>{subscribers.length} : Subscribers</h2>
      {subscribers.map((subscriber) => (
        <div className="flex justify-between items-center gap-5 prompt_card">
          <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {subscriber.email}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
