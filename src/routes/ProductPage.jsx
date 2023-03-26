import { useSelector } from "react-redux"
import { useLoaderData } from "react-router"
import { useDispatch } from "react-redux"
import { add, increment } from "../state/cartSlice"
// We can store all the product data in state. However, we will have to handle price change on server side in this case.
// This is a space and request tradeoff. HAve to be decided for each case.



export const ProductPage = () => {
    const { product } = useLoaderData()
    const {products:productInCart} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const payload = {id : product.id, data: product}
    return (
        <div className="min-h-screen">
            <div className="grid lg:p-8 my-4 lg:my-8 justify-center justify-items-center lg:grid-cols-5">
                <img 
                src={product.image} 
                alt={`Image of ${product.title}`} 
                className="block rounded-lg border-2 grow-0 shrink-0 lg:justify-self-end border-indigo-400 w-48 h-48 lg:w-96 lg:h-96 lg:col-span-2 object-contain p-4">
                </img>
                <div className="lg:col-start-3 p-4 lg:p-8 lg:col-span-2 flex flex-col gap-4 lg:gap-6 w-full">
                    <h2 className="text-indigo-400 text-2xl font-bold">{product.title}</h2>
                    <p className="text-xl bg-gray-200 rounded-xl text-center lg:text-start p-2">&#36; {product.price}</p>
                    <p className="text-gray-700">{product.description}</p>
                    {
                    productInCart[product.id] != undefined ?
                    (
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-8 items-center justify-center lg:justify-start">
                    <button onClick={() => dispatch(increment(payload))} className="w-40 h-10 hover:text-white hover:bg-indigo-500 active:bg-indigo-500 bg-indigo-300 rounded-md">Add one more</button>
                     <p className="text-indigo-400 text-center">{productInCart[product.id].count} in Cart</p>
                     </div>
                    )                   
                    : <button onClick={() => dispatch(add(payload))} className="w-40 h-10 mx-auto lg:mx-0 hover:text-white hover:bg-indigo-500 active:bg-indigo-500 bg-indigo-300 rounded-md">Add to cart</button>
                    }
                </div>
            </div>

        </div>
    )
}
