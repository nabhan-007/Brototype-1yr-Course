// Error Boundary — a CLASS component (the one thing functional components can't do).
// If rendering a child throws, React unrolls up to the nearest boundary and calls:
//   getDerivedStateFromError → to set hasError and render a fallback UI
//   componentDidCatch → to log the error to an external service
// Boundaries do NOT catch: event handler errors, async callbacks (thunks), SSR, errors in the boundary itself.
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20 }}>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
