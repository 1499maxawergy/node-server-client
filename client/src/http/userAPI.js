import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}
export const check = async () => {
    const {data} = await $authHost.post('api/user/auth', );
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const getAll = async () => {
    const users = await $authHost.get('/api/user/getAll');
    return users;
}

export const deleteOne = async (userId) => {
    return await $authHost.post('/api/user/delete', {id: userId});
}

export const updateOne = async (id, email, role, password) => {
    return await $authHost.patch('/api/user/patch', {id, email, role, password})
}

export const addOne = async (email, password, role) => {
    const {data} = await $host.post('api/user/registration', {email, password, role});
    return data;
}
