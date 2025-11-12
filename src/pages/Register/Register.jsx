import React, { useState, useEffect, use } from "react";
import { Link, useNavigate } from "react-router";
import logo from "/logo.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const { googleSignIn, createUser, setUser } = use(AuthContext);

  useEffect(() => {
    document.title = "Register | Moviescope Pro";
  }, []);

  // Password validation
  const validatePassword = (password) => {
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);
    const length = password.length >= 6;
    return upper && lower && length;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    setErrors("");

    // Password validation
    if (!validatePassword(password)) {
      setErrors(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter."
      );
      return;
    }

    try {
      // 1. Create user in Firebase
      const res = await createUser(email, password);
      const newUser = res.user;

      const userData = {
        uid: newUser.uid,
        email: newUser.email,
        displayName: name,
        photoURL:
          photoURL || "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      };

      // Save user in context
      setUser(userData);

      // Save user in your backend
      fetch("https://moviescope-pro-server.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to save user in DB");
          }
          return res.json();
        })
        .then((data) => {
          console.log("User saved in DB:", data);
        })
        .catch((error) => {
          console.error("Error saving user:", error);
        });

      // 4. Navigate to home
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      setErrors(err.message);
    }
  };

  // Google login
  const handleGoogleRegister = () => {
    googleSignIn()
      .then(async (res) => {
        const newUser = res.user;
        console.log("Google login success:", newUser);

        const userData = {
          uid: newUser.uid,
          email: newUser.email,
          displayName: newUser.displayName || "No Name",
          photoURL:
            newUser.photoURL ||
            "https://cdn-icons-png.flaticon.com/512/219/219983.png",
        };

        // Send user to backend
        try {
          await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });
        } catch (err) {
          console.error("Failed to save user to backend:", err);
        }

        setUser(userData);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.message);
      });
  };

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
          <h2 className="text-2xl font-semibold mt-3">Register</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered w-full rounded-lg"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text text-base-content/70">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              name="photoURL"
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
              placeholder="Create a password"
              name="password"
              className="input input-bordered w-full rounded-lg"
              required
            />
            <ul className="mt-2 space-y-1 text-sm text-base-content/50">
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

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-base-300"></div>
            <span className="px-3 text-sm text-base-content/50">OR</span>
            <div className="flex-1 h-px bg-base-300"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="btn bg-white text-black border-[#e5e5e5] w-full rounded-full flex items-center justify-center gap-2 hover:bg-gray-100"
          >
            <FcGoogle size={22} /> Continue with Google
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm text-base-content/70">
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
