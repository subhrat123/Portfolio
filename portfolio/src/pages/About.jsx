export const About = () => {
    return (
        <>
            <div className=" w-full bg-gradient-to-r from-blue-400 to-fuchsia-400 flex justify-center items-center text-white">
                <div className=" lg:h-screen max-lg:h-[79rem] overflow-auto max-lg:w-[24rem] font-thin text-xl text-balance max-lg:flex-col flex justify-center gap-20 items-center">
                    <img className="max-lg:h-[500px] absolute opacity-40 drop-shadow-lg rounded-lg" src="./src/assets/working.jpg" alt="img" />
                    <div className="overflow-y-auto absolute m-10">
                        <div className="text-5xl text-yellow-400 font-extrabold drop-shadow-2xl mb-6">About me</div>
                        <p className="max-w-[60rem] text-justify">
                            I am a web developer with a solid foundation in both front-end and back-end technologies. Over the first year of my college, I have worked on various projects that have helped me hone my skills in creating dynamic and responsive web applications. Here’s a look at my core competencies:
                        </p>
                        <div className="pt-4 text-xl font-bold">Skills</div>
                        <p>
                            <div className="font-semibold">Front-End Development</div>
                            <ul>
                                <li><strong>HTML & CSS:</strong> Proficient in building structured, semantic, and accessible web pages. Experienced with Flexbox, Grid, and responsive design principles.</li>
                                <li><strong>Tailwind CSS:</strong> Comfortable using Tailwind CSS for utility-first styling to create modern and responsive UI designs efficiently.</li>
                                <li><strong>JavaScript:</strong> Strong understanding of ES6+ features, asynchronous programming, and DOM manipulation.</li>
                                <li><strong>React:</strong> Experienced in building single-page applications using React. Familiar with hooks, state management (using Context API and Redux), and component-based architecture.</li>
                            </ul>
                        </p>
                        <p>
                            <div className="font-semibold">Back-End Development</div>
                            <ul>
                                <li><strong>Node.js:</strong> Competent in building server-side applications using Node.js and Express. Experience with RESTful API design and middleware.</li>
                                <li><strong>MongoDB:</strong> Skilled in using MongoDB for NoSQL database solutions. Understands data modeling, indexing, and aggregation.</li>
                                <li><strong>Mongoose:</strong> Familiar with Mongoose for object data modeling (ODM) in MongoDB, including schema design and validation.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
