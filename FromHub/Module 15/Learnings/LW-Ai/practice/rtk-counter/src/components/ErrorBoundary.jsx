import { Component, useState } from "react";

export const Bomb = () => {
  const [boom, setBomb] = useState(false);
  if (boom) throw new Error("BOOM!!");
  return <button onClick={() => setBomb(!boom)}>Boom</button>;
};

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) return <h2>Something went wrong!!</h2>;
    return this.props.children;
  }
}

export default ErrorBoundary;
