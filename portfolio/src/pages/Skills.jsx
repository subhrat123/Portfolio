export const Skills = () => {
    return <>
        <div className=" font-serif h-auto bg-indigo-950 text-white flex flex-col justify-center items-center text-3xl">
            <div className="text-3xl m-4 text-lime-500">SKILLS</div>
            <div className="container mb-3 flex flex-wrap gap-5 justify-center text-lg  items-center">
                <div className="card drop-shadow-lg rounded-xl  html bg-slate-600 p-4">
                    <img className=" h-28 rounded" src="./src/assets/html.jpeg" alt="" />
                    
                </div>
                <div className="card drop-shadow-lg rounded-xl css bg-slate-600 p-4">
                    <img className=" h-32 rounded" src="./src/assets/CSS.png" alt="" />
                   
                </div>
                <div className="card drop-shadow-lg rounded-xl java bg-slate-600 p-4">
                    <img className=" h-32 rounded" src="./src/assets/java.jpeg" alt="" />
                    
                </div>
                <div className="card drop-shadow-lg rounded-xl nodejs bg-slate-600 p-4">
                    <img className=" h-32 rounded" src="./src/assets/nodejs.png" alt="" />
                   
                </div>
                <div className="card drop-shadow-lg rounded-xl react bg-slate-600 p-4">
                    <img className=" h-32 rounded" src="./src/assets/react.svg" alt="" />
                   
                </div>
                <div className="card drop-shadow-lg rounded-xl mongodb bg-slate-600 p-4">
                    <img className=" h-32 w-40 rounded" src="./src/assets/mongodb.png" alt="" />
                    
                </div>

            </div>
            <hr />
            <div className=" m-4 underline font-bold text-green-500">Projects</div>
            <div className=" m-4 flex gap-6  projects">
                <div className="spotify  gap-5 h-auto w-40 bg-slate-600 p-4 flex flex-col rounded-lg justify-center items-center">
                   
                    <img className=" drop-shadow-xl m-4" src="./src/assets/netflix.svg" alt="netflix" />
                    <p className=" text-white text-sm font-serif">Netflix Sign-Up page UI/Ux clone</p>
                </div>
                <div className="spotify  gap-5 h-auto w-40 bg-slate-600 p-4 flex flex-col rounded-lg justify-center items-center">
                    <img className=" drop-shadow-xl m-4" src="./src/assets/spotify.ico" alt="netflix" />
                    <p className=" text-white text-sm font-serif"> Spotify Clone using html, css, and javascript</p>
                </div>
                <div className="spotify  gap-5 h-auto w-40 bg-slate-600 p-4 flex flex-col rounded-lg justify-center items-center">
                    <img className=" drop-shadow-xl m-4" src="./src/assets/password.jpg" alt="netflix" />
                    <p className=" text-white text-sm font-serif"> Password Manager</p>
                    <p className=" text-white text-xs font-serif">Using react, js, nodejs, mongodb</p>
                </div>
                <div className="spotify  gap-5 h-auto w-40 bg-slate-600 p-4 flex flex-col rounded-lg justify-center items-center">
                    <img className=" drop-shadow-xl m-4" src="./src/assets/todo.jpeg" alt="netflix" />
                    <p className=" text-white text-sm font-serif">made using react, js</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    </>
}