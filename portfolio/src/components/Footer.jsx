

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white py-3 px-6 flex flex-col lg:flex-row items-center justify-between shadow-inner">
      <div className="text-sm font-light">© {new Date().getFullYear()} Subhrat Verma</div>
      
      <div className="flex space-x-6 mt-2 lg:mt-0">
        <a
          href="https://in.linkedin.com/in/subhrat-verma-006112287?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src="./src/assets/linkedin.png" alt="LinkedIn" className="h-6" />
        </a>
        <a
          href="https://www.instagram.com/subhrat123/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <img src="./src/assets/insta.png" alt="Instagram" className="h-6" />
        </a>
      </div>
    </footer>
  );
};
