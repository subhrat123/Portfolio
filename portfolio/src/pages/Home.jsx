
import { useAuth } from "../store/auth"

export const Home = () => {

    const {user}=useAuth();



    return <>
        <div className=" lg:h-[calc(100vh-88px)] w-full relative bg-gradient-to-r from-blue-400 to-fuchsia-400  text-white flex justify-center items-center ">
            
            <div className=" font-thin text-xl text-balance flex-col flex justify-center  gap-16  items-center">

                <div className="about relative top-[32px] max-lg:flex-col drop-shadow-lg flex gap-24">
                    <div className=" flex flex-col justify-center items-center gap-16">
                        <div className=" overflow-hidden flex items-center  outline outline-2 outline-cyan-400 shadow-xl drop-shadow-2xl bg-cyan-400 shadow-cyan-400 filter saturate-100 rounded-full h-[15em] w-[15em] mb-4 ">

                        <img className=" h-[15em] w-auto" src="./src/assets/profile.jpg" alt="img" />
                        </div>

                        <div className=" text-6xl font-bold drop-shadow-lg text-yellow-200 px-10">Web Developer</div>
                    </div>

                    <div className=" w-96 h-60 hover:shadow-2xl shadow-xl hover:shadow-purple-500 shadow-purple-300 bg-gradient-to-r from-blue-500 to-fuchsia-500 m-5 rounded-xl">
                        <div className=" font-extrabold font-serif text-4xl  bg-violet-500 text-red-400 p-4"> 
                            Hi, {user.username}
                        </div>
                        <div className="p-5">
                        Welcome to My Portfolio!
                         Hi, I'm Subhrat Verma, a passionate web developer with a knack for creating dynamic and user-friendly websites.

                        </div>

                    </div>
                </div>


                <div className=" mb-5 justify-center text-2xl flex gap-4">

                    <div className="contact outline outline-purple-500 shadow-purple-500 bg-gradient-to-r from-blue-500 to-violet-500 p-2 hover:shadow-violet-500 shadow-lg drop-shadow-lg rounded-3xl"><button className=" rounded-2xl "><a className="  no-underline" href="/Contact">Contact </a> </button></div>
                    <div className="Skills w-32 text-center outline outline-purple-500 shadow-purple-500 bg-gradient-to-r from-blue-500 to-violet-500 p-2 hover:shadow-violet-500 shadow-lg drop-shadow-lg rounded-3xl"><button className=" rounded-2xl "><a className="  no-underline" href="/Skills">Skills</a></button></div>

                </div>
            </div>

        </div>
    </>
}