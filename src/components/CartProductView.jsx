
import useGetProduct from "../utils/useGetProduct"
import { useDispatch } from "react-redux"
import { increment, decrement } from "../state/cartSlice"
import { Link } from "react-router-dom"

// We made a memory tradeoff by already storing the product with us.
// We also check for updated price as we load cart.

export const CartProductView = ({id,count}) => {
  const {data, error } = useGetProduct(id)
  const dispatch = useDispatch()
  if(!data && !error) return <div className="mx-auto my-56"> Loading... </div>
  if(error) return <div className="mx-auto my-56">Something went wrong. </div>
  const payload = {id : data.id, data}
  return (
    <div className="flex flex-col lg:flex-row lg:h-48 p-4 w-56 lg:w-full justify-center items-center lg:items-start lg:justify-start max-w-2xl m-2 rounded-xl gap-4 shadow-xl border-2 border-gray-300">
      <img className="block w-32 h-32 object-contain" src={data?.image} alt={data?.title}></img>
      <div className="flex flex-col gap-2 lg:gap-4 lg:align-self-start items-center lg:items-start">
        <Link to={`/${data.id}`} className="text-md font-bold lg:text-xl line-clamp-1">{data?.title}</Link>
        <p className="text-sm line-clamp-1"> &#36; {data.price}</p>
        <div className="flex flex-row justify-center">
          <button onClick={() => dispatch(decrement(payload))} className="w-12 h-12 border border-gray-400 bg-gray-200 hover:bg-gray-400 active:bg-gray-500">-</button>
          <p className="w-12 h-12 border flex justify-center items-center text-center border-gray-400 bg-gray-200">{count}</p>
          <button onClick={() => dispatch(increment(payload))} className="w-12 h-12 border border-gray-400 bg-gray-200 hover:bg-gray-400 active:bg-gray-500">+</button>
      </div>
      </div>
    </div>
  )
}
