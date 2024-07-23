export const About = () => {
    return <>

        <div className=" w-full relative lg:h-[calc(100vh-88px)] bg-gradient-to-r from-blue-400 to-fuchsia-400  text-white ">
            <div className=" relative h-screen lg:h-[calc(100vh-88px)] font-thin text-xl text-balance max-lg:flex-col flex justify-center  gap-20 p-10 items-center">

                <img className="absolute  max-lg:h-[500px] top-20 opacity-30 drop-shadow-lg rounded-lg " src="./src/assets/working.jpg" alt="img" />
                <div className=" absolute top-36 max-w-96">
                    <div className=" text-5xl text-yellow-400 font-extrabold drop-shadow-2xl mb-6"> MYself Subhrat Verma </div>
                    <p className="max-w-96 text-justify">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, saepe a? Hic sunt laudantium, placeat repellendus recusandae dolorum! Vel, quibusdam! Deserunt doloremque at voluptatum id suscipit dolore odit maxime unde.
                    </p>
                </div>

            </div>

        </div>

    </>
}
