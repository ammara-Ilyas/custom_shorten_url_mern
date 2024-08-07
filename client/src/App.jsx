import React, { useState } from "react";
import Tabel from "./components/Tabel";
import ShortId from "./components/ShortId";
import Form from "./components/Form";

const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortId, setshortId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log(data);

      setshortId(data.shortId);
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
      <Tabel url={url} />
    </div>
  );
};

export default URLShortener;
