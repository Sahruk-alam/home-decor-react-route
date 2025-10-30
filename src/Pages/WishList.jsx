import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WishList = () => {
    const [sortOrder,setSortOrder]=useState('None')
    const [wishlist,setWishlist]=useState([])
    useEffect(()=>{
        const saveList=JSON.parse(localStorage.getItem('Wishlist'))
        if(saveList)
            setWishlist(saveList)
        
    },[])
    const oreder=(()=>{
        if(sortOrder=='price-asc'){
            return [...wishlist].sort((a,b)=>a.price-b.price)
        }else if(sortOrder=='price-desc'){
             return [...wishlist].sort((a,b)=>b.price-a.price)
        }else{
            return wishlist;
        }
    })()

 const handleRemove=(id)=>{
     const list =JSON.parse(localStorage.getItem('Wishlist'))
     let updateData=list.filter(p=>p.id!==id)
    localStorage.setItem('Wishlist',JSON.stringify(updateData))
    setWishlist(updateData) 
 }

if(!wishlist.length) return <p>No data available</p>

const totalByCategory={}
wishlist.forEach(product=>{
    const category=product.category
    totalByCategory[category]=(totalByCategory[category] || 0)+product.price
})

const chartData=Object.keys(totalByCategory).map(category=>({
    category,
    total: totalByCategory[category],
}))
console.log(chartData)
    return (
        <div className='space-y-3'>
              <div className='flex justify-between items-center py-5'>
            <h2 className='text-3xl font-semibold'>Wishlist 
                <span className='text-sm text-gray-500'> 
                    ({ wishlist.length}) product found</span>
            </h2>
            <label className='w-full max-w-xs'>
                <select className='select' value={sortOrder} 
                onChange={e=>setSortOrder(e.target.value)}>
                    <option value="none">Sort by price</option>
                    <option value="price-asc">Low-&gt;high</option>
                    <option value="price-desc">High-&gt;low</option>
                </select>
            </label>
            </div>
            <hr className='text-gray-300' />
    <div className='space-y-6'>
        {
        oreder.map(p=>
    <div key={p.id} className="card btn-outline card-side bg-base-100 shadow-lg">
  <figure>
    <img className='w-40 h-20 object-cover'
      src={p.image}
      alt={p.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{p.name}</h2>
    <p>{p.category}</p>
   </div>

    <div className="pr-4 flex items-center gap-3 "> 
        <p className='font-bold'>${p.price}</p>
      <button onClick={()=>handleRemove(p.id)} className="btn btn-outline">Remove</button>
    </div>
  
</div>)
        }

    </div>

    <div className='space-y-3 '>
        <h1 className='text-xl font-semibold'>WishList summery</h1>
        <div className='bg-base-100 border rounded-xl p-4 h-80'>
        <ResponsiveContainer width="100%" height="100%">
       <BarChart
      data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar 
      dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>

        </ResponsiveContainer>
      

        </div>
    </div>

        </div>
    );
};

export default WishList;