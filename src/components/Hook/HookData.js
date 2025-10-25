import axios from "axios"
import { useEffect, useState } from "react"

const useProduct=()=>{
    const [products,setProduct]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    useEffect( ()=>{
        axios('./furnitureData.json').then(data=>
    setProduct(data.data)).catch(err=>setError(err)).finally(
        ()=>setLoading(false))
    },[])
    return {products,loading,error}
}

export default useProduct;