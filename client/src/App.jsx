import React, { useState } from "react";
import Tabel from "./components/Tabel";
import ShortId from "./components/ShortId";
import Form from "./components/Form";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortId, setshortId] = useState("");
  const [urls, setUrls] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle URL submission logic here, e.g., make an API call to shorten the URL
    // Assume we get back a response with a new ID and an updated list of URLs
    try {
      const response = await fetch("/api/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log(data);

      // setId(data.id);
      // setUrls(data.urls);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex  w-full flex-col items-center min-h-screen bg-gray-100 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">URL Shortener</h1>
      <Form url={url} setUrl={setUrl} handleSubmit={handleSubmit} />
      <ShortId shortId={shortId} />
      <Tabel urls={urls} />
    </div>
  );
};

export default URLShortener;
