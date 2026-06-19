import React from "react";
import { motion } from "framer-motion";
import { FaGhost } from "react-icons/fa6";

const Section5 = () => {
  return (
    <section className="w-full bg-[#000000] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row gap-16 lg:gap-8 px-6 lg:px-0">
        {/* LEFT SIDE: GHOST MAIL (Newsletter) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex w-full lg:w-1/2 flex-col"
        >
          <BlockRevealText
            text="GHOST MAIL..."
            className="mb-2 block"
            textClassName="font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase"
            delay={0.8}
          />

          <h2 className="mb-4 font-michroma text-[24px] font-extrabold uppercase tracking-wide text-white leading-tight">
            <TypingText text="A WEEKLY DISPATCH" delay={0.8} />
            <br />
            <TypingText text="FROM INSIDE THE MACHINE" delay={2.1} />
          </h2>

          <p className="mb-2 font-sans text-[16px] w-full max-w-lg  font-semibold leading-[1.3] text-white">
            What I've watched. What I've read. What I can't stop thinking about.
            System hacks, cultural observations, and the occasional rabbit hole
            you didn't know you needed.
          </p>

          <p className="mb-6 font-sans text-[15px] font-semibold w-full max-w-lg leading-[1.3] text-white">
            No algorithms. No noise. Just the things that got under my skin that
            week — delivered straight to yours.
          </p>

          <div className="mt-auto">
            <BlockRevealText
              text="JOIN THE PEOPLE WHO READ BETWEEN THE LINES"
              className="mb-4 block"
              textClassName="font-cinzel text-[14px] font-extrabold uppercase text-[#a39171] tracking-[0em]"
              delay={0.8}
            />

            <form
              className="flex w-full max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-2/3 bg-[#0a0a0a] border border-[#a39171]/40 border-r-0 px-4 py-3 text-white focus:outline-none font-sans text-sm transition-colors focus:border-[#a39171]"
                required
              />
              <button
                type="submit"
                className="w-1/3 bg-[#a39171] text-[#000000] font-cinzel font-extrabold text-[13px] tracking-widest px-2 py-3 hover:bg-[#8c7b5c] transition-colors flex items-center justify-center gap-2"
              >
                SUBSCRIBE <FaGhost size={14} />
              </button>
            </form>
          </div>
        </motion.div>

        {/* RIGHT SIDE: GET IN TOUCH (Contact Form) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex w-full lg:w-1/2 flex-col"
        >
          <BlockRevealText
            text="GET IN TOUCH..."
            className="mb-2 block"
            textClassName="font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase"
            delay={1.2}
          />

          <h2 className="mb-4 font-michroma text-[24px] font-extrabold uppercase tracking-wide text-white leading-tight">
            <TypingText text="COME MEET US AT THE WINDOW BEHIND THE FOURTH WALL" delay={1.2} />
          </h2>

          <p className="mb-4 font-sans text-[15px] font-semibold leading-[1.3] text-[#d4d4d4]">
            Whether you made something worth excavating, know someone who can
            explain what it did to us, or want to be part of what we're building
            — we want to hear from you.
          </p>

          <form
            className="flex flex-col w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full sm:w-1/2 bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white focus:outline-none font-sans text-sm transition-colors focus:border-[#a39171]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full sm:w-1/2 bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white focus:outline-none font-sans text-sm transition-colors focus:border-[#a39171]"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white focus:outline-none font-sans text-sm mb-2 transition-colors focus:border-[#a39171]"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white focus:outline-none font-sans text-sm mb-2 resize-none transition-colors focus:border-[#a39171]"
              required
            ></textarea>

            <div>
              <button
                type="submit"
                className="border border-[#a39171] bg-[#000000] px-8 py-3 font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171] transition-colors hover:bg-[#a39171] hover:text-[#000000]"
              >
                SEND IT THROUGH &gt;&gt;
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const TypingText = ({ text, delay = 0, className = "" }) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.4 } },
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BlockRevealText = ({ text, delay = 0, className = "", textClassName = "", style = {} }) => {
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
        {letters.map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default Section5;
