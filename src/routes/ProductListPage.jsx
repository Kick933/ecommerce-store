import { useLoaderData } from "react-router"
import { Product } from "../components/Product"

// TODO Implement search functionality. ## REQUIRED

export const ProductListPage = () => {
    const { products } = useLoaderData()
    document.title = "Product List Page"
    return (
        <div className="flex gap-4 flex-wrap justify-center content-center lg:m-8 m-4">
            {products.map(item => <Product item={item} key={item.id} />)}
        </div>
    )
}

