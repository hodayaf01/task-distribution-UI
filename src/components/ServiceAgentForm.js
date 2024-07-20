import React, { useState } from 'react';
import ServiceAgentService from '../services/ServiceAgentService.js';
import '../CSS/ServiceAgentForm.css';

const ServiceAgentForm = () => {
    const [name, setName] = useState('');
    const [isAvailable, setIsAvailable] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await ServiceAgentService.addAgent({ name, isAvailable });
        setName('');
        setIsAvailable(false);
    };

    return (
        <form onSubmit={handleSubmit} className="agent-form">
            <div className="form-group">
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Available:</label>
                <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
            </div>
            <button type="submit">Add Agent</button>
        </form>
    );
};

export default ServiceAgentForm;
