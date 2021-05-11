import axios from 'axios';

const SERVER = 'http://localhost:8080/users';

const getList = () => axios.get(`${SERVER}/findAll`);
const signup = (payload) => axios.post(`${SERVER}/signup`, payload);
const signin = (payload) => {
    const api = axios({
        url: `${SERVER}/siginin`,
        method: 'post',
        headers: {
            'Content-type': 'application/json',
            Authorization: 'JWT',
        },
        data: payload,
    }).then((res) => {
        localStorage.setItem('token', res.data);
        return res;
    });
    return api;
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getList, signup, signin };
