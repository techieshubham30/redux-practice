import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/product";
import ProductCard from "./productCard/ProductCard";
import "./productCard/product-card.css";

const ProductContainer = ({ productData, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
  return ( 
  <>
    {(productData.loading===true)?<div>Loading ...</div>:
    <div className="product-content">
      <div className="product-container">
        {
          productData?.products.map((product) => {
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
    </div>}
  </>
    
    
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
