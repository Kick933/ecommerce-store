import axios from "axios";

export default function getProduct(id){
    return axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.data)
}