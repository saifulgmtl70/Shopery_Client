import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { MdCancel } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from 'react-helmet-async';

const OrderHistory = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { user } = useAuth();

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/orders?email=${user.email}`);
            return res.data;
        }
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };



    const handleCancelOrder = (id) =>{
        axiosPublic.delete(`/orders/${id}`)
        .then(res =>{
            if(res.data.deletedCount > 0){
                refetch();
                toast.success(`Your Order has caneled Successfully`, {
                    position: "top-center",
                    autoClose: 3000,
                    // onClose: () =>  navigate('/')
                });
            }
        });
    };


    return (
        <div className="">
            <Helmet>
                <title>Shopery | Order History </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <ToastContainer/>
            
            <div className="h-auto ">
                <div className="w-full mb-8 overflow-x-scroll border rounded-[6px] lg:overflow-x-hidden shadow-sm">
                    <div className="w-full ">
                        <div className="p-4 flex items-center justify-between">
                            <h2 className="text-[#222] font-bold text-[18px]">Recent Order History</h2>
                            <h2 className="text-[#00B307] font-bold text-[18px]">View All</h2>
                        </div>
                        <table className="w-full ">
                            <thead>
                                <tr className="text-[15px] font-semibold tracking-wide text-left text-[#111] uppercase rounded-t-md px-12 py-12 mb-10 bg-[#F2F2F2]">
                                    <th className="px-4 py-3 uppercase">#Order Id</th>
                                    <th className="px-4 py-3 uppercase">Date</th>
                                    <th className="px-4 py-3 uppercase">Total</th>
                                    <th className="px-4 py-3 uppercase">Status</th>
                                    <th className="px-4 py-3 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    orders.map((order) => {
                                        return (
                                            <tr key={order._id} className="text-gray-700 ">
                                                <td className="px-4 py-3 ">
                                                    <div className='flex items-center gap-2'>
                                                        <div>
                                                            <h3 className='text-[16px] text-[#191919] font-[600] mb-1'>{order._id}</h3>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-ms font-semibold ">{formatDate(order.createdAt)}</td>
                                                <td className="text-ms font-semibold ">
                                                    <div className=" flex items-center justify-center" >
                                                        <h2>{order.totalPrice}</h2>
                                                    </div>
                                                </td>
                                                <td className="px-4">
                                                    <div className="flex items-center gap-3">
                                                        <h2 className="text-[#222] font-[600]">
                                                            {order.status}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <div className="tooltip flex items-center justify-center" data-tip="Cancel Order">
                                                        <button onClick={() => handleCancelOrder(order._id)} className="text-[#00B207] text-[20px] lg:text-[25px] font-bold"> <MdCancel /> </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderHistory;
