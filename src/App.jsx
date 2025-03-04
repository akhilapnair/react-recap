import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunctionalComponent from "./components/functional-based-component";
import ProductList from "./components/products";
import ClassBasedComponent from "./components/class-based-component";
import Users from "./components/users";
import ContextTextComponent from "./components/context-concept/text";
import ContextButtonComponent from "./components/context-concept/button";
import CounterButton from "./components/counter-example/counter-button";
import CounterValue from "./components/counter-example/counter-value";
import Navbar from "./components/nav-bar/navbar";
import { Routes, Route } from "react-router-dom";
import GlobalState from "./context";
import { ShoppingCartContext } from "./context/shopping-context";
import ProductDetailsPage from "./components/shopping-cart/pages/product-details";
import ProductListPage from "./components/shopping-cart/pages/product-list";
import CartListPage from "./components/shopping-cart/pages/cart-list";
const productData = ["Product1", "Product2", "Product3", "Product4"];

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <h4>React concepts 2024</h4>
      <div>
        <Routes>
          <Route path='/' element={<Users/> } />
          <Route path="/redux" element={<CounterButton />} />
          <Route path="/users" element={<Users />} />{" "}
          {/* Define the Users Route */}
          <Route
            path="/about"
            element={
              <ProductList
                listOfProducts={productData}
                name="Akhila"
                city="Trivandrum"
              />
            }
          />
          <Route
            path="/context"
            element={
              <GlobalState>
                <div>
                  <ContextTextComponent />
                  <ContextButtonComponent/>
                </div>
              </GlobalState>
            }
          />
        </Routes>
       
       
        {/* <FunctionalComponent /> */}
        {/* <ClassBasedComponent/> */}
        {/* <ContextTextComponent/>
      <ContextButtonComponent/> */}
      </div>
    </div>
  );
}

export default App;
