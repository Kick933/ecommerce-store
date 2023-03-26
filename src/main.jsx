import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {productListLoader, productLoader} from './routes/App'
import './index.css'
import { store } from './state/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ProductPage } from './routes/ProductPage'
import { ProductListPage } from './routes/ProductListPage'
import { Cart } from './routes/Cart'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        element: <ProductListPage />,
        loader: productListLoader,
        index: true
      },
      {
        path: "/:id",
        element: <ProductPage />,
        loader: productLoader
      },
      {
        path : '/cart',
        element: <Cart />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
