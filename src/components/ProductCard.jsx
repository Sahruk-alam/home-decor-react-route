import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => { 
    const {id, category, name, image, description, price } = product;
    return (
        <div>
            <div className="card h-full bg-base-100 w-96 shadow-sm
            hover:scale-105 border transition ease-in-out">
  <figure className='h-48 overflow-hidden'>
    <img className=' w-full object-cover'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <h2>{category}</h2>
    <p>Price : ${price}</p>
    <div className="card-actions justify-center">
      <Link to={`/product/${id}`} className="btn outline">Visit Now</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;