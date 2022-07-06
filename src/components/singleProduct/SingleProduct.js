import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { MdStar } from "react-icons/md";
import { fetchProduct } from "../../actions/singleProductAction";
import "./single-product.css";
import { addToCart } from "../../actions/cartActions";

const SingleProduct = ({ product, fetchProduct,addToCart }) => {
  const [pinCode, setPinCode] = useState("");
  const { productId } = useParams();
  useEffect(() => {
    fetchProduct(productId);
  }, []);
  return (
    <div className="wrapper">
      {product.product && (
        <div className="product-details-container">
          <div className="product-image">
            <img src={product.product.image} />
            <button className="add-btn" onClick={()=>addToCart(product.product)}>
              Add To Cart
            </button>
          </div>
          <div className="product-details">
            <h1 className="product-title">{product.product.title}</h1>
            <h2 className="product-category">{product.product.category}</h2>
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
              <input
                className="pin-input"
                type="number"
                value={pinCode}
                onChange={(e) =>
                  e.target.value.length > 6
                    ? setPinCode((prev) => prev)
                    : setPinCode(e.target.value)
                }
                onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
              />
            </div>
            <div className="flex">
              <div className="higlights">
                <div>Highlights</div>
                <ul className="flex-dir-col">
                  <li>Quantity: 300 ml</li>
                  <li>Fragrance: Body Spray</li>
                  <li>For Men</li>
                </ul>
              </div>
              <div className="services">
                <div>Services</div>
                <ul className="flex-dir-col">
                  <li>No Returns Applicable</li>
                  <li>Cash on Delivery available</li>
                </ul>
              </div>
            </div>
            <div className="seller">
              <div>Seller</div>
              <ul className="flex-dir-col">
                <li>No Returns Applicable</li>
              </ul>
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
    addToCart : (product) => dispatch(addToCart(product))
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(SingleProduct);
