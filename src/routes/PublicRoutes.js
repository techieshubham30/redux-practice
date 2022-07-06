import { Routes, Route } from "react-router-dom";
import ProductContainer from "../components/ProductContainer";
import SingleProduct from "../components/singleProduct/SingleProduct";
import { PrivateRoutes } from "./PrivateRoutes";
import Cart from "../components/cart/Cart";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductContainer />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export { PublicRoutes };
