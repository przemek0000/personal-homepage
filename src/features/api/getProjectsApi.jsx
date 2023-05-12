import axios from "axios";

const getProjectsApi = () => {
    return axios.get("https://api.github.com/users/przemek0000/repos")
    .then((response) => response.data);
}

export default getProjectsApi;