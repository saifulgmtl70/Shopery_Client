import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddProduct = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const imgbbAPIKey = "d8071d1fd460bb31d496e9077fef1917"; // Replace with your imgbb API key

    const uploadImageToImgbb = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        const response = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`, formData);
        return response.data.data.url; // Return the URL of the uploaded image
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const sale = form.discount.value;
        const rating = parseFloat(form.rating.value); 
        const availability = form.availability.value;
        const description = form.description.value;

        try {
            const images = await Promise.all(
                [form.image_1.files[0], form.image_2.files[0], form.image_3.files[0], form.image_4.files[0]].map(uploadImageToImgbb)
            );

            const productItem = { name, category, price, sale, rating, availability, description, images };
            console.log(productItem);

            // Send productItem to your server
            const response = await axiosSecure.post('/products', productItem);
            console.log("Server Response:", response.data);

            // Show success toast
            // toast.success("Product added successfully!");
            toast.success("Product added successfully!", {
                position: "top-center",
                autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

            });
        } catch (error) {
            console.error("Error adding product:", error);
            // toast.error("Failed to add product. Please try again.");
            toast.error("Failed to add product. Please try again.", {
                position: "top-center",
                autoClose: 1000, // এক সেকেন্ডের মধ্যে বন্ধ হবে

            });

        }

        form.reset();

    };
 



    return (
        <section className="px-4 lg:px-12 my-20 py-12">
            <ToastContainer/>
            <div className="text-center font_Inter mb-10">
                <h2 className="text-[27px] leading-relaxed uppercase text-[#333] font-bold"> ADD A PRODUCT</h2>
            </div>


            <div className="w-full bg-[#fff] h-auto px-10 mb-12 py-3 rounded-[1px]">
                
                <form onSubmit={handleAddProduct} className=" w-full my-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="mb-8">
                            <p className="text-[17px] text-[#3e3d3d] font-[600] mb-2">Product name*</p>
                            <input type="text" name="name" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border focus:border-[#02B308] rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d]" placeholder="Product Name" required/>
                        </div>

                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Category*</p>

                            <select defaultValue="default" name="category" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border focus:border-[#02B308] rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d]" >
                                <option disabled value="default" >Select a Category</option>
                                <option value="salad">Fish</option>
                                <option value="pizza">Meat</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Fruits">Fruits</option>
                                <option value="Oil">Oil</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="BreadandBakery">Bread & Bakery</option>
                                <option value="DishDitergents">Dish Ditergents</option>
                                
                            </select>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        
                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Price*</p>
                            <input type="number" name="price" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border focus:border-[#02B308] rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d]"  placeholder="Price" required/>
                        </div>

                        <div className="mb-8">
                            <p className="text-[17px] text-[#3e3d3d] font-[600] mb-2">Discount*</p>
                            <input type="text" name="discount" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border focus:border-[#02B308] rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d]" placeholder="Discount" required/>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
                       

                        <div className="mb-8">
                            <p className="text-[17px] text-[#3e3d3d] font-[600] mb-2">Ratings*</p>
                            <input type="text" name="rating" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border focus:border-[#02B308] rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d]" placeholder="Product Ratings" required/>
                        </div>

                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Availability*</p>

                            <select defaultValue="default" name="availability" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border focus:border-[#02B308] rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d]" >
                                <option disabled value="default" >Select a Category</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                               
                                
                            </select>

                        </div>


                    </div>


                    <div className="mb-8">
                        <p className="text-[17px] text-[#454545] font-[600] mb-2">Product Description*</p>

                        <textarea name="description"  className="px-4 py-6 w-full focus:outline-none border focus:border focus:border-[#02B308] h-48 mx-auto rounded-[3px] bg-[#F1F5F9] placeholder:text-[#3e3d3d] resize-none" placeholder="Product Descriptions" ></textarea>
                    </div>



                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">

                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Product Image 1*</p>

                            <input type="file" name="image_1" className="px-4 py-4 w-full mx-auto border bg-[#F6F6F6] focus:outline-none  focus:border rounded-[3px] "/>
                        </div>

                            
                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Product Image 2*</p>

                            <input type="file" name="image_2" className="px-4 py-4 w-full mx-auto border bg-[#F6F6F6] focus:outline-none  focus:border rounded-[3px] "/>
                        </div>

                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Product Image 3*</p>

                            <input type="file" name="image_3"  className="px-4 py-4 w-full mx-auto border bg-[#F6F6F6] focus:outline-none  focus:border rounded-[3px] "/>
                        </div>

                            
                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Product Image 4*</p>

                            <input type="file" name="image_4" className="px-4 py-4 w-full mx-auto border bg-[#F6F6F6] focus:outline-none  focus:border rounded-[3px] "/>
                        </div>



                    </div>



                    <div className='flex items-center justify-center my-5'>
                        <button
                            type='submit'
                            className='flex items-center text-center gap-2 px-8 py-3 rounded-sm bg-gradient-to-r from-[#02B308] to-[#02b30899] text-white text-[16px] font-bold ' >
                            Add Product
                            
                        </button>
                    </div>

                </form>

            </div>



        </section>
    );
};

export default AddProduct;