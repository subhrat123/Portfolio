
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

        const response = await fetch(`https://portfolio-ecac.onrender.com/login`,
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
      <section className="h-screen w-full relative text-white overflow-hidden">
  {/* Background Image */}
  <img
    src="./src/assets/about.jpg"
    alt="background"
    className="fixed top-0 left-0 w-full h-full object-cover -z-10"
  />

  <main className="flex items-center justify-center h-full">
    <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl w-full mx-6">
      {/* Illustration */}
      <div className="w-72 lg:w-[400px]">
        <img
          src="./src/assets/registration.png"
          alt="Login illustration"
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-yellow-300 drop-shadow-lg">
         Admin Login
        </h1>
        <hr className="border-purple-400 mb-6" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xl font-medium text-white mb-1"
              >
                Email
              </label>
              <input
                className="w-full px-4 py-2 rounded-md bg-white text-gray-900 focus:outline-none shadow-md"
                type="email"
                name="email"
                id="email"
                value={data.email}
                onChange={set}
                autoComplete="off"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xl font-medium text-white mb-1"
              >
                Password
              </label>
              <input
                className="w-full px-4 py-2 rounded-md bg-white text-gray-900 focus:outline-none shadow-md"
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={set}
                autoComplete="off"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-xl font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-500 hover:scale-105 transition-transform shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </main>
</section>


    </>
}