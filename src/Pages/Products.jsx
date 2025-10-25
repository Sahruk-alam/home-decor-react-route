import React from 'react';
import useProduct from '../components/Hook/HookData';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const {products}=useProduct()
    // console.log()
    return (
        <div>
            <div className='flex justify-between items-center py-5'>
            <h2 className='text-3xl font-semibold'>All Product </h2>
            <button className='btn btn-outline'>Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 
             lg:grid-cols-3 gap-4'>
            {
            products.map(product  => 
            <ProductCard key={product.id} product={product}>

            </ProductCard>
            )
            
            }
          
        </div>
        </div>
    );
};

export default Products;