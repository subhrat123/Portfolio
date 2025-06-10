import { useAuth } from "../store/auth";

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="lg:h-[calc(100vh-13vh)] w-full bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-600 text-white lg:flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-6 py-10 flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="rounded-full overflow-hidden outline outline-2 outline-cyan-300 shadow-xl drop-shadow-2xl bg-cyan-400 h-60 w-60 flex items-center justify-center">
            <img
              className="h-full object-cover"
              src="./src/assets/profile.jpg"
              alt="profile"
            />
          </div>
          <h1 className="text-yellow-300 text-5xl font-bold drop-shadow-lg">
            Web Developer
          </h1>
        </div>

        {/* Welcome Box */}
        <div className="w-full max-w-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 rounded-xl shadow-xl hover:shadow-purple-500 transition-all">
          <div className="text-3xl font-bold bg-violet-600 text-red-300 p-4 rounded-t-xl font-serif">
            Hi,
          </div>
          <div className="p-6 text-lg">
            Welcome to My Portfolio!
            <br />
            I'm <b>Subhrat Verma</b>, a passionate web developer with a knack
            for creating dynamic and user-friendly websites.
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="lg:absolute lg:bottom-32  flex gap-6 justify-center items-center max-lg:m-4">
        <a
          href="/Contact"
          className="bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-2 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Contact
        </a>
        <a
          href="/Skills"
          className="bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-2 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
        >
          Skills
        </a>
      </div>
    </div>
  );
};
