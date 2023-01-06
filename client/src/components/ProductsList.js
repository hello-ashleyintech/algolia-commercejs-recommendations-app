import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "./ProductsList.css";
import aa from 'search-insights';
import { connectHitInsights } from 'react-instantsearch-dom';

function Product ({ products }) {
  return (
    <div className="products" id="products">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} state={{ selectedProduct: product }}  onClick={() => {
          aa('clickedObjectIDs', {
            userToken: 'user-1',
            index: 'products',
            eventName: 'Product clicked on',
            objectIDs: [product.id],
          });
        }}>
          <ProductItem key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}

Product.propTypes = {
  products: PropTypes.array,
};

const ProductsList = connectHitInsights(aa)(Product);
export default ProductsList;
