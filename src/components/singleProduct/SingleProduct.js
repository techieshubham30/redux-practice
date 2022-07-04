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
      {product.product && (
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.product.image} />
          </div>
          <div className="product-details">
            <h1 className="product-category">{product.product.category}</h1>
            <div className="rating-details">
              <div className="product-rating">
                {product.product.rating.rate}
                <MdStar />
              </div>
              <p>{product.product.rating.count} Ratings & 2,254 Reviews</p>
            </div>
            <p className="product-description">{product.product.description}</p>
            <h1 className="product-price">₹{product.product.price}</h1>
            <div className="delivery">
              <span>Delivery</span>
              <input className="pin-input" />
            </div>
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
