import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Userhome = () => {
    const { user } = useAuth();

    if (!user) {
        return <div>Loading...</div>; // or any loading indicator you prefer
    }

    return (
        <section className="nunito_sans">

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-5">
                <div className="h-auto rounded-lg border py-4">
                    <div className="mb-3">
                        <img src={user.photoURL} alt="user" className="w-[130px] h-[130px] mx-auto rounded-full" />
                    </div>
                    <div className="text-center mb-2">
                        <h3 className="text-[#333] font-[600] text-[18px] mb">{user.displayName}</h3>
                        <p className="text-[#666] font-[500] text-[15px] mb">Customer</p>
                    </div>
                    <div className="text-center">
                        <Link> <button className="text-[#00B307] text-[19px] font-bold text-center">Edit Profile</button> </Link>
                    </div>
                </div>
                <div className="h-auto rounded-lg border p-5">
                    <span className="text-[#666] font-[600] text-[14px]">BILLING ADDRESS</span>
                    <h3 className="text-[#333] font-[600] text-[20px] mb-2 mt-4">Saiful Islam Azad</h3>
                    <p className="text-[#666] font-[500] text-[15px] mb-3">4140 Parker Rd. Allentown, New Mexico 31134</p>
                    <p className="text-[#333] font-[500] text-[15px] mb-2">dainne.ressell@gmail.com</p>
                    <p className="text-[#333] font-[500] text-[15px] mb-4">(671) 555-0110</p>

                    <Link> <button className="text-[#00B307] text-[19px] font-bold mt-4">Edit Address</button> </Link>

                </div>
            </div>


            <div className="h-auto ">
                <div className="w-full mb-8 overflow-x-scroll border rounded-[6px] lg:overflow-x-hidden shadow-sm">
                    <div className="w-full ">
                        <div className="p-4 flex items-center justify-between">
                            <h2 className="text-[#222] font-bold  text-[18px]">Recet Order History</h2>
                            <h2 className="text-[#00B307] font-bold  text-[18px]">View ALl</h2>

                        </div>
                        <table className="w-full ">
                           
                            <thead>
                                <tr className="text-[15px] font-semibold tracking-wide text-left text-[#111] uppercase rounded-t-md  px-12 py-12 mb-10 bg-[#F2F2F2]">
                                    <th className="px-4 py-3 uppercase">Order Id</th>
                                    <th className="px-4 py-3 uppercase">Date</th>
                                    <th className="px-4 py-3 uppercase">Price</th>
                                    <th className="px-4 py-3 uppercase">Status</th>
                                    <th className="px-4 py-3 uppercase">Action</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white">
                                
                                <tr  className="text-gray-700 ">
                                    <td className="px-4 py-3 ">
                                        <div className='flex items-center gap-2'>
                                            
                                            <div>
                                                <h3 className='text-[18px] text-[#191919] font-[600] mb-1'>#23</h3>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-ms font-semibold ">12th June, 2024</td>
                                    
                                    <td className=" text-ms font-semibold ">
                                        <div>
                                            <h2>$1234.00</h2>
                                        </div>
                                    </td>
                                    <td className="px-4">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-[#222] font-[600]">
                                               
                                               Processing
                                              
                                            </h2>
                                        </div>
                                    </td>

                                    <td className="px-4">
                                        
                                            <h2 className="text-[#00B307] font-[700]">
                                               
                                                View Details
                                              
                                            </h2>
                                        
                                    </td>


                                </tr>
                               
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Userhome;
