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
      <nav className="relative z-50 w-full font-orbitron text-[#a0a0a0]">
        
        {/* === DESKTOP NAVBAR === */}
        {/* Fixed Navbar */}
        <div className="hidden lg:block fixed top-0 left-0 right-0 z-50 w-full bg-[#030303] py-6 shadow-md shadow-black/20">
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
            <div className="items-center gap-5 text-[12px] font-sans font-light tracking-[0.1em] flex text-[#a39171]">
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
          </div>
        </div>
        {/* Spacer to prevent content jumping under the fixed desktop navbar */}
        <div className="hidden lg:block h-[88px] w-full"></div>

        {/* === MOBILE NAVBAR === */}
        <div className="flex lg:hidden flex-col w-full bg-[#000000] pb-2">
          {/* Fixed Top Bar with Hamburger */}
          <div className="fixed top-0 left-0 right-0 z-[60] flex w-full justify-end bg-[#000000]/95 backdrop-blur-sm px-6 py-4 shadow-md shadow-black/20">
            <button
              className="text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FaBars size={24} />
            </button>
          </div>
          
          {/* Spacer to prevent the logo from hiding under the fixed top bar */}
          <div className="h-[56px] w-full"></div>
          
          {/* Mobile Centered Logo (Scrolls Away) */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-2 cursor-pointer hover:opacity-80 transition-opacity px-6">
            <img src={symbolImage} alt="GOTHM Symbol" className="h-[48px] w-auto object-contain" />
            <div className="flex flex-col justify-center gap-1 mt-1">
              <img src={textImage} alt="GOTHM Text" className="h-[22px] w-auto object-contain" />
              <img src={taglineImage} alt="GOTHM Tagline" className="h-[10px] w-[180px] object-contain object-left" />
            </div>
          </div>

          {/* Mobile Centered Links (2 Rows, Scrolls Away) */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0 text-[13px] font-sans font-light tracking-[0.05em] text-[#a39171] px-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition-colors cursor-pointer">HOME</a>
            <a href="#what-is-gothm" onClick={(e) => handleScrollTo(e, 'what-is-gothm')} className="hover:text-white transition-colors cursor-pointer">WHAT IS GOTHM</a>
            <a href="#episodes" onClick={(e) => handleScrollTo(e, 'episodes')} className="hover:text-white transition-colors cursor-pointer">EPISODES</a>
            <a href="#blog" onClick={(e) => handleScrollTo(e, 'blog')} className="hover:text-white transition-colors cursor-pointer">BLOG</a>
            
            {/* Force Line Break */}
            <div className="w-full h-0"></div>
            
            <a href="#about-the-host" onClick={(e) => handleScrollTo(e, 'about-the-host')} className="hover:text-white transition-colors cursor-pointer">ABOUT THE HOST</a>
            <a href="#ghost-mail" onClick={(e) => handleScrollTo(e, 'ghost-mail')} className="hover:text-white transition-colors cursor-pointer">GHOST MAIL</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[45%] max-w-[220px] bg-[#000000] flex flex-col pt-16 pl-6 pr-4 overflow-y-auto shadow-2xl"
            >
              <div className="flex flex-col items-start w-full gap-6 font-sans text-[13px] font-bold tracking-[0.05em] text-white/50">
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
                <a href="#what-is-gothm" onClick={(e) => handleScrollTo(e, 'what-is-gothm')} className="hover:text-white transition-colors cursor-pointer">
                  What is Gothm
                </a>
                <a href="#episodes" onClick={(e) => handleScrollTo(e, 'episodes')} className="hover:text-white transition-colors cursor-pointer">
                  Episodes
                </a>
                <a href="#blog" onClick={(e) => handleScrollTo(e, 'blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </a>
                <a href="#about-the-host" onClick={(e) => handleScrollTo(e, 'about-the-host')} className="hover:text-white transition-colors cursor-pointer">
                  About the Host
                </a>
                <a href="#ghost-mail" onClick={(e) => handleScrollTo(e, 'ghost-mail')} className="hover:text-white transition-colors cursor-pointer">
                  Ghost Mail
                </a>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
