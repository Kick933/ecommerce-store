import { useState } from "react"
import { useSelector } from "react-redux"
import { CartProductView } from "../components/CartProductView"

// TODO Show total cost and order page
// IMP Stored product in state so as to later implement stale while revalidate method to show latest data.
// Not implemented due to time contraints.

export const Cart = () => {
  const {products} = useSelector(state => state.cart)
  const total = Object.entries(products).reduce(function(acc,[id,product]){
    return acc += product.price * product.count
  },0)
  return (
    <>
    <div className="flex flex-row flex-wrap lg:flex-col gap-4 justify-center items-center my-4 lg:my-8">
      {Object.entries(products).length == 0 ?
      <p>Nothing here.Check out our store.</p> :
      Object.entries(products).map(([id,product]) => <CartProductView id={id} count={product.count} key={id} />)}
    </div>
    {
    total > 0 ?
    <>
    <div className="bg-gray-300 justify-between items-center flex h-10 max-w-4xl w-4/5 px-8 rounded-xl mx-auto my-4 lg:my-8">
      <p>Total</p>
      <p>&#36; {Math.round((total + Number.EPSILON) * 100) / 100 // Used for rounding the numbers. Price is in floats.
}</p>
    </div>
    <button className="bg-yellow-600 text-white w-48 h-12 mx-auto block my-4 lg:my-8 rounded-xl hover:bg-yellow-500 active:bg-yellow-700">Check Out</button>
    </>
    : null
    }
    </>
  )
}
