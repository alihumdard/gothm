import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoImage from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] py-16 lg:px-0 px-6 font-sans overflow-hidden">
      <motion.div
        className=" flex w-full max-w-7xl flex-col lg:flex-row justify-between gap-16 pl-0 pr-6 lg:pr-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        {/* ================= LEFT SECTION (Logo & Tagline) ================= */}
        <div className="flex flex-col items-start">
          {/* Logo Section */}
          <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src={logoImage}
              alt="GOTHM Logo"
              className="h-[40px] w-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <div className="mt-1 flex flex-col gap-0">
            <BlockRevealText
              text="THE THINGS YOU WATCH,"
              textClassName="font-michroma text-[10px] lg:text-[12px] ml-14 mt-5 font-bold text-[#a39171] uppercase tracking-[0em]"
              delay={0.8}
              glitchI={true}
            />
            <BlockRevealText
              text="ARE WATCHING YOU."
              textClassName="font-michroma text-[10px] lg:text-[12px] ml-14 font-bold text-[#a39171] uppercase tracking-[0em]"
              delay={1.2}
              glitchI={true}
            />
          </div>
        </div>

        {/* ================= RIGHT SECTION (Links Grid) ================= */}
        <div className="flex flex-col sm:flex-row sm:ml-4 gap-8 lg:gap-24">
          {/* Column 1: EXPLORE */}
          <div className="flex flex-col">
            <BlockRevealText
              text="EXPLORE"
              className="mb-2 block"
              textClassName="font-sans text-[14px] font-light text-[#a39171] tracking-[0.1em] uppercase"
              delay={0.8}
            />
            <ul className="flex flex-col gap-2 font-sans text-[12px] font-light text-white uppercase tracking-[0.1em]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/what-is-gothm"
                  className="hover:text-white transition-colors"
                >
                  WHAT IS GOTHM
                </Link>
              </li>
              <li>
                <Link
                  to="/episodes"
                  className="hover:text-white transition-colors"
                >
                  EPISODES
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/about-the-host"
                  className="hover:text-white transition-colors"
                >
                  MEET THE HOST
                </Link>
              </li>
              <li>
                <Link
                  to="/ghost-mail"
                  className="hover:text-white transition-colors"
                >
                  GHOST MAIL
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: FOLLOW */}
          <div className="flex flex-col">
            <BlockRevealText
              text="FOLLOW"
              className="mb-2 block"
              textClassName="font-sans text-[14px] font-light text-[#a39171] tracking-[0.1em] uppercase"
              delay={1.0}
            />
            <ul className="flex flex-col gap-2 font-sans text-[12px] font-light text-white uppercase tracking-[0.1em]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YOUTUBE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SPOTIFY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  APPLE PODCASTS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FACEBOOK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TIKTOK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: THE SMALL PRINT */}
          <div className="flex flex-col">
            <BlockRevealText
              text="THE SMALL PRINT"
              className="mb-2 block"
              textClassName="font-sans text-[14px] font-light text-[#a39171] tracking-[0.1em] uppercase"
              delay={1.2}
            />
            <ul className="flex flex-col gap-2 font-sans text-[12px] font-light text-white uppercase tracking-[0.1em]">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  TERMS & CONDITIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie"
                  className="hover:text-white transition-colors"
                >
                  COOKIE POLICY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* ================= BOTTOM BAR ================= */}
      <motion.div
        className="mx-auto mt-24 w-full max-w-[1400px] px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      >
        <div className="flex w-full items-center justify-start border-t border-[#a39171]/30 pt-8">
          <BlockRevealText
            text="© GOTHM / GHOST OF THE MACHINE."
            textClassName="font-michroma text-[12px] font-extrabold text-[#a39171] tracking-[0.1em] uppercase"
            delay={1.0}
          />
        </div>
      </motion.div>
    </footer>
  );
}

const BlockRevealText = ({
  text,
  delay = 0,
  className = "",
  textClassName = "",
  style = {},
  glitchI = false,
}) => {
  const letters = Array.from(text);

  const blockVariants = {
    hidden: { left: "0%", right: "100%" },
    visible: {
      left: ["0%", "0%", "100%"],
      right: ["100%", "0%", "0%"],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.5, 1],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay + 0.4,
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
  };

  return (
    <div className={`relative w-fit ${className}`}>
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        variants={blockVariants}
      />
      <motion.p
        className={`m-0 w-full ${textClassName}`}
        style={style}
        variants={containerVariants}
      >
        {letters.map((char, index) => {
          if (glitchI && char === "I") {
            return (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                <span className="tracking-[-0.2em] pr-[0.2em]">|||</span>
              </motion.span>
            );
          }
          return (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
};
