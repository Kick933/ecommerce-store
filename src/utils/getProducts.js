import axios from "axios";
// Hard coding URL instead of usin global const or Environment variables.
// MAy consider that if time is available after finishing the app.
export default function getProducts(){
    return axios.get('https://fakestoreapi.com/products')
    .then((res) => res.data)
}