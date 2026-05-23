// import {
//     LayoutDashboard,
//     Users,
//     Kanban,
//     BarChart3,
//     MessageSquare,
//     UserCircle,
//     LogOut,
// } from "lucide-react";

// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Sidebar = () => {
//     const { user, logout } = useAuth();

//     return (
//         <div className='w-64 min-h-screen bg-black text-white p-5'>
//             <h1 className='text-2xl font-bold mb-10'>BDA CRM</h1>

//             <div className='space-y-4'>
//                 <Link
//                     to='/'
//                     className='flex items-center gap-3 hover:text-gray-300'
//                 >
//                     <LayoutDashboard size={20} />
//                     Dashboard
//                 </Link>

//                 <Link
//                     to='/leads'
//                     className='flex items-center gap-3 hover:text-gray-300'
//                 >
//                     <Users size={20} />
//                     Leads
//                 </Link>

//                 <Link
//                     to='/kanban'
//                     className='flex items-center gap-3 hover:text-gray-300'
//                 >
//                     <Kanban size={20} />
//                     Kanban
//                 </Link>

//                 {user?.role === "admin" && (
//                     <Link
//                         to='/employees'
//                         className='flex items-center gap-3 hover:text-gray-300'
//                     >
//                         <BarChart3 size={20} />
//                         Employees
//                     </Link>
//                 )}

//                 <Link
//                     to='/communications'
//                     className='flex items-center gap-3 hover:text-gray-300'
//                 >
//                     <MessageSquare size={20} />
//                     Communication
//                 </Link>

//                 <Link
//                     to='/profile'
//                     className='flex items-center gap-3 hover:text-gray-300'
//                 >
//                     <UserCircle size={20} />
//                     Profile
//                 </Link>

//                 <button
//                     onClick={logout}
//                     className='flex items-center gap-3 text-red-400 hover:text-red-300'
//                 >
//                     <LogOut size={20} />
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;



import {
  LayoutDashboard,
  Users,
  Briefcase,
  Kanban,
  LogOut,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Sidebar = () => {
  const location =
    useLocation();

  const navigate =
    useNavigate();

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon:
        <LayoutDashboard size={20} />,
      path: "/",
    },

    {
      title: "Leads",
      icon:
        <Briefcase size={20} />,
      path: "/leads",
    },

    {
      title: "Kanban",
      icon:
        <Kanban size={20} />,
      path: "/kanban",
    },

    {
      title: "Employees",
      icon:
        <Users size={20} />,
      path: "/employees",
    },
  ];

  return (
    <div className='w-64 min-h-screen bg-black text-white p-5 flex flex-col'>
      <div>
        <h1 className='text-3xl font-bold mb-10'>
          CRM
        </h1>

        <div className='space-y-3'>
          {menuItems.map(
            (item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname ===
                  item.path
                    ? "bg-white text-black"
                    : "hover:bg-gray-800"
                  }`}
              >
                {item.icon}

                <span>
                  {item.title}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      <button
        onClick={logout}
        className='mt-auto flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500 transition-all'
      >
        <LogOut size={20} />

        Logout
      </button>
    </div>
  );
};

export default Sidebar;