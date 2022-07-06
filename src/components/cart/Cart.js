import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cartActions";
import "./cart.css"
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = ({cart,removeFromCart}) => {
  let totalPrice = 0
  cart?.cartProducts?.map(({price}) => totalPrice+= parseInt(price))
  const totalItems = cart?.cartProducts?.length
  console.log(totalItems)
  return (
    <div className="main-cart-content">
      <div className="cart-container">
      <div className="cart-details">
        <div className="cart-details-header">Cart</div>
        {totalItems ===0 && <div className="cart-no-items">Your cart is empty.Add items to it now. <span><Link to='/'>Shop now.</Link></span> </div>}
        {cart?.cartProducts?.map(product=> {
            return (
              <div className="product-content-container" key ={product.id}>
                <div className="cart-product-image">
                  <img src={product.image} />
                </div>
                <div className="cart-product-content">
                  <div className="product-content-title cart-flex">
                    <h1 className="cart-product-title">{product.title}...</h1>
                    <h5 className="cart-product-price">₹{product.price}</h5>
                  </div>
                  <div className="cart-flex">
                    <h6 className="cart-product-category">₹{product.price}</h6>
                    <h6 className="cart-product-stock">In Stock</h6>
                  </div>
                  
                  <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <button className="cart-primary-btn" onClick={()=>removeFromCart(product.id)}>
                      <MdDelete />
                      Delete
                    </button>
                  </div>
                  
                </div>
                
              </div> 
            )
        })}
      </div>
      {(totalItems!==0) && <div className="cart-checkout">
        <div className="cart-checkout-header">Checkout</div>
        <div className="cart-checkout-detail" >
          <div className="cart-price">
            <div className="cart-price-info">Price ({totalItems} Items.)</div>
            <div className="cart-price-val">₹ {totalPrice}</div>
          </div>
          <div className="cart-price">
            <div className="cart-price-info">Discount </div>
            <div className="cart-price-val">₹ 0</div>
          </div>
          <div className="cart-price" >
            <div className="cart-price-info">Delivery Charge</div>
            <div className="cart-price-val" style={{color:"#3D9140"}}>FREE</div>
          </div>
          <div className="cart-price total">
            <div className="cart-price-info">Total Price</div>
            <div className="cart-price-val">₹ {totalPrice}</div>
          </div>
        </div>
      </div>}
      
        
    </div>
    </div>
    
  )
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart : (id) => dispatch(removeFromCart(id)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
