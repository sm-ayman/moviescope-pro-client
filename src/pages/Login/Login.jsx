import React from "react";
import { Link } from "react-router";
import logo from "/logo.png";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-200/40 backdrop-blur-xl shadow-xl rounded-xl p-8 w-full max-w-md border border-base-300">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-primary">Moviescope</span>
            <img src={logo} alt="Logo" className="w-10" />
            <span className="text-3xl font-bold">Pro</span>
          </Link>
          <h2 className="text-2xl font-semibold mt-3">Login</h2>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-lg"
            />
            <p className="text-right mt-1 text-sm text-primary cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full rounded-full text-lg mt-2">
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-base-300"></div>
          <span className="px-3 text-sm text-base-content/50">OR</span>
          <div className="flex-1 h-px bg-base-300"></div>
        </div>

        {/* Google Login */}
        <button className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full flex items-center gap-2 hover:bg-gray-100">
          <FcGoogle size={22} /> Login with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-6 text-sm text-base-content/70">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-medium hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
