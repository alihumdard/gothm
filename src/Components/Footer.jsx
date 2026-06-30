import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import symbolImage from "../assets/images/gothm_symbol.png";
import textImage from "../assets/images/gothm_text.png";
import taglineImage from "../assets/images/gothm_tagline.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] py-16 lg:px-0 px-6 font-sans overflow-hidden">
      <motion.div
        className=" flex w-full max-w-7xl flex-col lg:flex-row justify-between gap-4 pl-0 pr-6 lg:pr-0"
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
        <div className="flex flex-col items-center">
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

          {/* Tagline */}
          <div className="mt-1 flex flex-col gap-0">
            <BlockRevealText
              text="THE THINGS YOU WATCH,"
              textClassName="font-michroma text-[10px] lg:text-[12px] ml-14 mt-0 font-bold text-[#a39171] uppercase tracking-[0em]"
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
        <div className="flex flex-row justify-between sm:justify-start sm:ml-4 gap-2 sm:gap-8 lg:gap-24 w-full lg:w-auto">
          {/* Column 1: NAVIGATE */}
          <div className="flex flex-col w-1/3 sm:w-auto">
            <BlockRevealText
              text="NAVIGATE"
              className="mb-4 block"
              textClassName="font-sans text-[10px] md:text-[14px] font-light text-[#a39171] tracking-[0.1em] uppercase"
              delay={0.8}
            />
            <ul className="flex flex-col gap-3 font-sans text-[9px] md:text-[12px] font-bold md:font-light text-white uppercase tracking-[0.1em]">
              <li>
                <Link to="/" className="hover:text-[#a39171] transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/what-is-gothm"
                  className="hover:text-[#a39171] transition-colors"
                >
                  WHAT IS GOTHM
                </Link>
              </li>
              <li>
                <Link
                  to="/episodes"
                  className="hover:text-[#a39171] transition-colors"
                >
                  EPISODES
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#a39171] transition-colors">
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  to="/about-the-host"
                  className="hover:text-[#a39171] transition-colors"
                >
                  ABOUT THE HOST
                </Link>
              </li>
              <li>
                <Link
                  to="/ghost-mail"
                  className="hover:text-[#a39171] transition-colors"
                >
                  GHOST MAIL
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#a39171] transition-colors"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: FOLLOW */}
          <div className="flex flex-col w-1/3 sm:w-auto">
            <BlockRevealText
              text="FOLLOW"
              className="mb-4 block"
              textClassName="font-sans text-[10px] md:text-[14px] font-light text-[#a39171] tracking-[0.1em] uppercase"
              delay={1.0}
            />
            <ul className="flex flex-col gap-3 font-sans text-[9px] md:text-[12px] font-bold md:font-light text-white uppercase tracking-[0.1em]">
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  YOUTUBE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  SPOTIFY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  APPLE PODCASTS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  AMAZON MUSIC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  TIKTOK
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#a39171] transition-colors">
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: STAY CONNECTED */}
          <div className="flex flex-col w-1/3 sm:w-auto">
            <BlockRevealText
              text="STAY CONNECTED"
              className="mb-4 block"
              textClassName="font-sans text-[10px] md:text-[14px] font-light text-[#a39171] tracking-[0.1em] uppercase"
              delay={1.2}
            />
            <ul className="flex flex-col gap-3 font-sans text-[9px] md:text-[12px] font-bold md:font-light text-white uppercase tracking-[0.1em]">
              <li>
                <Link
                  to="/ghost-mail"
                  className="hover:text-[#a39171] transition-colors"
                >
                  GHOST MAIL NEWSLETTER
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#a39171] transition-colors"
                >
                  GUEST ENQUIRY
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#a39171] transition-colors"
                >
                  SPONSORSHIP ENQUIRY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* ================= BOTTOM BAR ================= */}
      <motion.div
        className="mx-auto mt-16 lg:mt-24 w-full max-w-[1400px] px-8"
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
        <div className="flex w-full items-center justify-start pt-4">
          <BlockRevealText
            text="© GOTHM / GHOST OF THE MACHINE"
            textClassName="font-michroma text-[9px] md:text-[12px] font-extrabold text-[#8a7a5b] tracking-[0.1em] uppercase"
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
  const words = text.split(" ");

  const blockVariants = {
    hidden: { left: "0%", right: "100%" },
    visible: {
      left: ["0%", "0%", "100%"],
      right: ["100%", "0%", "0%"],
      transition: {
        duration: 0.3,
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
        delayChildren: delay + 0.15,
        staggerChildren: 0.015,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
  };

  return (
    <div className={`relative w-fit max-w-full overflow-hidden ${className}`}>
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        variants={blockVariants}
      />
      <motion.p
        className={`flex flex-wrap m-0 w-full ${textClassName}`}
        style={style}
        variants={containerVariants}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {Array.from(word).map((char, index) => {
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
                  {char}
                </motion.span>
              );
            })}
            {wordIndex !== words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.p>
    </div>
  );
};
