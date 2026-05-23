import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />

            <div className='flex-1 p-6'>
                <Navbar />

                <div className='mt-6'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

