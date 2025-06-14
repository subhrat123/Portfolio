import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from "./pages/About";
import { Contact } from './pages/Contact';
import { Skills } from './pages/Skills';
import { Login } from './pages/Login';
import { Signin } from './pages/Signin';
import { Error } from './pages/Error'
import { Logout } from "./pages/Logout";
import { AdminUsers } from "./pages/Admin-Pages/Admin-users";
import { AdminContacts } from "./pages/Admin-Pages/Admin-Contact";
import { AdminLayot } from "./components/layout/Admin-Layot";
import { AdminSkills } from "./pages/Admin-Pages/Admin-Skills";
import { AdminProjects } from "./pages/Admin-Pages/Admin-Projects";



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route path="/*" element={<Error />}></Route>

          <Route path="/admin" element={<AdminLayot />}>
            {/* <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} /> */}
            <Route path="skills" element={<AdminSkills />} />
            <Route path="projects" element={<AdminProjects />} />
            

          </Route>


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
