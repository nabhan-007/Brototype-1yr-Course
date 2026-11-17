import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "./features/product/productSlice";
import Test from "./Test";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { loading, productData, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <h1>Product</h1>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>Could not load the product: {error}</p>}
      {!loading && !error && (
        <div>
          <h2>{productData.title}</h2>
          <p>{productData.description}</p>
          <p>
            Price: {productData.price} {productData.currency}
          </p>
          <p>Category: {productData.category}</p>
          <p>
            Rating: {productData.rating} | Stock: {productData.stock}
          </p>
          <p>SKU: {productData.sku}</p>
        </div>
      )}
      <Test />
    </>
  );
}

export default App;
