import React from "react";
import { motion } from "framer-motion";
import diagramImg from "../../assets/images/diagram.png";

const Section5 = () => {
  return (
    <section className="w-full bg-[#000000] xl:py-16 py-6 text-white">
      {/* BOXED CONTAINER */}
      <div className="mx-auto flex max-w-5xl flex-col lg:flex-row gap-16 lg:gap-10 px-6">
        {/* LEFT SIDE */}
        <motion.div
          id="ghost-mail"
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
          className="flex w-full lg:w-1/2 flex-col"
        >
          <BlockRevealText
            text="GHOST MAIL_"
            className="mb-2 block"
            textClassName="font-sans text-[13px] font-light tracking-[0.1em] text-[#a39171] uppercase"
            delay={0.8}
          />

          <h2 className="mb-4 font-michroma xl:text-[24px] text-[16px] font-extrabold uppercase tracking-tight text-white leading-[1.2]">
            <TypingText text="A WEEKLY DISPATCH" delay={0.8} />
            <br />
            <TypingText text="FROM INSIDE THE MACHINE" delay={2.1} />
          </h2>

          <p className="mb-2 font-sans text-[16px] max-w-lg font-bold leading-[1.2] text-[#d4d4d4]">
            What I've watched. What I've read. What I can't stop thinking about.
            System hacks, cultural observations, and the occasional rabbit hole
            you didn't know you needed.
          </p>

          <p className="mb-6 font-sans text-[15px] font-bold max-w-lg leading-[1.2] text-[#d4d4d4]">
            No algorithms. No noise. Just the things that got under my skin that
            week — delivered straight to yours.
          </p>

          <div>
            <BlockRevealText
              text="JOIN THE PEOPLE WHO READ BETWEEN THE LINES"
              className="mb-4 block"
              textClassName="font-michroma text-[12px] md:text-[12px] lg:text-[12px] font-bold tracking-[0em] text-[#a39171] uppercase"
              delay={0.8}
              glitchI={true}
            />

            <form
              className="flex w-full max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-2/3 bg-[#0a0a0a] border border-[#a39171]/40 border-r-0 px-4 py-2 text-white focus:outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="w-1/3 bg-[#a39171] text-white font-light font-sans tracking-[0.1em] text-[13px] px-2 py-2 flex items-center justify-center gap-2"
              >
                SUBSCRIBE{" "}
                <img
                  src={diagramImg}
                  alt="diagram"
                  className="w-6 h-6 object-contain"
                />
              </button>
            </form>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            },
          }}
          className="flex w-full lg:w-1/2 flex-col"
        >
          <BlockRevealText
            text="GET IN TOUCH_"
            className="mb-2 block"
            textClassName="font-sans text-[13px] tracking-[0.1em] font-light text-[#a39171] uppercase"
            delay={1.2}
          />

          <h2 className="mb-4 font-michroma xl:text-[24px] text-[22px] font-extrabold uppercase text-white leading-[1.2] tracking-tight">
            <TypingText
              text="COME MEET US AT THE WINDOW BEHIND THE FOURTH WALL"
              delay={1.2}
            />
          </h2>

          <p className="mb-4 font-sans text-[15px] font-bold leading-[1.2] text-[#d4d4d4]">
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
                className="w-full sm:w-1/2 bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white text-sm"
                placeholder="First Name"
              />
              <input
                className="w-full sm:w-1/2 bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white text-sm"
                placeholder="Last Name"
              />
            </div>

            <input
              className="w-full bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white text-sm mb-2"
              placeholder="Email Address"
            />

            <textarea
              className="w-full bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white text-sm mb-2 resize-none"
              rows="4"
              placeholder="Your Message"
            />

            <button
              type="submit"
              className=" w-58 text-sm border border-[#a39171] px-8 py-3 font-light tracking-[0.1em] font-sans text-[#a39171] hover:bg-[#a39171] hover:text-black"
            >
              SEND IT THROUGH -&gt;
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- ANIMATIONS (UNCHANGED) ---------------- */

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
    <motion.span className={className} variants={containerVariants}>
      {letters.map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BlockRevealText = ({
  text,
  delay = 0,
  className = "",
  textClassName = "",
  glitchI = false,
}) => {
  const letters = Array.from(text);

  return (
    <div className={`relative w-fit ${className}`}>
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        initial={{ left: "0%", right: "100%" }}
        animate={{ left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] }}
        transition={{ duration: 0.8, delay }}
      />

      <motion.p
        className={textClassName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {letters.map((c, i) => {
          if (glitchI && c === "I") {
            return (
              <motion.span key={i} className="inline-block">
                <span className="tracking-[-0.2em] pr-[0.2em]">I</span>
              </motion.span>
            );
          }
          if (c === "_") {
            return (
              <motion.span key={i} className="inline-block">
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                >
                  _
                </motion.span>
              </motion.span>
            );
          }
          return (
            <motion.span key={i} className="inline-block">
              {c === " " ? "\u00A0" : c}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
};

export default Section5;
