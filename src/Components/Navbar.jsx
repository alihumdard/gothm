import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import symbolImage from "../assets/images/gothm_symbol.png";
import textImage from "../assets/images/gothm_text.png";
import taglineImage from "../assets/images/gothm_tagline.png";

export default function SourceGuyNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="relative z-50 w-full bg-[#030303] py-6 font-orbitron text-[#a0a0a0]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-0">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            {/* Symbol */}
            <img
              src={symbolImage}
              alt="GOTHM Symbol"
              className="h-[40px] w-auto object-contain"
            />
            {/* Text & Tagline */}
            <div className="flex flex-col justify-center gap-1 mt-1">
              <img
                src={textImage}
                alt="GOTHM Text"
                className="h-[18px] w-auto object-contain"
              />
              <img
                src={taglineImage}
                alt="GOTHM Tagline"
                className="h-[8px] w-[162px] object-contain object-left"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-5 text-[12px] font-sans font-light tracking-[0.1em] lg:flex text-[#a39171]">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="transition-colors hover:text-white cursor-pointer">
              HOME
            </a>
            <a href="#what-is-gothm" onClick={(e) => handleScrollTo(e, 'what-is-gothm')} className="transition-colors hover:text-white cursor-pointer">
              WHAT IS GOTHM
            </a>
            <a href="#episodes" onClick={(e) => handleScrollTo(e, 'episodes')} className="transition-colors hover:text-white cursor-pointer">
              EPISODES
            </a>
            <a href="#blog" onClick={(e) => handleScrollTo(e, 'blog')} className="transition-colors hover:text-white cursor-pointer">
              BLOG
            </a>
            <a href="#about-the-host" onClick={(e) => handleScrollTo(e, 'about-the-host')} className="transition-colors hover:text-white cursor-pointer">
              ABOUT THE HOST
            </a>
            <a href="#ghost-mail" onClick={(e) => handleScrollTo(e, 'ghost-mail')} className="transition-colors hover:text-white cursor-pointer">
              GHOST MAIL
            </a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="transition-colors hover:text-white cursor-pointer">
              CONTACT
            </a>
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
              <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition-colors cursor-pointer">
                HOME
              </a>
              <a href="#what-is-gothm" onClick={(e) => handleScrollTo(e, 'what-is-gothm')} className="hover:text-white transition-colors cursor-pointer">
                WHAT IS GOTHM
              </a>
              <a href="#episodes" onClick={(e) => handleScrollTo(e, 'episodes')} className="hover:text-white transition-colors cursor-pointer">
                EPISODES
              </a>
              <a href="#blog" onClick={(e) => handleScrollTo(e, 'blog')} className="hover:text-white transition-colors cursor-pointer">
                BLOG
              </a>
              <a href="#about-the-host" onClick={(e) => handleScrollTo(e, 'about-the-host')} className="hover:text-white transition-colors cursor-pointer">
                ABOUT THE HOST
              </a>
              <a href="#ghost-mail" onClick={(e) => handleScrollTo(e, 'ghost-mail')} className="hover:text-white transition-colors cursor-pointer">
                GHOST MAIL
              </a>
              <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
