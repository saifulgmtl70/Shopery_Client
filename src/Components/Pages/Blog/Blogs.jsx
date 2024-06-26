import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Newsletter from "../Shop/Products/Newsletter";
import { useEffect, useState } from "react";
import Blog from "./Blog";

import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://shopery-server-m9vzxd92o-saiful-islam-azads-projects.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <section className="nunito_sans">
            <Helmet>
                <title>Shopery | Blog </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <div className="specific_product_banner h-full lg:h-[30vh] mb-2">
                <div className="text-[17px] text-white breadcrumbs px-12 py-10 mb-5">
                    <ul>
                        <li><Link to="/" className="flex items-center gap-1"><HiOutlineHome />Home</Link></li>
                        <li className="text-[#00B207] font-bold">Blog </li>
                    </ul>
                </div>
            </div>

            <div className="px-7 lg:px-14 py-10">
                <div className="flex items-center justify-center lg:justify-between gap-4 mb-7">
                    <div className="flex gap-4">
                        <select className="select focus:outline-0">
                            <option value="">Sort By Category</option>
                            <option value="electronics">Fish & Meat</option>
                            <option value="fashion">Fruits & Vegetables</option>
                            <option value="home">Grocery</option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <select className="select focus:outline-0">
                            <option value="">Sort By Date</option>
                            <option value="latest">Sort by: Latest</option>
                            <option value="popular">Sort by: Popular</option>
                            <option value="rating">Sort by: Rating</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {blogs.map((blog) => (
                        blog && <Blog key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>

            <Newsletter />
        </section>
    );
};

export default Blogs;
