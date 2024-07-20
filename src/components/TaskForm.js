import React, { useState } from 'react';
import TaskService from '../services/TaskService.js';
import '../CSS/TaskForm.css';

const TaskForm = () => {
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await TaskService.createTask({ description });
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
