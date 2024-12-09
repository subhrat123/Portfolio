import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";

export const Signin = () => {

    const [data, setdata] = useState({
        username: "",
        email: "",
        password: "",

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

    
const Navigate=useNavigate();
const {storeTokenLS}=useAuth();
 ``
    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        const response = await fetch(`http://localhost:3000/register`,
            {
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(data),
            }
        );
       if(response.ok){
        const res=await response.json();
        storeTokenLS(res.token);
            setdata({
            username: "",
            email: "",
            password: "",
    
        })

        Navigate("/")
       }
    }

    return <>
        <section className=" h-screen  text-white ">
        <img src="./src/assets/about.jpg" alt="img" className=" max-lg:h-screen fixed lg:h-[calc(100vh-5vh)] w-full -z-10 top-0 left-0 " />
            <main className="">
                <div className="max-lg:flex-col relative md:top-32 py-5 w-auto flex justify-center items-center gap-10  ">
                    <div className="  img lg:grid justify-items-end">
                        <img className=" rounded-2xl max-lg:h-80 h-full w-96 drop-shadow-2xl" src=".\src\assets\open_account.png" alt="image" />
                    </div>
                    <div className=" lg: w-80 text-center register font-serif">
                        <h1 className=" text-4xl mb-6">SIGN IN</h1>
                        <hr />
                        <form onSubmit={handleSubmit} className=" mt-3">
                            <div className="  flex-col h-full items-center justify-center">
                                <div className="  flex-col " >
                                    <div className="  m-3 flex-col list-none text-2xl "><label htmlFor="User">Username :</label></div>
                                        <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="text" id="User" name="username" value={data.username} placeholder="Username" />
                                    <div className="  m-3 list-none  text-2xl "> <label htmlFor="email">Email :</label></div>
                                        <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="email" name="email" value={data.email} id="email" placeholder="Enter Your Email" />

                                    <div className="  m-3 list-none text-2xl "> <label htmlFor="Password">Password :</label></div>
                                        <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="password" name="password" value={data.password} id="password" placeholder="Password" />

                                </div>
                            </div>

                            <br />
                            <button className=" bg-teal-600 px-3 py-1 text-2xl rounded-xl" type="submit">Register</button>
                        </form>
                    </div>


                </div>
            </main>
        </section>

    </>
}