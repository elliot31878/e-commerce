import React from "react";
import PropTypes from "prop-types";

export const ProductCard = React.memo(({ product }) => {
  const isInStock = product.rating.count > 0;
  const isPopular = product.rating.rate >= 4;

  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="position-relative">
        <img
          src={product.image}
          className="card-img-top p-3 bg-light"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />

        {isPopular && (
          <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 m-2 small rounded">
            Popular
          </span>
        )}
        {!isInStock && (
          <span className="position-absolute top-0 end-0 bg-secondary text-white px-2 py-1 m-2 small rounded">
            Sold Out
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column">
        <small className="text-muted text-uppercase">{product.category}</small>

        <h3 className="card-title h5 my-2" style={{ minHeight: "48px" }}>
          {product.title.length > 50
            ? `${product.title.substring(0, 50)}...`
            : product.title}
        </h3>

        <div className="mb-2">
          <span className="text-warning">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
          </span>
          <small className="text-muted ms-2">({product.rating.count})</small>
        </div>

        <div className="mt-auto">
          <p className="card-text h5 fw-bold text-primary mb-3">
            ${product.price.toFixed(2)}
          </p>
        </div>

        <button
          className={`btn btn-${isInStock ? "primary" : "secondary"} w-100`}
          disabled={!isInStock}
        >
          {isInStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </article>
  );
});

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
