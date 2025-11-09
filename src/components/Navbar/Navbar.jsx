import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-base ${
              isActive ? "border-b-2 border-primary font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          end
          className={({ isActive }) =>
            `text-base ${
              isActive ? "border-b-2 border-primary font-semibold" : ""
            }`
          }
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies/my-collection"
          className={({ isActive }) =>
            `text-base ${
              isActive ? "border-b-2 border-primary font-semibold" : ""
            }`
          }
        >
          My Collection
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* logo */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold tracking-wide  flex">
          <span className="text-primary">Moviescope</span>
          <img src={logo} alt="" className="w-10" />
          <span>Pro</span>
        </Link>
      </div>

      {/* mobile-dropdown */}
      <div className="dropdown navbar-start lg:hidden ml-2">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-[999] p-3 shadow bg-base-100 rounded-box w-52"
        >
          {navItems}
        </ul>
      </div>

      {/* desktop-menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">{navItems}</ul>
      </div>

      {/* right-side-icons */}
      <div className="navbar-end flex items-center gap-4">
        {/* theme-toggle */}
        <label className="relative inline-block w-10 h-5 cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
            className="peer absolute w-0 h-0 opacity-0"
          />

          {/* track */}
          <span
            className="
        absolute inset-0 bg-base-300 border border-gray-400
        rounded-full transition-all duration-300
        peer-checked:bg-primary peer-checked:border-primary
      "
          ></span>

          {/* knob */}
          <span
            className="
        absolute h-4 w-4 rounded-full bg-gray-400 shadow
        top-[0.15rem] left-[0.15rem]
        transition-all duration-300
        peer-checked:translate-x-[1.25rem] peer-checked:bg-white
      "
          ></span>
        </label>

        {/* auth-buttons */}
        <Link to="/login" className="btn btn-outline btn-sm rounded-full px-4">
          Login
        </Link>

        <Link
          to="/register"
          className="btn btn-primary btn-sm rounded-full px-4"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
