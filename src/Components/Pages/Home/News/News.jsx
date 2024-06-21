import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { GoTag } from "react-icons/go";
import { CiUser } from 'react-icons/ci';
import { FaRegCommentAlt } from 'react-icons/fa';

const News = () => {
    return (
        <div className="px-5 lg:px-12 py-10 nunito_sans">
            <div className="text-center mb-10">
                <h2 className='text-[#222] font-bold text-[30px]'>Latest News</h2>
            </div>


            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                <article className="h-auto relative rounded-sm bg-[#fff] shadow-md hover:shadow-xl border hover:border-0 overflow-hidden transition cursor-pointer">
                    <div className="hover:relative overflow-hidden duration-1000 w-full ">
                        <img alt="" src="https://i.ibb.co/LdF4mnx/blog-1.png" className="overflow-hidden w-full  hover:scale-105 duration-1000 ease-in-out object-cover"/>

                        <div className='bg-[#fff] px-8 py-2 rounded-[5px] absolute left-2 top-3'>
                            <h4>18</h4>
                            <span>Nov</span>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6">
                        
                        <div className="flex itemws-center gap-3">
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><GoTag /> Food</p>
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><CiUser /> By Admin</p>
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><FaRegCommentAlt /> 65 Comments</p>
                        </div>

                        <Link href="#">
                            <h3 className="mt-4 text-lg text-[#1A1A1A] hover:text-[#00B307]">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum</h3>
                        </Link>

                        <Link to="#" target="_blank">
                            <button className="text-[#00B307] my-4 flex items-center gap-2">Read more <MdArrowRightAlt className="text-[20px]" /></button>
                        </Link>
                    </div>

                    
                    
                </article>



                <article className="h-auto relative rounded-sm bg-[#fff] shadow-md hover:shadow-xl border hover:border-0 overflow-hidden transition cursor-pointer">
                    <div className="hover:relative overflow-hidden w-full  duration-1000">
                        <img alt="" src="https://i.ibb.co/fx1HQvC/blog-2.png" className="overflow-hidden hover:scale-105 duration-1000 ease-in-out w-full  object-cover"/>

                        <div className='bg-[#fff] px-8 py-2 rounded-[5px] absolute left-2 top-3'>
                            <h4>18</h4>
                            <span>Dec</span>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6">
                        
                        <div className="flex itemws-center gap-3">
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><GoTag /> Food</p>
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><CiUser /> By Admin</p>
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><FaRegCommentAlt /> 40 Comments</p>
                        </div>

                        <Link href="#">
                            <h3 className="mt-4 text-lg text-[#1A1A1A] hover:text-[#00B307]">Eget lobortis lorem lacinia. Vivamus pharetra semper</h3>
                        </Link>

                        <Link to="#" target="_blank">
                            <button className="text-[#00B307] my-4 flex items-center gap-2">Read more <MdArrowRightAlt className="text-[20px]" /></button>
                        </Link>
                    </div>

                    
                    
                </article>


                <article className="h-auto relative rounded-sm bg-[#fff] shadow-md hover:shadow-xl border hover:border-0 overflow-hidden transition cursor-pointer w-full  ">
                    <div className="hover:relative overflow-hidden duration-1000">
                        <img alt="" src="https://i.ibb.co/R22Cb5K/blog-3.png" className="overflow-hidden w-full  hover:scale-105 duration-1000 ease-in-out object-cover"/>

                        <div className='bg-[#fff] px-8 py-2 rounded-[5px] absolute left-2 top-3'>
                            <h4>12</h4>
                            <span>Jan</span>
                        </div>
                    </div>

                    <div className="p-4 sm:p-6">
                        
                        <div className="flex itemws-center gap-3">
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><GoTag /> Food</p>
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><CiUser /> By Admin</p>
                            <p className='text-[#7c7a7a] text-[15px] flex items-center gap-1'><FaRegCommentAlt /> 40 Comments</p>
                        </div>

                        <Link href="#">
                            <h3 className="mt-4 text-lg text-[#1A1A1A] hover:text-[#00B307]">Maecenas blandit risus elementum mauris malesuada</h3>
                        </Link>

                        <Link to="#" target="_blank">
                            <button className="text-[#00B307] my-4 flex items-center gap-2">Read more <MdArrowRightAlt className="text-[20px]" /></button>
                        </Link>
                    </div>

                    
                    
                </article>


                





               

            </div>




        </div>
    );
};

export default News;