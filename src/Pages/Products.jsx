import React, { useState } from 'react';
import useProduct from '../components/Hook/HookData';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const {products}=useProduct()
    const [search,setSearch]=useState('')
    const trim=search.trim().toLocaleLowerCase();
    const searchProducts= trim ? products.filter(product=>
        product.name.toLocaleLowerCase().includes(trim)) 
        : products; 
    return (
        <div>
            <div className='flex justify-between items-center py-5'>
            <h2 className='text-3xl font-semibold'>All Product 
                <span className='text-sm text-gray-500'> 
                    ({searchProducts.length}) product found</span>
            </h2>
            <label className='input'>
                <input
                value={search}
                onChange={e=>setSearch(e.target.value)}
                 type="search"
                  placeholder='search Products..' />
            </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 
             lg:grid-cols-3 gap-4'>
            {
            searchProducts.map(product  => 
            <ProductCard key={product.id} product={product}>

            </ProductCard>
            )
            
            }
          
        </div>
        </div>
    );
};

export default Products;