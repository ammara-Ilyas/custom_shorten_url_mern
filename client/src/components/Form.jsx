import React from "react";

const Form = ({ url, setUrl, handleSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center mb-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;
