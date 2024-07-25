import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../Context/Taskcontext";

const Card = () => {
    const { addNewTask } = useContext(TaskContext);
    const [task, setTask] = useState({ title: '', description: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.title.trim() && task.description.trim()) {
            addNewTask(task);
            setTask({ title: '', description: '' });
            navigate("/Note");
        } else {
            alert("Please fill in both title and description.");
        }
    };

    return (
        <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-6">Add New Task</h3>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input
                        type="text"
                        placeholder="Type your task title"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="title"
                        spellCheck={false}
                        onChange={handleInputChange}
                        value={task.title}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                        placeholder="Type your task description"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="description"
                        spellCheck={false}
                        onChange={handleInputChange}
                        value={task.description}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Card;
