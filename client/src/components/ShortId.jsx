import React from "react";

const ShortId = ({ shortId }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl text-center mb-6">
      {shortId ? (
        <p>
          URL Generated:{" "}
          <a
            href={`http://localhost:5000/api/${shortId}`}
            className="text-blue-600 hover:underline"
          >
            http://localhost:5000/api/url/{shortId}
          </a>
        </p>
      ) : (
        <p>There is no id</p>
      )}
    </div>
  );
};

export default ShortId;
