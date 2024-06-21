import { useEffect, useState } from "react";
import Product from "./Product";


const Products = () => {

    const [ products, setProducts ] = useState([]);
    const [openModalId, setOpenModalId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    
    const openModal = (id) => {
        setOpenModalId(id);
    };

    const closeModal = () => {
        setOpenModalId(null);
    };

    return (
        <div className="px-5 lg:px-12 py-10 nunito_sans">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                {products.map((product) => (
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