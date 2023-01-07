import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '7225ae20-9fc7-4ae1-8bff-83d6d08c471a'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        })
        .then(response => {
            return response.data;
        });
    },
    deleteUsers(u) {
        return instance.delete(`follow/${u.id}`, {
        })
    },
    postUsers(u) {
        return instance.post(`follow/${u.id}`, {}, {
        })
    }
}   
