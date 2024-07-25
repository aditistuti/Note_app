import penw from '../contants/penw.svg';
import home from '../contants/home.svg';
import plus from '../contants/plus.svg';
import exit from '../contants/exit.svg';
import moon from '../contants/moon.svg';
import sun from '../contants/sun.svg';
import axios from 'axios';
import Task from './Task';
import { useContext, useState } from "react";
import TaskContext from "../Context/Taskcontext";
import { useNavigate } from "react-router-dom";
import serach from "../contants/serach.svg";

const Note = () => {
    const { taskList, n } = useContext(TaskContext);
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleLogout = async () => {
        try {
            await axios.post("/api/logout");
            navigate('/');
        } catch (e) {
            console.error("Logout failed", e);
        }
    };

    return (
        <div className={`flex h-screen w-screen overflow-hidden ${darkMode ? 'bg-[#1E1E1E] text-white' : 'bg-[#F5F5F5] text-black'}`}>
            <div className="side_nav fixed bg-[#2C2C2C] h-full w-[80px] flex flex-col items-center py-6">
                <img src={penw} alt="pen" className='mt-4 w-8 h-8' />
                <button className='mt-10'>
                    <img src={home} alt="home" onClick={() => navigate("/")} className='h-8 w-8' />
                </button>
                <button className='mt-10'>
                    <img src={plus} alt="add task" onClick={() => navigate('/addtask')} className='h-8 w-8' />
                </button>
                <button className='mt-auto mb-4' onClick={handleLogout}>
                    <img src={exit} alt="logout" className='h-8 w-8' />
                </button>
            </div>
            <div className={`ml-[80px] flex-1 flex flex-col overflow-hidden ${darkMode ? 'bg-[#1E1E1E] text-white' : 'bg-[#F5F5F5] text-black'}`}>
                <div className='search flex items-center justify-between p-4'>
                    <div className='flex items-center'>
                        <img src={serach} alt="search" className='h-6 w-6' />
                        <input type="text" placeholder='Search' className={`h-10 w-3/5 p-2 ml-2 rounded-md border ${darkMode ? 'bg-[#2C2C2C] text-white border-[#94949c]' : 'border-[#94949c]'}`} />
                    </div>
                    <img src={darkMode ? sun : moon} alt='toggle dark mode' className='h-6 w-6 cursor-pointer' onClick={toggleDarkMode} />
                </div>
                <div className='p-6'>
                    <h1 className='text-2xl font-semibold mb-2'>Hello, {n}! 👋🏼</h1>
                    <h1 className='text-lg'>All your notes are here, in one place!</h1>
                </div>
                <div className='main flex-1 overflow-auto p-6'>
                    <div className='flex flex-wrap gap-6'>
                        {taskList.map((task) =>
                            <Task task={task} key={task.taskId} />
                        )}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Note;
