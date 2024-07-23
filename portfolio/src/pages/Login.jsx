
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export const Login = () => {

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

    const Navigate = useNavigate();
    const {storeTokenLS} = useAuth();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/login`,
            {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(data),
            } 
        );

        if (response.ok) {
            const res = await response.json();
            console.log(res);
            setdata({
                username: "",
                email: "",
                password: "",

            })

            storeTokenLS(res.token)

            Navigate("/");
        }

    }


    return <>
        <section className=" h-screen bg-gradient-to-r from-blue-400 to-fuchsia-500  text-white ">
            <main className=" h-screen bg-gradient-to-r from-blue-400 to-fuchsia-500 min-h-[calc(100vh-13.5vh)]">
                <div className="max-lg:flex-col py-5 w-auto flex justify-center items-center gap-10  ">
                    <div className="  img lg:grid justify-items-end">
                        <img className=" rounded-2xl max-lg:w-80 drop-shadow-2xl" src=".\src\assets\registration.png" alt="image" />
                    </div>
                    <div className=" lg: w-80 text-center register font-serif">
                        <h1 className=" text-4xl mb-6">Login</h1>
                        <hr />
                        <form onSubmit={handleSubmit} className="  mt-3">
                            <div className="  flex-col h-full items-center justify-center">
                                <div className="  flex-col " >
                                    <div className="  m-3 list-none  text-2xl "> <label htmlFor="email">Email :</label></div>
                                    <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="email" name="email" value={data.email} id="email" placeholder="Enter Your Email" />

                                    <div className="  m-3 list-none text-2xl "> <label htmlFor="Password">Password :</label></div>
                                    <input className=" p-2 w-full rounded border-none  text-slate-950" onChange={set} autoComplete="off" type="password" name="password" value={data.password} id="password" placeholder="Password" />

                                </div>
                            </div>

                            <br />
                            <button className=" bg-teal-600 px-3 py-1 text-2xl rounded-xl" type="submit">Login</button>
                        </form>
                    </div>


                </div>
            </main>
        </section>

    </>
}