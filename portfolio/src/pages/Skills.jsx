import { useEffect, useState } from "react";
import axios from "axios";


export const Skills = () => {
const backendURL=import.meta.env.VITE_BACKEND_URL;
    const [frontendSkills, setFrontendSkills] = useState([]);
    const [backendSkills, setBackendSkills] = useState([]);
    const [otherSkills, setOtherSkills] = useState([]);

    const fetchSkills = async () => {
        try {
            const res = await axios.get(`${backendURL}/admin/skills`);
            const skillsList = res.data.map(skill => ({
                _id: skill._id,
                skillname: skill.name,
                description: skill.description,
                image: skill.url,
                category: skill.category,
            }));
            setFrontendSkills(skillsList.filter(skill => skill.category === 'frontend'));
            setBackendSkills(skillsList.filter(skill => skill.category === 'backend'));
            setOtherSkills(skillsList.filter(skill => skill.category === 'others'));
        } catch (err) {
            console.error("Failed to fetch skills", err);
        }
    };

    useEffect(() => {
        fetchSkills();
    }, []);



    const SkillCard = ({ skill }) => {
        const [isFlipped, setIsFlipped] = useState(false);

        return (
            <div
                className="group relative w-36 h-40 [perspective:1000px]"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                    <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden]">
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
                    <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <p className="text-white text-center text-xs">{skill.description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="pt-[12vh] relative min-h-screen font-serif text-white flex flex-col justify-start items-center text-3xl pb-8 overflow-x-hidden">

                {/* Fancy animated background */}
                <img
                    src="./images/skill.jpg"
                    className=" shadow-2xl brightness-110 contrast-125 saturate-15 fixed top-0 left-0 w-full h-screen object-cover -z-10"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-purple-700/20 to-blue-600/30 backdrop-blur-[2px] -z-10" />

                {/* Skills Header */}
                <div className="text-4xl m-6 font-bold text-lime-300 tracking-widest drop-shadow-xl">
                    SKILLS
                </div>

                {/* Frontend Skills */}
                <div className="w-full max-w-4xl px-6 mb-12">
                    <h2 className="text-3xl text-cyan-300 font-bold mb-6 text-center">Frontend</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {frontendSkills.map((skill) => (
                            <SkillCard key={skill._id} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="w-full max-w-4xl px-6 mb-12">
                    <h2 className="text-3xl text-cyan-300 font-bold mb-6 text-center">Backend</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {backendSkills.map((skill) => (
                            <SkillCard key={skill._id} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Other Skills */}
                <div className="w-full max-w-4xl px-6 mb-12">
                    <h2 className="text-3xl text-cyan-300 font-bold mb-6 text-center">Others</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {otherSkills.map((skill) => (
                            <SkillCard key={skill._id} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

