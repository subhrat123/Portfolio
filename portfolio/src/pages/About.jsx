import { useEffect, useState } from "react";
import axios from "axios";

export const About = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://portfolio-ecac.onrender.com/admin/projects", {
        withCredentials: true,
      });
      const data = res.data.map((proj) => ({
        _id: proj._id,
        name: proj.name,
        description: proj.description,
        url: proj.url,
        liveLink: proj.liveLink,
      }));
      setProjects(data);
    } catch (err) {
      console.error("Failed to fetch projects", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center text-white relative">
      <img
        src="./src/assets/about.jpg"
        alt="img"
        className="h-screen fixed  w-full object-cover brightness-50 -z-10 top-0 left-0"
      />
      <div className="min-h-screen max-lg:min-h-screen overflow-y-auto max-lg:w-[24rem] px-6 py-10 flex flex-col items-center gap-10">
        <div className="text-5xl text-yellow-400 font-extrabold drop-shadow-2xl mb-6">About Me</div>

        <p className="text-justify max-w-3xl text-lg font-light">
          I am a web developer with a solid foundation in both front-end and back-end technologies. Over the first year of my college, I have worked on various projects that have helped me hone my skills in creating dynamic and responsive web applications.
        </p>
        <div className="text-3xl font-bold text-green-400 mb-4 drop-shadow-lg">
          My Projects
        </div>

        {/* Dynamic Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {projects.length === 0 && <p>No projects available</p>}
          {projects.map((proj, idx) => (
            <div
              key={proj._id || idx}
              className="bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg shadow-lg p-4 w-56 rounded-xl flex flex-col items-center gap-2"
            >
              <img className="h-20 drop-shadow-lg" src={proj.url} alt={proj.name} />
              <p className="text-white text-center text-sm font-semibold">{proj.name}</p>
              {proj.description && <p className="text-white text-xs text-center">{proj.description}</p>}
              {proj.liveLink && (
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline text-xs"
                >
                  View Live
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Practice Projects Header */}
        <div className="text-3xl font-bold text-green-400 mb-4 drop-shadow-lg">
          Practice Projects
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {[
            {
              src: "./src/assets/netflix.svg",
              title: "Netflix Sign-Up UI Clone",
              subtitle: ""
            },
            {
              src: "./src/assets/spotify.ico",
              title: "Spotify Clone",
              subtitle: "HTML, CSS, JS"
            },
            {
              src: "./src/assets/todo.jpeg",
              title: "To-do App",
              subtitle: "React, JS"
            }
          ].map((proj, idx) => (
            <div
              key={idx}
              className="bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-lg shadow-lg p-4 w-56 rounded-xl flex flex-col items-center gap-2"
            >
              <img className="h-20 drop-shadow-lg" src={proj.src} alt={proj.title} />
              <p className="text-white text-center text-sm font-semibold">{proj.title}</p>
              {proj.subtitle && <p className="text-white text-xs text-center">{proj.subtitle}</p>}
            </div>
          ))}
        </div>



      </div>
    </div>
  );
};
