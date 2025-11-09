import React from "react";
import { Link } from "react-router";
import logo from "/logo.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-200/40 backdrop-blur-xl shadow-xl rounded-xl p-8 w-full max-w-md border border-base-300">
        
        {/* Title */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-primary">Moviescope</span>
            <img src={logo} alt="" className="w-10" />
            <span className="text-3xl font-bold">Pro</span>
          </Link>
          <h2 className="text-2xl font-semibold mt-3">Login</h2>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-base">Email</span>
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
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-lg"
            />
            {/* Forgot password (visual only) */}
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
          <span className="px-3 text-sm text-base-content/70">OR</span>
          <div className="flex-1 h-px bg-base-300"></div>
        </div>

        {/* Google Login */}
        <button className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full flex items-center gap-2 hover:bg-gray-100">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary font-medium hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
