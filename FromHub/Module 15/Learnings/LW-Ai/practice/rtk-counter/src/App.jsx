import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { fetchProducts } from "./features/product/productSlice";
import { Bomb } from "./components/ErrorBoundary";
import ErrorBoundary from "./components/ErrorBoundary";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Count: {count}</h2>
      <br />
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </>
  );
};

const Product = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>
        {data?.price} {data?.currency}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Counter />
      <hr />
      <Product />
      <hr />
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    </>
  );
};

export default App;
