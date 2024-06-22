import { useEffect, useState } from "react";
import Product from "./Product";
import Filters from "./Filters";


const Products = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const openModal = (id) => {
        setOpenModalId(id);
    };

    const closeModal = () => {
        setOpenModalId(null);
    };

    const handleFilterChange = (filters) => {
        const { category, priceRange, rating, availability } = filters;
        const filtered = products.filter(product => {
            return (
                (category ? product.category === category : true) &&
                product.price >= priceRange[0] &&
                product.price <= priceRange[1] &&
                product.rating >= rating &&
                (availability ? product.availability === availability : true)
            );
        });
        setFilteredProducts(filtered);
    };





    return (
        <div className="px-5 lg:px-12 py-10 nunito_sans">
            <Filters onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                {filteredProducts.map((product) => (
                    <Product
                        key={product._id}
                        product={product}
                        popularProduct={product}
                        isModalOpen={openModalId === product._id}
                        openModal={openModal}
                        closeModal={closeModal}
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;