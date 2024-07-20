import React from 'react';
import ServiceAgentList from './components/ServiceAgentList.js';
import ServiceAgentForm from './components/ServiceAgentForm.js';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1>Task Distribution System</h1>
            <div className="form-container">
                <ServiceAgentForm />
                <TaskForm />
            </div>
            <div className="list-container">
                <ServiceAgentList />
                <TaskList />
            </div>
        </div>
    );
};

export default App;
