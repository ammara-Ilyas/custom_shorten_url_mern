import React from "react";

const Tabel = ({ urls }) => {
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
