import axios from 'axios'
import { useState, useEffect, useRef} from 'react'


// Used to fetch products in Cart
function useGetProduct(id) {
  const [data,setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const ref = useRef()
  ref.current = true
  useEffect(() => {
    function fetchProduct(){
      if(data != null || loading) return
      setLoading(true)
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.data)
      .then(res => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
    }
    if(!loading) fetchProduct(id)
    return () => ref.current = false
  },[id])
  return {data,loading,error}
}

export default useGetProduct