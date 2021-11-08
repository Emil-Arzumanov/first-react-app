import axios from "axios";

let instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0`,
        headers: {
            "API-KEY": "86de2293-5d2f-4e3e-8cda-b8496001a87b"
        }
    }
);

export const ProfileAPI = {
    profileUser:(userID) => {
        return instance.get(`/profile/${userID}`);
    },
    getStatus:(userID) => {
        return instance.get(`/profile/status/${userID}`);
    },
    updateStatus:(status) => {
        return instance.put(`/profile/status`,{status: status});
    }
};

export const AuthAPI = {
    loginUser:() => {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    }
};

export const UsersAPI = {
    getUsers:(currentPage = 1, pageSize = 5) => {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    deleteUsers:(id) => {
        return instance.delete(`/follow/${id}`).then(response => {
            return response.data;
        });
    },
    postUsers:(id) => {
        return instance.post(`/follow/${id}`).then(response => {
            return response.data;
        });
    }
};