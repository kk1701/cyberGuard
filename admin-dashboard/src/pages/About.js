import React from "react";
import { FaShieldAlt, FaSearch, FaCodeBranch} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-[#1e293b] rounded-2xl p-10 shadow-2xl border border-[#2d3c54]">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          About CyberGuard
        </h1>
        <p className="text-center text-lg text-gray-300 mb-10">
          CyberGuard is a phishing and threat detection system developed using
          modern web technologies and machine learning techniques. It provides
          a clean interface and real-time scanning for suspicious content.
        </p>

        {/* Feature Highlights */}
        <div className="grid gap-6 bg-[#f1f5f9] text-black rounded-xl p-6 shadow-md sm:grid-cols-1 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group hover:shadow-blue-500/40 hover:-translate-y-1 transition duration-300 rounded-xl p-4 bg-white">
            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-blue-600 text-2xl group-hover:animate-bounce" />
              <p className="text-sm">
                Real-time URL and QR code analysis using a secure FastAPI backend.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group hover:shadow-blue-500/40 hover:-translate-y-1 transition duration-300 rounded-xl p-4 bg-white">
            <div className="flex items-center gap-4">
              <FaSearch className="text-blue-600 text-2xl group-hover:animate-bounce" />
              <p className="text-sm">
                Suspicious patterns and links are extracted and classified for phishing detection.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group hover:shadow-blue-500/40 hover:-translate-y-1 transition duration-300 rounded-xl p-4 bg-white">
            <div className="flex items-center gap-4">
              <FaCodeBranch className="text-blue-600 text-2xl group-hover:animate-bounce" />
              <p className="text-sm">
                Integrated frontend/backend workflow with secure session handling and MongoDB.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <h2 className="text-2xl text-center mt-12 mb-4 font-semibold text-yellow-300">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-white text-black px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition">
            React.js
          </span>
          <span className="bg-green-100 text-green-900 px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition">
            FastAPI
          </span>
          <span className="bg-yellow-100 text-yellow-900 px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition">
            Scikit-learn
          </span>
          <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition">
            MongoDB Atlas
          </span>
          <span className="bg-red-100 text-red-900 px-4 py-1 rounded-full font-medium shadow hover:scale-105 transition">
            QR/URL Analysis
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
