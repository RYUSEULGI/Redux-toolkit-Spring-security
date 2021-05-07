import axios from 'axios';

const SERVER = 'http://localhost:8080/users';

const getList = () => axios.get(`${SERVER}/findAll`);
const siginin = () => axios.post(`${SERVER}/signup`, {});

export default { getList, siginin };
