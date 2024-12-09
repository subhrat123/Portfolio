export const Skills = () => {
    return <>
        <div className=" lg:h-[calc(100vh-88px)] font-serif text-white flex flex-col justify-center items-center text-3xl">
            <img src="./src/assets/skill.jpg" className="fixed  top-0 left-0 w-full h-screen -z-10" alt="" />
            <div className="text-3xl m-4 text-lime-500">SKILLS</div>
            <div className=" mb-3 flex flex-wrap gap-5 justify-center text-lg  items-center ">
                <div className="card drop-shadow-lg rounded-xl  html bg-pink-600 backdrop-blur-3xl shadow-xl  max-lg:w-[8rem] max-lg:h-[8rem] shadow-pink-600 p-4">
                    <img className=" h-[10vh] rounded" src="./src/assets/html.jpeg" alt="" />

                </div>
                <div className="card drop-shadow-lg rounded-xl css bg-pink-600 backdrop-blur-3xl shadow-xl max-lg:w-[8rem] max-lg:h-[8rem] shadow-pink-600 p-4">
                    <img className=" h-[10vh] rounded" src="./src/assets/CSS.png" alt="" />

                </div>
                <div className="card drop-shadow-lg rounded-xl java bg-pink-600 backdrop-blur-3xl shadow-xl max-lg:w-[8rem] max-lg:h-[8rem] shadow-pink-600 p-4">
                    <img className=" h-[10vh] rounded" src="./src/assets/java.jpeg" alt="" />

                </div>
                <div className="card drop-shadow-lg rounded-xl nodejs bg-pink-600 backdrop-blur-3xl shadow-xl max-lg:w-[8rem] max-lg:h-[8rem] shadow-pink-600 p-4">
                    <img className=" h-[10vh] rounded" src="./src/assets/nodejs.png" alt="" />

                </div>
                <div className="card drop-shadow-lg rounded-xl react bg-pink-600 backdrop-blur-3xl shadow-xl max-lg:w-[8rem] max-lg:h-[8rem] shadow-pink-600 p-4">
                    <img className=" h-[10vh] rounded" src="./src/assets/react.svg" alt="" />

                </div>
                <div className="card drop-shadow-lg rounded-xl mongodb bg-pink-600 backdrop-blur-3xl shadow-xl max-lg:w-[8rem] max-lg:h-[8rem] shadow-pink-600 p-4">
                    <img className=" h-[10vh] w-40 rounded" src="./src/assets/mongodb.png" alt="" />

                </div>
            </div>

            <hr className="border-pink-500 w-2/3 my-6" />

            <div className=" m-4  font-bold text-green-500">Practice Projects</div>
            <div className=" flex-wrap overflow-auto m-4 flex justify-center item-center gap-6 max-md:w-[25rem] projects">
                <div className="spotify  max-lg:mb-2 gap-5 h-auto w-40 bg-sky-400 shadow-xl shadow-cyan-300 drop-shadow-lg backdrop-blur-3xl p-4 flex flex-col rounded-lg justify-center items-center">

                    <img className=" drop-shadow-xl m-4" src="./src/assets/netflix.svg" alt="netflix" />
                    <p className=" text-white text-sm font-serif">Netflix Sign-Up page UI clone</p>
                </div>
                <div className="spotify  max-lg:mb-2 gap-5 h-auto w-40 bg-sky-400 shadow-xl shadow-cyan-300  drop-shadow-lg backdrop-blur-3xl p-4 flex flex-col rounded-lg justify-center items-center">
                    <img className=" drop-shadow-xl m-4" src="./src/assets/spotify.ico" alt="netflix" />
                    <p className=" text-white text-sm font-serif"> Spotify Clone using html, css, and javascript</p>
                </div>
                <div className="spotify  max-lg:mb-2 gap-5 h-auto w-40 bg-sky-400 shadow-xl shadow-cyan-300  drop-shadow-lg backdrop-blur-3xl p-4 flex flex-col rounded-lg justify-center items-center">
                    <img className=" drop-shadow-xl m-4" src="./src/assets/password.jpg" alt="netflix" />
                    <p className=" text-white text-sm font-serif"> Password Manager</p>
                    <p className=" text-white text-xs font-serif">Using react, js, nodejs, mongodb</p>
                </div>
                <div className="spotify max-lg:mb-2  gap-5 h-auto w-40 bg-sky-400 shadow-xl shadow-cyan-300  drop-shadow-lg backdrop-blur-3xl p-4 flex flex-col rounded-lg justify-center items-center">
                    <img className=" drop-shadow-xl m-4" src="./src/assets/todo.jpeg" alt="netflix" />
                    <p className=" text-white text-sm font-serif">made using react, js</p>
                </div>
                
                
            </div>
        </div>
    </>
}