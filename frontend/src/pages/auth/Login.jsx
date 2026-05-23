import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const { data } = await API.post("/auth/login", formData);

            login(data);

            navigate("/");
        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white shadow-xl rounded-2xl p-8 w-full max-w-md'>
                <h1 className='text-3xl font-bold text-center mb-6'>Login</h1>

                <form
                    onSubmit={handleSubmit}
                    className='space-y-4'
                >
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full border rounded-xl px-4 py-3 outline-none'
                    />

                    <input
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={formData.password}
                        onChange={handleChange}
                        className='w-full border rounded-xl px-4 py-3 outline-none'
                    />

                    <button
                        disabled={loading}
                        className='w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition'
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>

                <p className='text-center mt-4'>
                    Don't have an account?
                    <Link
                        to='/register'
                        className='text-blue-600 ml-1'
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;