import { useState } from "react"

export const Contact = () => {

    const [data, setdata] = useState({
        username: "",
        email: "",
        message: "",

    });

    

    const set = (e) => {
        console.log(e.target);
        let name = e.target.name;
        let value = e.target.value;

        setdata({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
      const response =  fetch(`localhost:3000/contact`,{
           method:"POST",
           headers:{
            'Content-Type':"application/json"
           },
           body: JSON.stringify(data),
        });

        console.log(response);
    }

    return <>
        <section className=" lg:h-[calc(100vh-65px)] w-full relative bg-gradient-to-r from-blue-400 to-fuchsia-400  text-white ">
            <main className=" h-screen bg-gradient-to-r from-blue-400 to-fuchsia-500 min-h-[calc(100vh-13.5vh)]">
                <div className="max-lg:flex-col py-5 w-auto flex justify-center items-center gap-10  ">
                    <div className="  img lg:grid justify-items-end">
                        <img className=" rounded-2xl max-lg:h-80 w-96 max-h-full drop-shadow-2xl" src="./src/assets/contact.jpg" alt="image" />
                    </div>
                    <div className=" lg: w-80 text-center register font-serif">
                        <h1 className=" text-4xl mb-6">Contact Us</h1>
                        <hr />
                        <form onSubmit={handleSubmit} className="  mt-3">
                            <div className="  flex-col h-full items-center justify-center">
                                <div className="  flex-col " >
                                    <div className="  m-3 flex-col list-none text-2xl "><label htmlFor="User">Username :</label></div>
                                        <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="text" id="User" name="username" value={data.username} placeholder="Username" />
                                    <div className="  m-3 list-none  text-2xl "> <label htmlFor="email">Email :</label></div>
                                        <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="email" name="email" value={data.email} id="email" placeholder="Enter Your Email" />

                                    <div className="  m-3 list-none text-2xl "> <label htmlFor="message">Message :</label></div>
                                    <textarea onChange={set}  className=" p-2 w-full rounded border-none  text-slate-950"  id="message" value={data.message} name="message" rows="4" cols="50" autoComplete="off" placeholder="message me">How can i help you?</textarea>

                                </div>
                            </div>

                            <br />
                            <button className=" bg-teal-600 px-3 py-1 text-2xl rounded-xl" type="submit">Send</button>
                        </form>
                    </div>


                </div>
            </main>
        </section>

    </>
}