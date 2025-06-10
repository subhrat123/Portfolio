import { useEffect, useState } from "react";
import axios from "axios";


export const Skills = () => {

    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const res = await axios.get("http://localhost:3000/admin/skills");
            const skillsList = res.data.map(skill => ({
                _id: skill._id,
                skillname: skill.name,
                description: skill.description,
                image: skill.url,
            }));
            setSkills(skillsList);
        } catch (err) {
            console.error("Failed to fetch skills", err);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);



    return (
        <>
          <div className="pt-[12vh] relative min-h-screen font-serif text-white flex flex-col justify-start items-center text-3xl pb-8 overflow-x-hidden">

                {/* Fancy animated background */}
                <img
                    src="./src/assets/skill.jpg"
                    className=" shadow-2xl brightness-110 contrast-125 saturate-15 fixed top-0 left-0 w-full h-screen object-cover -z-10"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-purple-700/20 to-blue-600/30 backdrop-blur-[2px] -z-10" />

                {/* Skills Header */}
                <div className="text-4xl m-6 font-bold text-lime-300 tracking-widest drop-shadow-xl">
                    SKILLS
                </div>

                {/* Skills Grid */}
                <div className="mb-16 flex flex-wrap justify-center gap-8 px-6">
                    {skills.map((skill) => (
                        <div
                            key={skill._id}
                            className="group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 w-36 h-40 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            title={skill.description}
                        >
                            <div className="w-20 h-20 flex items-center justify-center rounded-full overflow-hidden bg-white/20">
                                <img
                                    src={skill.image}
                                    alt={skill.skillname}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <p className="mt-4 text-white text-center font-semibold text-sm group-hover:text-yellow-300 transition-all duration-300">
                                {skill.skillname}
                            </p>
                        </div>
                    ))}
                </div>

                <hr className="border-pink-400 w-2/3 my-6 shadow-md" />

                <div className="text-3xl text-lime-400 font-bold">SKILLS</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                    {/* Front-End Development */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg text-left">
                        <div className="text-xl font-semibold text-cyan-300 mb-2">Front-End Development</div>
                        <ul className="list-disc ml-6 text-base space-y-2">
                            <li><strong>HTML5 & CSS3:</strong> Semantic markup, responsive layouts using Flexbox and Grid, accessibility standards.</li>
                            <li><strong>JavaScript (ES6+):</strong> Modern syntax, DOM manipulation, async/await, fetch API, and modular programming.</li>
                            <li><strong>Tailwind CSS:</strong> Rapid UI development with utility-first classes, custom themes, and responsive design.</li>
                            <li><strong>React.js:</strong> Functional components, React Router, Hooks (useState, useEffect, useContext), and state management.</li>
                            <li><strong>Version Control:</strong> Git & GitHub for source code management and collaboration.</li>
                        </ul>
                    </div>

                    {/* Back-End Development */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg text-left">
                        <div className="text-xl font-semibold text-cyan-300 mb-2">Back-End Development</div>
                        <ul className="list-disc ml-6 text-base space-y-2">
                            <li><strong>Node.js:</strong> Building scalable RESTful APIs, file system handling, and event-driven programming.</li>
                            <li><strong>Express.js:</strong> Routing, middleware usage, request/response handling, and error management.</li>
                            <li><strong>MongoDB:</strong> Document-based NoSQL database, schema design, indexing, and aggregation framework.</li>
                            <li><strong>Mongoose:</strong> ODM for MongoDB, schema validation, population, and model relationships.</li>
                            <li><strong>Authentication:</strong> JWT-based login systems with bcrypt hashing for security.</li>
                        </ul>
                    </div>

                    {/* Tools & Other Skills */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-lg text-left">
                        <div className="text-xl font-semibold text-cyan-300 mb-2">Other Tools & Skills</div>
                        <ul className="list-disc ml-6 text-base space-y-2">
                            <li><strong>Postman:</strong> API testing and debugging tool for backend development.</li>
                            <li><strong>VS Code:</strong> Main development environment with useful extensions and productivity workflows.</li>
                            <li><strong>Python (Basic):</strong> Scripting, control structures, data structures, and basic ADK usage.</li>
                            <li><strong>Deployment:</strong> Experience using Render, Vercel, and Netlify for hosting full-stack apps.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

