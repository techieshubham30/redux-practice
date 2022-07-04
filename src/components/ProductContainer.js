import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/product";
import ProductCard from "./productCard/ProductCard";
import "./productCard/product-card.css";

const ProductContainer = ({ productData, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
  return productData.loading ? (
    <h1>Loding...</h1>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      <h2>Product List</h2>{" "}
      <div className="product-container">
        {productData &&
          productData.products &&
          productData.products.map((product) => {
            return (
              <div key={product.id} className="vertical-card">
                <ProductCard
                  title={product.title}
                  image={product.image}
                  description={product.description}
                  id={product.id}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productData: state.productReducer,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(ProductContainer);
