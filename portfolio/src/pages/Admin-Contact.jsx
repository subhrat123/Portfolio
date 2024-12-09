import { useEffect, useState } from "react";
import { useAuth } from "../store/auth"


export const AdminContacts = () => {

    const [data, setData] = useState([]);

    const { AuthorizationToken } = useAuth();

    const getUsers = async () => {
        const res = await fetch("http://localhost:3000/admin/contact", {
            method: "GET",
            headers: {
                Authorization: AuthorizationToken,
            }
        })

        const response = await res.json();
        setData(response);

    }

    useEffect(() => {
        getUsers();

    }, [])

    return <>
        <div className=" lg:h-[calc(100vh-88px)] w-full text-center relative bg-gradient-to-r from-blue-400 to-purple-400  text-white ">
            <div className=" p-3 text-3xl font-bold "></div>
            <div className=" flex justify-center items-center rounded-lg text-black overflow-y-scroll">

                <table className=" bg-gray-200 bg-opacity-10  border-2 border-collapse text-lg rounded-lg w-[1400px] h-[700px] text-center overflow-hidden shadow-xl backdrop-blur-3xl">
                    <thead className=" bg-slate-200 bg-opacity-40 text-xl ">
                        <tr className=" h-12">
                            <th>Username</th>
                            <th>Email</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cur, i) => {
                            return (
                                <tr key={i} className=" h-12 bg-gray-200 bg-opacity-10 hover:bg-opacity-25">
                                    <td className=" ">{cur.username}</td>
                                    <td className=" ">{cur.email}</td>
                                    <td className=" ">{cur.message}</td>                 
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>




            </div>
        </div>
    </>
}