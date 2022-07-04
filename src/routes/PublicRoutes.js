import { Routes, Route } from "react-router-dom";
import ProductContainer from "../components/ProductContainer";
import SingleProduct from "../components/singleProduct/SingleProduct";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductContainer />} />
      <Route path="/products/:productId" element={<SingleProduct />} />
    </Routes>
  );
};

export { PublicRoutes };
