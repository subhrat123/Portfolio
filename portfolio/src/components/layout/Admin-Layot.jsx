import { NavLink, Outlet } from "react-router-dom"
import { FaUsers } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
export const AdminLayot = () => {
  return (<>
    <header>

      <div className="container">
        <nav>
          <ul className="flex gap-6 font-medium text-xl justify-center items-center">
            <li ><NavLink to="/admin/users" className="flex gap-1 justify-center items-center"><FaUsers className="text-2xl" />Users</NavLink></li>
            <li ><NavLink to="/admin/contacts" className="flex gap-1 justify-center items-center"><MdContactPage className="text-2xl"/>Contacts</NavLink></li>

          </ul>
        </nav>
      </div>
    </header>
    <Outlet />
  </>)
}