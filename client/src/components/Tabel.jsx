import React, { useEffect, useState } from "react";

const Tabel = ({ url }) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const data = await response.json();
        console.log(data);

        // Assuming your data is an array of URLs
        setUrls(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl text-center">
      {urls.length > 0 && (
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-200">S. No</th>
              <th className="border border-gray-300 p-2 bg-gray-200">
                ShortID
              </th>
              <th className="border border-gray-300 p-2 bg-gray-200">
                Redirect
              </th>
              <th className="border border-gray-300 p-2 bg-gray-200">Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr
                key={url.shortId}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2">{url.shortId}</td>
                <td className="border border-gray-300 p-2">
                  <a href={`http://localhost:5000/api/${url.shortId}`}></a>
                  {url.redirectURL}
                </td>
                <td className="border border-gray-300 p-2">
                  {url.visitHistory.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tabel;
