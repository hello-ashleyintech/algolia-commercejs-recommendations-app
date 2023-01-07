import React from "react";
import PropTypes from "prop-types";
import "./RecommendationCard.css";

function RecommendationCard({ product }) {
  return (
    <>
      <div className="rec__card">
        <img
          className="rec__image"
          src={product.image?.url}
          alt={product.name}
        />
        <div className="rec__info">
          <h4 className="rec__name">{product.name.toUpperCase()}</h4>
        </div>
      </div>
    </>
  );
}

RecommendationCard.propTypes = {
  product: PropTypes.object,
};

export default RecommendationCard;
