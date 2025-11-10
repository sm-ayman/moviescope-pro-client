import React from "react";
import { Link } from "react-router";
import logo from "/logo.png";
const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100 dark:bg-gray-900 z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Rotating Logo */}
        <img
          src={logo}
          alt="Moviescope Pro Logo"
          className="w-16 h-16 animate-spin-slow"
        />

        {/* App Name */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Moviescope</span>
          <span className="text-2xl font-semibold text-primary">Pro</span>
        </Link>

        {/* Optional Loading Text */}
        <p className="text-gray-500 dark:text-gray-300 mt-2">Loading...</p>
      </div>

      {/* Extra: Tailwind animate-spin-slow */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
