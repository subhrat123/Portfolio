export const Home = () => {
    return <>
        <div className=" lg:h-[calc(100vh-88px)] w-full relative bg-gradient-to-r from-blue-400 to-fuchsia-400  text-white ">
            <div className=" font-thin text-xl text-balance flex-col flex justify-center  gap-32 px-10 items-center">


                <div className="about  max-lg:flex-col drop-shadow-lg flex gap-24">
                    <div className=" flex flex-col justify-center items-center">
                        <img className="  drop-shadow-lg rounded-full h-auto w-72 mb-4 " src="./src/assets/subh.png" alt="img" />
                        <div className=" text-6xl font-bold drop-shadow-lg text-lime-200">Web Developer</div>
                    </div>

                    <div className=" w-96 h-60 bg-gradient-to-r from-blue-500 to-fuchsia-500 m-5 rounded-xl">
                        <div className=" font-extrabold font-serif text-4xl  bg-violet-500 text-red-400 p-4"> 
                            Hi, Welcome
                        </div>
                        <div className="p-5">
                        Welcome to My Portfolio!
                         Hi, I'm Subhrat Verma, a passionate web developer with a knack for creating dynamic and user-friendly websites.

                        </div>

                    </div>
                </div>


                <div className=" mb-5 justify-center text-2xl flex gap-4">

                    <div className="contact bg-gradient-to-r drop-shadow-lg from-blue-500 to-violet-500 p-2 rounded-3xl"><button className=" rounded-2xl "><a className="  no-underline" href="/Contact">Contact </a> </button></div>
                    <div className="Skills bg-gradient-to-r drop-shadow-lg from-blue-500 to-violet-500 p-2 rounded-2xl"><button className=" rounded-2xl "><a className="  no-underline" href="/Skills">Skills</a></button></div>

                </div>
            </div>

        </div>
    </>
}