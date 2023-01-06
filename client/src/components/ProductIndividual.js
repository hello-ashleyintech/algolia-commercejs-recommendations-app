import React from 'react';
import "./ProductIndividual.css";
import { useLocation } from "react-router-dom";

function ProductIndividual() {
  const location = useLocation();

  const selectedProduct = location.state?.selectedProduct;
    return (
      <div className="item__container">
        <img
          className="item__image"
          src={selectedProduct.image?.url}
          alt={selectedProduct.name}
        />
        <div className="item__info">
          <h3 className="item__name">{selectedProduct.name.toUpperCase()}</h3>
          <div className="item__details">
            <p className="item__price">
              {selectedProduct.price.formatted_with_symbol}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default ProductIndividual;
