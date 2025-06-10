import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth"


export const AdminUsers = () => {

    const [data, setData] = useState([]);

    const { AuthorizationToken } = useAuth();

    const getUsers = async () => {
        const res = await fetch("http://localhost:3000/admin/user", {
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

    
    const edit=()=>{
        
    }

    const remove=async (id)=>{
        const res = await fetch(`http://localhost:3000/admin/user/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: AuthorizationToken,
            }
        })
        const response = await res.json();
        console.log(response);
        if(res.ok){
            getUsers();
        }
    }

    return <>
        <div className=" lg:h-[calc(100vh-88px)] w-full text-center relative bg-gradient-to-r from-blue-400 to-purple-400  text-white ">
            <div className=" p-3 text-3xl font-bold "> Users data</div>
            <div className=" flex justify-center items-center rounded-lg text-black overflow-y-scroll">
                <table className=" bg-gray-200 bg-opacity-10  border-2 border-collapse text-lg rounded-lg w-[1400px] h-[700px] text-center overflow-hidden shadow-xl backdrop-blur-3xl">
                    <thead className=" bg-slate-200 bg-opacity-40 text-xl ">
                        <tr className=" h-12">
                            <th>Username</th>
                            <th>Email</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="tb">
                        {data.map((cur, i) => {
                            return (
                                <tr key={i} className=" trow bg-gray-200 bg-opacity-10 hover:bg-opacity-25">
                                    <td>{cur.username}</td>
                                    <td>{cur.email}</td>
                                    <td><button onClick={edit} className=" shadow-lg px-2  hover:shadow-cyan-200 hover:p-2 bg-green-300 bg-opacity-60 rounded-md">Edit</button></td>
                                    <td><button onClick={()=>remove(cur._id)} className=" shadow-md px-2 hover:shadow-cyan-200 hover:p-2 bg-cyan-300 bg-opacity-70 rounded-md">remove</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}