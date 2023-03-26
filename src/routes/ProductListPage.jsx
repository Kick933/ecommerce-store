import { useState } from "react"
import { useLoaderData } from "react-router"
import { Product } from "../components/Product"


export const ProductListPage = () => {
    const { products } = useLoaderData()
    const [searchTerm, setSearchTerm] = useState("")
    document.title = "Product List Page"
    const res = products.filter((product => product.title.includes(searchTerm)))
    return (
        <div className="flex flex-col gap-4 py-8 lg:gap-8">
        <div className="flex justify-center gap-2 flex-col lg:flex-row items-center">
            <input type="text" placeholder="Search" className="border-2 p-2 h-10 w-48 border-gray-300 rounded-xl" name='searchTerm' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={() => setSearchTerm('')} className=" w-32 h-8 rounded-xl bg-indigo-300 hover:bg-indigo-400 active:bg-indigo-500">Clear</button>
        </div>
        <div className="flex gap-4 flex-wrap justify-center content-center lg:m-8 m-4">
            {res.map(item => <Product item={item} key={item.id} />)}
        </div>
        </div>
    )
}

