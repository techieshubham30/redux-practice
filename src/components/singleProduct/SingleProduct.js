import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { MdStar } from "react-icons/md";
import { fetchProduct } from "../../actions/singleProductAction";
import "./single-product.css";

const SingleProduct = ({ product, fetchProduct }) => {
  const { productId } = useParams();
  useEffect(() => {
    fetchProduct(productId);
  }, []);
  console.log(product);
  return (
    <div className="wrapper">
      {/* {product.product && (
        <div className="horizontal-card ">
          <div className="card-image-container">
            <img src={product.product.image} />
          </div>
          <div className="card-text-container">
            <div className="card-title">
              <h2>{product.product.title}</h2>
            </div>

            <div className="card-description">
              <p>{product.product.description}</p>
            </div>
            <div className="card-price">
              <h2>₹ {product.product.price}</h2>
              <span>{product.product.rating.rate} </span>
            </div>
          </div>
        </div>
      )} */}

      {product.product && (
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.product.image} />
          </div>
          <div className="product-details">
            <h1 className="product-category">{product.product.category}</h1>
            <span className="product-rating">
              {product.product.rating.rate}
              <MdStar />
            </span>
            <p className="product-description">{product.product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.singleProductReducer,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(SingleProduct);
