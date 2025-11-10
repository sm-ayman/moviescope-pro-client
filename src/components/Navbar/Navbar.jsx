import { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo.png";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext); // <-- get user & logout
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    signOutUser().catch((err) => console.log(err));
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
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 relative">
      {/* Logo */}
      <div className="navbar-start flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Moviescope</span>
          <img src={logo} alt="logo" className="w-10" />
          <span>Pro</span>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3">{navItems}</ul>
      </div>

      {/* Right-side icons (desktop) */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        {/* Theme Toggle */}
        <label className="relative inline-block w-10 h-5 cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
            className="peer absolute w-0 h-0 opacity-0"
          />
          <span className="absolute inset-0 bg-base-300 border border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary"></span>
          <span className="absolute h-4 w-4 rounded-full bg-gray-400 shadow top-[0.15rem] left-[0.15rem] transition-all duration-300 peer-checked:translate-x-[1.25rem] peer-checked:bg-white"></span>
        </label>

        {/* Auth Buttons */}
        {user ? (
          <>
            {user.photoURL && (
              <img
                src={
                  user.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                }
                alt="User"
                className="w-8 h-8 rounded-full"
              />
            )}
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-sm rounded-full px-4"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-outline btn-sm rounded-full px-4"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-primary btn-sm rounded-full px-4"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden ml-auto">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-ghost btn-circle"
        >
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
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md border-t border-base-300 flex flex-col p-4 gap-3 lg:hidden z-50">
          <ul className="flex flex-col gap-2">{navItems}</ul>
          {/* Theme toggle */}
          <div className="flex items-center mt-2">
            <label className="relative inline-block w-10 h-5 cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
                className="peer absolute w-0 h-0 opacity-0"
              />
              <span className="absolute inset-0 bg-base-300 border border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary"></span>
              <span className="absolute h-4 w-4 rounded-full bg-gray-400 shadow top-[0.15rem] left-[0.15rem] transition-all duration-300 peer-checked:translate-x-[1.25rem] peer-checked:bg-white"></span>
            </label>
          </div>

          {/* Auth buttons */}
          <div className="flex flex-col gap-2 mt-2">
            {user ? (
              <>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-sm rounded-full px-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline btn-sm rounded-full px-4"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-primary btn-sm rounded-full px-4"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
