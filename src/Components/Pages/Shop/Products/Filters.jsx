import React, { useState } from "react";

const Filters = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [0, 100],
        rating: 0,
        availability: ""
    });

    const handleFilterChange = (name, value) => {
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    return (
        <div className="bg-white p-4 rounded shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">

               
                <div className="mb-4 lg:mb-0 w-full">
                    <h4 className="text-lg font-semibold mb-2">Category</h4>
                    <select
                        className="w-full p-2 border focus:outline-none border-gray-300 rounded"
                        value={filters.category}
                        onChange={(e) => handleFilterChange("category", e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                    </select>
                </div>

                <div className="mb-4 lg:mb-0 w-full">
                    <h4 className="text-lg font-semibold mb-2">Price Range</h4>
                    <input
                        className="w-full bg-[#00B207]"
                        type="range"
                        min="0"
                        max="100"
                        value={filters.priceRange[1]}
                        onChange={(e) => handleFilterChange("priceRange", [0, e.target.value])}
                    />
                    <div className="flex justify-between text-sm mt-2">
                        <span>0</span>
                        <span>{filters.priceRange[1]}</span>
                    </div>
                </div>

                

                
                <div className="mb-4 lg:mb-0 w-full">
                    <h4 className="text-lg font-semibold mb-2">Rating</h4>
                    <select
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        value={filters.rating}
                        onChange={(e) => handleFilterChange("rating", e.target.value)}
                    >
                        <option value="0">All</option>
                        <option value="1">1 Star & Up</option>
                        <option value="2">2 Stars & Up</option>
                        <option value="3">3 Stars & Up</option>
                        <option value="4">4 Stars & Up</option>
                    </select>
                </div>

                <div className="mb-4 lg:mb-0 w-full">
                    <h4 className="text-lg font-semibold mb-2">Availability</h4>
                    <select
                        className="w-full p-2 border  focus:outline-none border-gray-300 rounded"
                        value={filters.availability}
                        onChange={(e) => handleFilterChange("availability", e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>
                

            </div>
        </div>
    );
};

export default Filters;
