import React, { useState } from "react";
import { Link } from "react-router";
import logo from "/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-base-200 text-base-content py-12 transition-all">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Moviescope</span>
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-2xl font-semibold">Pro</span>
          </Link>

          <p className="text-sm opacity-80">
            Your ultimate platform for movies. Discover, play, and enjoy the
            latest films.
          </p>

          <div className="flex gap-4 mt-2 text-xl">
            <a
              href="https://www.facebook.com/smayman98/"
              className="hover:text-primary transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/sm__ayman"
              className="hover:text-primary transition-colors"
            >
              <SiX />
            </a>
            <a
              href="https://www.instagram.com/sm_ayman"
              className="hover:text-primary transition-colors"
            >
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/movies" className="hover:text-primary transition-colors">
            Movies
          </Link>
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Policies</h3>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/refund" className="hover:text-primary transition-colors">
            Refund Policy
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <p className="text-sm opacity-80">
            Get updates on new movies and top picks.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full input input-bordered"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-base-300 pt-4 text-center text-sm opacity-80">
        &copy; {new Date().getFullYear()} Moviescope Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
