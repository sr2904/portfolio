import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error("3D scene crashed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className='w-full min-h-[200px] flex items-center justify-center text-white p-4'>
          <p>3D scene failed to load. Please refresh.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

