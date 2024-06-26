import axios from "axios";



const axiosPublic = axios.create({
    baseURL: 'https://shopery-server-m9vzxd92o-saiful-islam-azads-projects.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;