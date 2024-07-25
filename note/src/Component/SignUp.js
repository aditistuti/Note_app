import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, email, password };
        console.log(user);
        axios.post("/api/register", user)
            .then((response) => {
                console.log(response.data);
                navigate('/Loginrr');
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg font-semibold transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
