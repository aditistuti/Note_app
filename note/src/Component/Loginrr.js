import logo from '../contants/logo.svg';
import note from '../contants/note.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Loginrr = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
            const response = await axios.post("/api/login", user);
            console.log("Login successful", response.data);
            navigate("/Note");
        } catch (error) {
            console.log("Login error", error);
        }
    };

    return (
        <div className="flex h-screen w-screen bg-gray-50">
            <div className="left h-full w-6/12 flex flex-col justify-center items-start pl-20 bg-gradient-to-br from-green-400 to-blue-500 text-white">
                <img src={logo} alt="logo" className="mb-6 w-32" />
                <h1 className="font-bold text-5xl leading-tight">Keep life simple</h1>
                <p className="text-xl font-light mt-4 leading-relaxed">
                    Store all your notes in a simple and intuitive app that helps you enjoy what is most important in life.
                </p>
            </div>
            <div className="right h-full w-6/12 bg-white flex flex-col items-center justify-center shadow-lg">
                <img src={note} alt="note" className="mb-10 mt-20 w-48" />
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 w-full"
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 w-full"
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button 
                        type="submit" 
                        className="h-12 w-full bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-white font-semibold text-lg flex items-center justify-center"
                    >
                        Login
                    </button>
                </form>
                <h1 className="mt-6">
                    Already on NotePad?
                    <span className="text-green-500 font-medium text-lg ml-2">
                        <button onClick={() => navigate("/SignUp")} className="focus:outline-none">Sign Up</button>
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Loginrr;
