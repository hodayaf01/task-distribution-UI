import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';

class TaskService {
    getTasks() {
        return axios.get(API_URL);
    }

    createTask(task) {
        return axios.post(API_URL, task);
    }
}

export default new TaskService();
