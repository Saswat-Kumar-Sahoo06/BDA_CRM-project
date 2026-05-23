import { Bell } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
    const { user } = useAuth();
    
    

    return (
        <div className='bg-white shadow px-6 py-4 flex items-center justify-between rounded-xl'>
            <div>
                <h2 className='text-xl font-semibold'>
                    Welcome,
                    {user?.name}
                </h2>

                <p className='text-gray-500 text-sm'>
                    Manage your CRM dashboard
                </p>
            </div>

            <div className='flex items-center gap-4'>
                <Bell />

                <div className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center'>
                    {user?.name?.charAt(0)}
                </div>
            </div>
        </div>
    );
};

export default Navbar;