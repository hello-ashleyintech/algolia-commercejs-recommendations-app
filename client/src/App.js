import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import Bot from "./components/ChatBot/Bot";
import ProductIndividual from "./components/ProductIndividual";
import aa from "search-insights";
import algoliasearch from "algoliasearch";
import { InstantSearch, Configure } from "react-instantsearch-dom";

function App() {
  const [products, setProducts] = useState([]);

  const searchClient = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_API_KEY
  );

  aa("init", {
    appId: process.env.REACT_APP_ALGOLIA_APP_ID,
    apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  });

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
            exact
            path="/"
            element={
              <InstantSearch searchClient={searchClient} indexName="products">
                <Configure clickAnalytics />
                <ProductsList products={products} />
                <Bot />
              </InstantSearch>
            }
          />
          <Route
            exact
            path="/products/:id"
            element={
              <InstantSearch searchClient={searchClient} indexName="products">
                <Configure clickAnalytics />
                <ProductIndividual />
                <Bot />
              </InstantSearch>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
