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
      <section className="h-screen w-full relative text-white overflow-hidden">
  {/* Background Image */}
  <img
    src="./src/assets/about.jpg"
    alt="background"
    className="absolute top-0 left-0 w-full h-full object-cover brightness-50 -z-10"
  />

  {/* Overlay Gradient */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/40 to-fuchsia-600/40 -z-10"></div>

  {/* Main Content */}
  <main className="h-full flex justify-center items-center">
    <div className="max-w-4xl w-full px-4 flex flex-col md:flex-row items-center gap-12">
      {/* Optional Contact Image */}
     <div className="max-lg:absolute relative max-lg:top-20 max-lg:-z-50 max-lg:opacity-80">
  <img
    className="h-[70vh] rounded-lg drop-shadow-2xl shadow-fuchsia-700 shadow-2xl"
    src="./src/assets/contact1.jpg"
    alt="contact"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 rounded-lg">
    <h2 className="text-3xl font-bold text-white drop-shadow-md text-center px-4">
      Let's Get in Touch
    </h2>
    <p className="text-lg mt-2 text-gray-200 text-center px-6">
      Whether it’s a project, collaboration, or just a friendly hello, feel free to reach out!
    </p>
  </div>
</div>

      {/* Contact Form */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-yellow-300 text-center mb-6">Contact Me</h1>
        <hr className="mb-6 border-yellow-400" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="User" className="block text-lg mb-1">Username:</label>
            <input
              id="User"
              name="username"
              value={data.username}
              onChange={set}
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-md text-black focus:outline-none"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-1">Email:</label>
            <input
              id="email"
              name="email"
              value={data.email}
              onChange={set}
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-md text-black focus:outline-none"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={set}
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-md text-black resize-none focus:outline-none"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 transition-all text-white text-lg font-semibold py-2 rounded-xl shadow-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </main>
</section>


    </>
}