import React from "react";

// Universal error boundary for React apps
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    // Optionally: log to external service
    // In production, you can call error reporting APIs here
  }
  render() {
    if (this.state.hasError) {
      return <div className="card error-boundary">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
