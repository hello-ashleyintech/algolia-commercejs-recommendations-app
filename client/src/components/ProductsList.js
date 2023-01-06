import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className="products" id="products">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} state={{ selectedProduct: product }}>
          <ProductItem key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
