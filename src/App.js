import React, { useState } from "react";

const App = () => {
  const [emails, setEmails] = useState("");
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState([]);

  const handleEmailChange = (e) => {
    setEmails(e.target.value);
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailArray = emails.split("\n");
    const updatedEmails = emailArray.map((email) => {
      const [localPart] = email.split("@");
      return localPart && domain ? `${localPart}@${domain}` : email;
    });
    setResults(updatedEmails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white font-sans">
      <div className="w-full max-w-3xl p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 text-center mb-10">
          Domain Reconfigurator
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="emails"
              className="block text-lg text-teal-300 mb-2"
            >
              Emails List:
            </label>
            <textarea
              id="emails"
              value={emails}
              onChange={handleEmailChange}
              rows="6"
              className="w-full p-4 bg-gray-800 text-gray-300 rounded-xl shadow-inner border border-gray-700 focus:outline-none focus:ring-4 focus:ring-teal-500 transition"
              placeholder="Enter emails, one per line"
            />
          </div>
          <div>
            <label
              htmlFor="domain"
              className="block text-lg text-teal-300 mb-2"
            >
              New Domain:
            </label>
            <input
              id="domain"
              type="text"
              value={domain}
              onChange={handleDomainChange}
              className="w-full p-4 bg-gray-800 text-gray-300 rounded-xl shadow-inner border border-gray-700 focus:outline-none focus:ring-4 focus:ring-teal-500 transition"
              placeholder="Enter the new domain (e.g., example.com)"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-lg font-bold rounded-xl shadow-lg hover:opacity-90 transition duration-300"
          >
            Update Emails
          </button>
        </form>
        <h2 className="text-2xl font-semibold text-teal-300 mt-10">
          Updated Emails:
        </h2>
        <div className="mt-4 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg max-h-96 overflow-auto text-gray-300">
          <pre className="whitespace-pre-wrap">{results.join("\n")}</pre>
        </div>
      </div>
    </div>
  );
};

export default App;
