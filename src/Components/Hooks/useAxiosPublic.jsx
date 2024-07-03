import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://shopery-server-od7wm88cv-saiful-islam-azads-projects.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;