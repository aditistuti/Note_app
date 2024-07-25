import pen from '../contants/pen.svg';
import tick from '../contants/tick.svg';
import del from '../contants/del.svg';
import { useContext, useState } from 'react';
import { formateDate } from "../contants/Dateutil";
import TaskContext from '../Context/Taskcontext';

const Task = ({ task: lili }) => {
    const { title, description, createdDate, taskId } = lili;
    const { deleteTask, editTask } = useContext(TaskContext);
    const [task, setTask] = useState({ title, description, taskId });
    const [editing, setEditing] = useState(false);

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className={`note_box p-4 rounded-lg shadow-lg flex flex-col justify-between ${editing ? 'bg-[#F0F4F8]' : 'bg-[#FBEB95]'} transition-colors duration-300 ease-in-out`}>
            {editing ? (
                <>
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">Title</label>
                        <input
                            type="text"
                            placeholder="TITLE"
                            className="block w-full p-2 rounded-lg border border-[#A8A8B3] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="title"
                            spellCheck={false}
                            onChange={handleInputChange}
                            value={task.title}
                        />
                    </div>
                    <div className="meta text-gray-600 my-4">
                        {formateDate(createdDate)}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700">Description</label>
                        <textarea
                            placeholder="Description"
                            className="block w-full p-2 rounded-lg border border-[#A8A8B3] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="description"
                            spellCheck={false}
                            onChange={handleInputChange}
                            value={task.description}
                        />
                    </div>
                    <div className="foot flex items-center justify-evenly mt-4">
                        <button onClick={() => { editTask(task); setEditing(false); }} className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out">
                            <img src={tick} alt="tick" className='h-6 w-6' />
                        </button>
                        <button onClick={() => setEditing(false)} className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ease-in-out">
                            <img src={del} alt="del" className='h-6 w-6' />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="header text-xl font-bold mb-2">
                        {title}
                    </div>
                    <div className="meta text-gray-600 mb-4">
                        {formateDate(createdDate)}
                    </div>
                    <div className="description text-gray-700">
                        {description}
                    </div>
                    <div className="foot flex items-center justify-evenly mt-4">
                        <button onClick={() => setEditing(true)} className="p-2 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300 ease-in-out">
                            <img src={pen} alt="edit" className='h-5 w-5' />
                        </button>
                        <button onClick={() => deleteTask(taskId)} className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 ease-in-out">
                            <img src={del} alt="delete" className='h-5 w-5' />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Task;
