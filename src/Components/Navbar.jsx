import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../assets/images/logo.png";

export default function SourceGuyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative z-50 w-full bg-[#030303] py-6 font-orbitron text-[#a0a0a0]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-0">
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src={logoImage}
              alt="GOTHM Logo"
              className="h-[40px] w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-5 text-[12px] font-sans font-light tracking-[0.1em] lg:flex text-[#a39171]">
            <Link to="/" className="transition-colors hover:text-white">
              HOME
            </Link>
            <Link
              to="/what-is-gothm"
              className="transition-colors hover:text-white"
            >
              WHAT IS GOTHM
            </Link>
            <Link to="/episodes" className="transition-colors hover:text-white">
              EPISODES
            </Link>
            <Link to="/blog" className="transition-colors hover:text-white">
              BLOG
            </Link>
            <Link
              to="/about-the-host"
              className="transition-colors hover:text-white"
            >
              ABOUT THE HOST
            </Link>
            <Link
              to="/ghost-mail"
              className="transition-colors hover:text-white"
            >
              GHOST MAIL
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-[#a39171] transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-[#a39171] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes size={32} />
            </button>
            <div className="flex flex-col items-center gap-8 font-cinzel text-[20px] font-medium tracking-[0.2em] text-[#a39171]">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                HOME
              </Link>
              <Link
                to="/what-is-gothm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                WHAT IS GOTHM
              </Link>
              <Link
                to="/episodes"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                EPISODES
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                BLOG
              </Link>
              <Link
                to="/about-the-host"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                ABOUT THE HOST
              </Link>
              <Link
                to="/ghost-mail"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                GHOST MAIL
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
