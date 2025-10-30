import React from 'react';
import { useParams } from 'react-router';
import useProduct from '../components/Hook/HookData';

const ProductsDetails = () => {
    const {id}=useParams()
    const {products,loading}=useProduct();
    const product=products.find(p=> String(p.id)===id)
    // console.log(product)
    if(loading) return <p>Loading....</p>
    const { category,dimensions,
 name, image, description, price,material } = product;

 const handleWishlist=()=>{
  const list =JSON.parse(localStorage.getItem('Wishlist'))
 let updateData=[];
  if(list){
    const isDuplicate=list.some(p=>p.id===product.id)
    if(isDuplicate) return alert('Already set data')
    updateData=[...list,product]
  }
  else{
    updateData.push(product)
  }
  localStorage.setItem('Wishlist',JSON.stringify(updateData))
 }
    return (
         <div>
            <div className="card h-full bg-base-100  shadow-sm">
  <figure className='h-84 overflow-hidden'>
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
    <div className="card-actions justify-end">
      <button onClick={handleWishlist} className="btn">Add to wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductsDetails;