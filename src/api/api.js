import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "34c15a27-7bdd-403f-afc2-19d2504f72d1" }
});

export const todolistsAPI = {

    getTodolists() {
        return instance.get(`todo-lists`).then(response =>response.data)
    },

    createTodolist(title) {
        return instance.post(`todo-lists`, {title})
    }
};
