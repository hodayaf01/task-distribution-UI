import React, { useEffect, useState } from 'react';
import TaskService from '../services/TaskService.js';
import '../CSS/TaskList.css';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await TaskService.getTasks();
        setTasks(response.data);
        //setTasks([{id: '1',description:'task 1', assignedAgentId: '316602820', status: 'open'},{id: '2',description:'task 2', assignedAgentId: '316602820', status: 'open'}])
    };

    return (
        <div className="task-list">
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.description} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
