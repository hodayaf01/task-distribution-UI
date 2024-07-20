import React, { useEffect, useState } from 'react';
import ServiceAgentService from '../services/ServiceAgentService.js';
import '../CSS/ServiceAgentList.css';

const ServiceAgentList = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetchAgents();
    }, []);

    const fetchAgents = async () => {
        const response = await ServiceAgentService.getAgents();
        setAgents(response.data);
        // setAgents([{id: 1, name: 'hodaya', isAvailable: true, taskCount:3},{id: 2, name: 'test', isAvailable: true, taskCount:5}])
    };

    const deleteAgent = async (id) => {
        await ServiceAgentService.deleteAgent(id);
        fetchAgents();
    };

    const toggleAvailability = async (id, isAvailable) => {
        await ServiceAgentService.updateAvailability(id, !isAvailable);
        fetchAgents();
    };

    return (
        <div className="agent-list">
            <h2>Service Agents</h2>
            <ul>
                {agents.map(agent => (
                    <li key={agent.id} className={agent.isAvailable ? 'available' : 'not-available'}>
                        {agent.name} - {agent.isAvailable ? 'Available' : 'Not Available'}
                        <button onClick={() => toggleAvailability(agent.id, agent.isAvailable)}>
                            {agent.isAvailable ? 'Set Unavailable' : 'Set Available'}
                        </button>
                        <button onClick={() => deleteAgent(agent.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceAgentList;
