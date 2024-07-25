import logo from '../contants/logo.svg';
import note from '../contants/note.svg';
import icon from '../contants/icon.svg';
import li from '../contants/li.svg';
import join from '../contants/join.svg';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import TaskContext from '../Context/Taskcontext';

const Login = () => {
    const { sn } = useContext(TaskContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        sn(e.target.value);
    };

    return (
        <div className="flex h-screen w-screen bg-gray-50">
            <div className="left h-full w-6/12 flex flex-col justify-center items-start pl-20 bg-gradient-to-br from-green-400 to-blue-500 text-white">
                <img src={logo} alt="logo" className="mb-6 w-32" />
                <h1 className="font-bold text-5xl leading-tight">Keep life simple</h1>
                <p className="text-xl font-light mt-4 leading-relaxed">
                    Store all your notes in a simple and<br /> intuitive app that helps you enjoy what is<br /> most important in life.
                </p>
            </div>
            <div className="right h-full w-6/12 bg-white flex flex-col items-center justify-center shadow-lg">
                <img src={note} alt="note" className="mb-10 mt-20 w-48" />
                <button 
                    onClick={() => navigate("/Loginrr")} 
                    className="mb-10 h-12 w-80 bg-red-500 hover:bg-red-600 transition-colors rounded-lg text-white font-semibold text-lg flex items-center justify-center"
                >
                    <img src={icon} alt="icon" className="w-6 h-6" />
                    <span className="ml-2">Join with Google</span>
                </button>
                <div className="flex items-center mb-7 text-gray-500">
                    <img src={li} alt='li' className="w-5 h-5" />
                    <span className="mx-3">or join as a Guest</span>
                    <img src={li} alt='li' className="w-5 h-5" />
                </div>
                <input 
                    type="text" 
                    placeholder='Type your secret codename' 
                    className="p-2 mb-10 rounded-lg border border-gray-300 h-12 w-80 focus:outline-none focus:border-blue-400"
                    onChange={handleInputChange}
                />
                <button 
                    className="h-12 w-80 bg-green-500 hover:bg-green-600 transition-colors rounded-lg text-white font-semibold text-lg flex items-center justify-center"
                    onClick={() => navigate("/Note")}
                >
                    <img src={join} alt="icon" className="w-6 h-6" />
                    <span className="ml-2">Join as a Guest</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
