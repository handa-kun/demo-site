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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data;
            });
    },
    deleteUsers(userId) {
        return instance.delete(`follow/${userId}`, {});
    },
    postUsers(userId) {
        return instance.post(`follow/${userId}`, {}, {});
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`, {});
    },
    loginMe() {
        return instance.post(`auth/login`, {})
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}
