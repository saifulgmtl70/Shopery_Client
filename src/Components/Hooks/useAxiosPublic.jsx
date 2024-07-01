import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://shopery-server-bom4620sr-saiful-islams-projects-d8d1dad5.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;