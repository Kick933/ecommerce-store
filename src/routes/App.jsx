import { Outlet } from "react-router"
import { LayOut } from "../components/LayOut"
import getProduct from "../utils/getProduct"
import getProducts from "../utils/getProducts"

// TODO Add a navbar
function App() {
  document.title = "Home"
  // return <div>Hello World</div>
  return (
    <>
    <LayOut>
      <Outlet />
    </LayOut>
    </>
  )
}


export async function productListLoader(){
  const products = await getProducts()
  return { products }
}
// Loader for individual Product by id
export async function productLoader({params}){
  const product = await getProduct(params.id)
  return { product }
}

export default App
