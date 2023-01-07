import React from "react";
import { Link } from "react-router-dom";
import { useTrendingItems } from "@algolia/recommend-react";
import recommend from "@algolia/recommend";
import aa from "search-insights";
import RecommendationCard from "./RecommendationCard";
import "./Recommendations.css";

function Recommendations() {
  const recommendClient = recommend(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_API_KEY
  );
  const indexName = "products";

  const { recommendations } = useTrendingItems({
    recommendClient,
    indexName,
  });

  return (
    <div className="trending__container">
      <h2>TRENDING ITEMS</h2>
      <div className="trending__grid">
        {recommendations.map((product) => (
          <Link
            to={`/products/${product.id}`}
            state={{ selectedProduct: product }}
            onClick={() => {
              aa("convertedObjectIDs", {
                userToken: "user-1",
                index: "products",
                eventName: "Product conversion",
                objectIDs: [product.id],
              });
            }}
          >
            <RecommendationCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
