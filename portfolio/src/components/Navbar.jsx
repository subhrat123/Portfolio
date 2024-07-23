import { useAuth } from "../store/auth"

export const Navbar=()=>{

    const {isLogedin}=useAuth();

    return <>
    
    <div className=" max-lg:h-auto nav flex flex-wrap px-6 pt-6 rounded align item-center justify-around bg-gradient-to-r from-blue-400 to-fuchsia-500">
        <div className="logo  flex mb-6 justify-center items-center text-3xl">
          <div className=" drop-shadow-lg">௹</div>
          <div className=" drop-shadow-lg  font-bold text-3xl">₰⨈</div>
         
        </div>
        <div className="panel flex-col ">
            <ul className=" max-lg:flex-col flex lg:gap-10">
                <div className=" flex text-lg gap-10 mb-5">

                <li><a className=" text-blue-800 no-underline" href="/">Home</a></li>
                <li><a className=" text-blue-800 no-underline" href="/About">About</a></li>
                <li><a className=" text-blue-800 no-underline" href="/Skills">Skills</a></li>
                <li><a className=" text-blue-800 no-underline" href="/Contact">Contacts</a></li>
                </div>
            {!isLogedin ?
                    <>
                      <div className="flex gap-4 justify-end">
                   <button className=" bg-pink-600 rounded-3xl px-3"><a className=" text-white no-underline " href="/Login">Login</a></button>
                <button  className=" bg-pink-600 rounded-lg  px-2"><a className=" text-white no-underline " href="/Signin">Sign In</a></button>   
            </div>  
                    </>
               :
                <div> 
                    <button><a href="/Logout">Logout</a></button>
                </div>
                }
           
            </ul>
          
        </div>
    </div>
    </>
}