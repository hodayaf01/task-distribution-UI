import axios from 'axios';

const API_URL = 'http://localhost:8080/api/agents';

class ServiceAgentService {
    getAgents() {
        return axios.get(API_URL);
    }

    addAgent(agent) {
        return axios.post(API_URL, agent);
    }

    deleteAgent(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

    updateAvailability(id, isAvailable) {
        return axios.put(`${API_URL}/${id}/availability?isAvailable=${isAvailable}`);
    }
}

export default new ServiceAgentService();
