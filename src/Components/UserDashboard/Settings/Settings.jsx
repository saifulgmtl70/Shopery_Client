import React, { useRef } from 'react';

const Settings = () => {
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="h-auto ">
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
            <form className="mb-6 border p-4 rounded-lg bg-white shadow-sm">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    
                    <div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="firstName">First name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px]" type="text" id="firstName" placeholder="Dianne" />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="lastName">Last Name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px]"  type="text" id="lastName" placeholder="Russell" />
                        </div>
                        
                        <div className="flex flex-col mb-4 lg:col-span-2">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="email">Email</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px]"  type="email" id="email" placeholder="dianne.russell@gmail.com" />
                        </div>
                        
                        <div className="flex flex-col mb-4 lg:col-span-2">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="phone">Phone Number</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px]"  type="tel" id="phone" placeholder="(603) 555-0123" />
                        </div>

                    </div>

                    <div>
                        <div className="flex flex-col items-center my-3 lg:my-14">
                            <img src="https://i.ibb.co/BLZ0DLv/Image.png" alt="user" className="w-[130px] h-[130px] rounded-full mb-4" />
                            <button type="button" onClick={handleImageClick} className="border-[3px] border-[#00B207] transition-all delay-200 hover:bg-[#00B207] text-[#00B207] hover:text-[#fff] font-bold rounded-[26px] px-7 py-[10px]">
                                Choose Image
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept="image/*"
                            />
                        </div>
                    </div>
                    
                    <div className="col-span-1 mx-auto lg:mx-0 lg:col-span-2">
                        <button type="submit" className="bg-[#00B207] text-white rounded-[26px] px-7 py-[10px] ">Save Changes</button>
                    </div>

                </div>
            </form>



            <h2 className="text-xl font-semibold mb-6">Billing Address</h2>
            <form className="mb-6 border p-4 rounded-lg bg-white shadow-sm ">
     
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="firstName">First name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] " type="text" id="firstName" placeholder="Dianne" />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="lastName">Last Name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] "  type="text" id="lastName" placeholder="Russell" />
                        </div>
                        
                        <div className="flex flex-col w-full mb-4 lg:col-span-2">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="email">Email</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px]"  type="email" id="email" placeholder="dianne.russell@gmail.com" />
                        </div>
                    </div>
                    
                    <div className="flex flex-col mb-4 lg:col-span-2">
                        <label className="mb-2 font-medium text-[#555]" htmlFor="phone">Phone Number</label>
                        <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] w-full"  type="tel" id="phone" placeholder="(603) 555-0123" />
                    </div>


                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="firstName">First name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] " type="text" id="firstName" placeholder="Dianne" />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="lastName">Last Name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] "  type="text" id="lastName" placeholder="Russell" />
                        </div>
                        
                        <div className="flex flex-col w-full mb-4 lg:col-span-2">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="email">Email</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px]"  type="email" id="email" placeholder="dianne.russell@gmail.com" />
                        </div>
                    </div>



                    <div className="flex items-center gap-3 ">
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="firstName">First name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] " type="text" id="firstName" placeholder="Dianne" />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="lastName">Last Name</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] "  type="text" id="lastName" placeholder="Russell" />
                        </div>
                        
                        
                    </div>



                </div>

                
                
                <div className="col-span-1 mx-auto lg:mx-0 lg:col-span-2">
                    <button type="submit" className="bg-[#00B207] text-white rounded-[26px] px-7 py-[10px] ">Save Changes</button>
                </div>


            </form>



            <h2 className="text-xl font-semibold mb-6">Change Password</h2>
            <form className="mb-6 border p-4 rounded-lg bg-white shadow-sm ">

                <div>
                    
                    <div className="flex flex-col mb-4 lg:col-span-2">
                        <label className="mb-2 font-medium text-[#555]" htmlFor="phone">Current Password</label>
                        <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] w-full"  type="password" id="phone" placeholder="Current Password" />
                    </div>


                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="firstName">New Password Password</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] " type="password" id="firstName" placeholder="New Password Password" />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label className="mb-2 font-medium text-[#555]" htmlFor="lastName">Confirm Password</label>
                            <input className="border focus:outline-none placeholder:text-[#555] focus:border-[#00B307] rounded-[4px] px-4 py-[10px] "  type="password" id="lastName" placeholder="Confirm Password" />
                        </div>
                        
                       
                    </div>




                </div>

                
                
                <div className="col-span-1 mx-auto lg:mx-0 lg:col-span-2">
                    <button type="submit" className="bg-[#00B207] text-white rounded-[26px] px-7 py-[10px] ">Save Changes</button>
                </div>


            </form>






        </div>
    );
};

export default Settings;
