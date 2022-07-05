import { deleteProduct } from "../../actions/product";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";

const ProductCard = (props) => {
  const { deleteProduct, title, image, description, id } = props;

  return (
    <div>
      <div className="card-img">
        <img src={image} />
      </div>

      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <p className="card-discription">{description}</p>
      </div>

      <div className="card-action">
        <Link to={`/products/${id}`}>
          <button className="primary-btn view">
            <BsEyeFill />
            View
          </button>
        </Link>
        <button className="primary-btn del" onClick={() => deleteProduct(id)}>
          <MdDelete />
          Delete
        </button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     productData: state.productReducer,
//   };
// };

const mapDispatchToProp = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(deleteProduct(id)),
  };
};

export default connect(null, mapDispatchToProp)(ProductCard);
