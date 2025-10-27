import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import useProduct from '../components/Hook/HookData';

const Home = () => {

const {products}=useProduct();

const featureProduct=products.slice(0,6);

    return (
    
        <div>
            <div className='flex justify-between items-center py-5'>
            <h2 className='text-3xl font-semibold'>Product Features</h2>
            <Link className='btn btn-outline' to='/products'>See all product</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-4'>
            {
            featureProduct.map(product  => 
            <ProductCard key={product.id} product={product}>

            </ProductCard>
            )
            
            }
          
        </div>
        </div>
    );
};

export default Home;