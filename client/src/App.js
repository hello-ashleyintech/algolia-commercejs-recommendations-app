import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import Bot from "./components/ChatBot/Bot";
import ProductIndividual from "./components/ProductIndividual";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  const fetchProducts = () => {
    commerce.products
      .list({ limit: 50 })
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <ProductsList products={products} />
                <Bot />
              </>
            }
          />
          <Route
            exact path="/products/:id"
            element={
              <>
                <ProductIndividual />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
