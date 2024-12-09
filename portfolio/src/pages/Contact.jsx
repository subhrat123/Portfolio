import { useState } from "react"
import { useAuth } from "../store/auth";
export const Contact = () => {

    const [data, setdata] = useState({
        username: "",
        email: "",
        message: "",

    });
 const [userData, setuserData] = useState(true);
const {user}=useAuth();


if(userData && user){
    setdata({
        username: user.username,
        email: user.email,
        message: "",
    })

    setuserData(false);
}

    const set = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;

        setdata({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit =async (e)=>{ 
        e.preventDefault();
      const response =  fetch(`http://localhost:3000/contact`,{
           method:"POST",
           headers:{
            'Content-Type':"application/json"
           },
           body: JSON.stringify(data),
        });

         
            setdata({
                username:"",
                email:"",
                message:""
            })
        
    }

    return <>
        <section className=" h-[85.7vh] w-full relative bg-gradient-to-r from-blue-400 to-fuchsia-400  text-white">
            <main className=" h-full bg-gradient-to-r from-blue-400 to-fuchsia-500 flex justify-center items-center ">
                <div className=" -z-0 max-lg:flex-col py-5 w-auto flex justify-center items-center gap-10  ">
                    {/* <div className="  img lg:grid justify-items-end">
                        <img className=" rounded-2xl max-lg:h-80 w-96 max-h-full drop-shadow-2xl" src="./src/assets/contact.jpg" alt="image" />
                    </div> */}
                        <img className=" h-[70vh] rounded-lg drop-shadow-2xl shadow-violet-700 shadow-2xl absolute -z-10" src="./src/assets/contact1.jpg" alt="" />
                    <div className=" -z-0 relative lg: w-80 text-center  register font-serif">
                        <h1 className=" text-4xl mb-6">Contact me</h1>
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