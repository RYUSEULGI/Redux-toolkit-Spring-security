import axios from 'axios';

const API_URL = '/data/users.json';

const userList = () => {
    axios
        .get(API_URL)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
