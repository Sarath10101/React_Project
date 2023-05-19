import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/Pages/Products/CategoryProducts";
import Contact from "./app/Pages/Contact";
import Home from "./app/Pages/HomePage/Home";
import PageNotFound from "./app/Pages/PageNotFound";
import AllProducts from "./app/Pages/Products/AllProducts";
import SingleProductDetails from "./app/Pages/Products/ProductDetails/SingleProductDetails";
import Cart from "./app/Pages/Cart";
import Login from "./app/Coponents/Login/Login";
 import Register from "./app/Coponents/Login/Login"

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="contact" element={<Contact />} />
         <Route path="Register" element={<Register />} /> 

         <Route path="Login" element={<Login />} />   


        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Fragment>
  );
  }

export default App;
