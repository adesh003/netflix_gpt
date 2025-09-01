import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Global error handler for uncaught errors
const handleGlobalError = (error, errorInfo) => {
  console.error("Global Error:", error, errorInfo);
  // Here you can integrate with an error tracking service like Sentry
  // Sentry.captureException(error, { extra: errorInfo });
};

// Set up global error handlers
if (process.env.NODE_ENV === 'production') {
  window.onerror = (message, source, lineno, colno, error) => {
    handleGlobalError(error, { message, source, lineno, colno });
    return true; // Prevents the default browser error handler
  };

  window.onunhandledrejection = (event) => {
    handleGlobalError(event.reason, 'Unhandled Promise Rejection');
    event.preventDefault();
  };
}

function App() {
  return (
    <ErrorBoundary>
      <Provider store={appStore}>
        <div className="app">
          <Body />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
