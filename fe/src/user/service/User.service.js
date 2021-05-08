import axios from 'axios';

const SERVER = 'http://localhost:8080/users';

const getList = () => axios.get(`${SERVER}/findAll`);
const signup = (payload) => axios.post(`${SERVER}/signup`, payload);
const signin = (payload) => {
    console.log('---user.service----');
    console.log(payload);
    axios.post(`${SERVER}/signin`, payload);
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getList, signup, signin };
