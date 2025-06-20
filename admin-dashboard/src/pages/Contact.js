import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Karan Kute",
    github: "https://github.com/kk1701",
    linkedin: "https://www.linkedin.com/in/karan-kute-26037b198/",
    email: "karankute05@gmail.com",
  },
  {
    name: "Shashank Gurjar",
    github: "https://github.com/shashigurjar",
    linkedin: "https://www.linkedin.com/in/shashank-gurjar-8370a3228/",
    email: "sg243gurjar@gmail.com",
  },
  {
    name: "Aniket Wani",
    github: "https://github.com/Lightinw",
    linkedin: "https://www.linkedin.com/in/aniket-wani-b5b1a3199/",
    email: "aniketwani2004@gmail.com",
  },
  {
    name: "Kalpit Nagar",
    github: "https://github.com/kalpitgnagar",
    linkedin: "https://www.linkedin.com/in/kalpitgnagar/",
    email: "kalpitgnagar@gmail.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-6xl w-full text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4 tracking-wide">Contact Our Team</h1>
        <p className="text-gray-300 text-lg">
          CyberGuard was built with collaboration and passion. Reach out or connect with any of us below!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-[#2d3c54] transition duration-300 transform hover:-translate-y-2 hover:shadow-blue-500/50 group"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-300 group-hover:text-yellow-400 transition duration-300">
              {member.name}
            </h3>
            <div className="flex gap-5 mt-4 text-2xl justify-center">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaEnvelope />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Feedback / GitHub Section */}
      <div className="mt-16 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Want to Contribute or Send Feedback?</h2>
        <p className="text-gray-400 mb-6">
          We'd love to hear from you! Contribute on GitHub or send us suggestions via email.
        </p>
        <a
          href="https://github.com/kk1701/cyberGuard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full shadow-lg transition"
        >
          View GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Contact;
