import React from 'react';
import { useParams } from 'react-router';
import useProduct from '../components/Hook/HookData';

const ProductsDetails = () => {
    const {id}=useParams()
    const {products,loading}=useProduct();
    const product=products.find(p=> String(p.id)===id)
    console.log(product)
    if(loading) return <p>Loading....</p>
    const { category,dimensions,
 name, image, description, price,material } = product;
    return (
         <div>
            <div className="card h-full bg-base-100 w-96 shadow-sm">
  <figure className='h-48 overflow-hidden'>
    <img className=' w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>{material}</p>
    <p>{dimensions}</p>
    <h2>{category}</h2>
    <p>Price : ${price}</p>
    <div className="card-actions justify-center">
      <button  className="btn btn-primary">Add to wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductsDetails;