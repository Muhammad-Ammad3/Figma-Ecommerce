import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Product from "./components/Product";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/product" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/product:id" element={<ProductCard />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App