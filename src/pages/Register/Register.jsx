import React, { useState } from "react";
import { Link } from "react-router";
import logo from "/logo.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors("");

    // Password validation
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    if (!uppercaseRegex.test(password)) {
      setErrors("Password must contain at least one uppercase letter.");
      return;
    }
    if (!lowercaseRegex.test(password)) {
      setErrors("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < minLength) {
      setErrors("Password must be at least 6 characters long.");
      return;
    }

    // If validation passes, proceed with registration
    console.log("Form submitted", { name, email, photo, password });
    alert("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-200/40 backdrop-blur-xl shadow-xl rounded-xl p-8 w-full max-w-md border border-base-300">
        {/* Logo + Title */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-primary">Moviescope</span>
            <img src={logo} alt="" className="w-10" />
            <span className="text-3xl font-bold">Pro</span>
          </Link>
          <h2 className="text-2xl font-semibold mt-3">Register</h2>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-base">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-base">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text text-base">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full rounded-lg"
              required
            />

            {/* Password requirements */}
            <ul className="mt-2 space-y-1 text-sm text-base-content/70">
              <li>• Must contain at least one uppercase letter</li>
              <li>• Must contain at least one lowercase letter</li>
              <li>• Must be at least 6 characters long</li>
            </ul>

            {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-primary w-full rounded-full text-lg mt-2"
          >
            Register
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
          Register with Google
        </button>

        {/* Login link */}
        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
