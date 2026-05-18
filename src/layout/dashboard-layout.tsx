import { Link, NavLink, Outlet } from "react-router-dom";
import { dashboardMenuLists } from "../types/data";

export default function DashboardLayout() {
  return (
    <div className="flex items-start justify-center gap-5 h-screen p-16">
      <div className="w-64 border rounded-lg space-y-6 p-5 h-full  bg-amber-300">
        {dashboardMenuLists.map((item, index) => (
          <NavLink
            key={index}
            to={item.url}
            className={({ isActive }) =>
              `flex items-center gap-2 rounded p-2 ${isActive ? "bg-black text-white" : "text-black bg-white"}`
            }
          >
            <item.icon />
            {item.name}
          </NavLink>
        ))}

        <Link to="/" className="">
        <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all cursor-pointer">
            Se deconnecter
        </button>
        </Link>
      </div>

      <div className="flex-1 bg-amber-950 h-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
