import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import logo from "/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthContext";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Moviescope Pro";
  }, []);

  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log("User logged in:", res.user);
        e.target.reset();
        toast.success("✅ Logged in successfully!");
        setTimeout(() => {
          navigate(location.state?.from || "/");
        }, 500);
      })
      .catch((err) => {
        console.log("Login error:", err.message);
        toast.error(`❌ Login failed: ${err.message}`);
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log("Google login response: ", res);

        toast.success("✅ Logged in successfully!");
        setTimeout(() => {
          navigate(location.state?.from || "/");
        }, 500);
      })
      .catch((err) => console.log("Google login error:", err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-base-200/40 backdrop-blur-xl shadow-xl rounded-xl p-8 w-full max-w-md border border-base-300">
        {/* login-error-toast */}
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
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
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Password</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                name="password"
                className="input input-bordered w-full rounded-lg pr-12"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-base-content/60 hover:text-base-content/80"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

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
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full flex items-center gap-2 hover:bg-gray-100"
        >
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
