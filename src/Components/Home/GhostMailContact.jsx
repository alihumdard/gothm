import React from "react";
import { motion } from "framer-motion";
import diagramImg from "../../assets/images/gothm_symbol.png";

const Section5 = () => {
  return (
    <section className="w-full bg-[#000000] xl:py-16 py-6 text-white">
      {/* BOXED CONTAINER */}
      <div className="mx-auto flex max-w-5xl flex-col lg:flex-row gap-6 lg:gap-10 px-4 lg:px-6">
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

          <h2 className="mb-4 font-michroma text-[15px] lg:text-[20px] xl:text-[20px] font-extrabold uppercase tracking-tight text-white leading-[1.2]">
            <TypingText text="A WEEKLY DISPATCH" delay={0.8} />
            <br />
            <TypingText text="FROM INSIDE THE MACHINE" delay={2.1} />
          </h2>

          <p className="mb-3 font-sans text-[14px] md:text-[16px] max-w-lg font-bold leading-[1.4] md:leading-[1.2] text-[#d4d4d4] text-justify sm:text-left">
            What I've watched. What I've read. What I can't stop thinking about.
            System hacks, cultural observations, and the occasional rabbit hole
            you didn't know you needed.
          </p>

          <p className="mb-6 font-sans text-[14px] md:text-[15px] font-bold max-w-lg leading-[1.4] md:leading-[1.2] text-[#d4d4d4] text-justify sm:text-left">
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

            {/* --- MOBILE GHOST MAIL FORM --- */}
            <form
              className="flex lg:hidden w-full max-w-md gap-[1px] mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-2/3 bg-transparent border border-[#222222] px-4 py-2.5 text-[#d4d4d4] font-serif placeholder:text-[#555] focus:outline-none focus:border-[#a39171]/50 text-[12px]"
                required
              />
              <button
                type="submit"
                className="w-1/3 bg-[#67563D] text-[#888] font-light font-sans tracking-[0.05em] sm:tracking-[0.1em] text-[12px] sm:text-[12px] px-2 py-2.5 flex items-center justify-center gap-1 opacity-90"
              >
                SUBSCRIBE{" "}
                <img
                  src={diagramImg}
                  alt="diagram"
                  className="w-4 h-4 object-contain opacity-40"
                />
              </button>
            </form>

            {/* --- DESKTOP GHOST MAIL FORM --- */}
            <form
              className="hidden lg:flex w-full max-w-md gap-[1px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-2/3 bg-[#0a0a0a] border border-[#a39171]/40 px-4 py-2 text-white focus:outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="w-1/3 bg-[#67563D] text-[#888] font-light font-sans tracking-[0.1em] text-[13px] px-2 py-2 flex items-center justify-center gap-2"
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

          <h2 className="mb-4 font-michroma text-[15px] lg:text-[21px] xl:text-[20px] font-extrabold uppercase text-white leading-[1.2] tracking-tight">
            <TypingText
              text="COME MEET US AT THE WINDOW BEHIND THE FOURTH WALL"
              delay={1.2}
            />
          </h2>

          <p className="mb-6 font-sans text-[14px] md:text-[15px] font-bold leading-[1.4] md:leading-[1.2] text-[#d4d4d4] text-justify sm:text-left">
            Whether you made something worth excavating, know someone who can
            explain what it did to us, or want to be part of what we're building
            — we want to hear from you.
          </p>

          {/* --- MOBILE GET IN TOUCH FORM --- */}
          <form
            className="flex lg:hidden flex-col w-full gap-3 mt-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="w-full bg-transparent border border-[#222222] px-4 py-3 text-[#d4d4d4] font-serif placeholder:text-[#555] focus:outline-none focus:border-[#a39171]/60 text-[12px]"
              placeholder="Your Name"
            />

            <input
              type="email"
              className="w-full bg-transparent border border-[#222222] px-4 py-3 text-[#d4d4d4] font-serif placeholder:text-[#555] focus:outline-none focus:border-[#a39171]/60 text-[12px]"
              placeholder="Your Email"
            />
            
            <input
              className="w-full bg-transparent border border-[#222222] px-4 py-3 text-[#d4d4d4] font-serif placeholder:text-[#555] focus:outline-none focus:border-[#a39171]/60 text-[12px]"
              placeholder="Enquiry Type"
            />

            <textarea
              className="w-full bg-transparent border border-[#222222] px-4 py-3 text-[#d4d4d4] font-serif placeholder:text-[#555] focus:outline-none focus:border-[#a39171]/60 text-[12px] resize-none"
              rows="4"
              placeholder="Your Message"
            />

            <button
              type="submit"
              className="w-fit mt-1 text-[12px] border border-[#222222] px-8 py-3 font-light tracking-[0.1em] font-sans text-[#a39171] hover:bg-[#a39171] hover:text-black hover:border-[#a39171] transition-colors"
            >
              SEND IT THROUGH &gt;&gt;
            </button>
          </form>

          {/* --- DESKTOP GET IN TOUCH FORM --- */}
          <form
            className="hidden lg:flex flex-col w-full"
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

const TypingText = ({ text = "", delay = 0, className = "" }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: 0.003, // Fast typing speed
          },
        },
      }}
    >
      {letters.map((char, i) => {
        if (char === " ") return " ";
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.01 } },
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      })}
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
  const words = text.split(" ");

  return (
    <div className={`relative w-fit max-w-full overflow-hidden ${className}`}>
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        initial={{ left: "0%", right: "100%" }}
        whileInView={{ left: ["0%", "0%", "100%"], right: ["100%", "0%", "0%"] }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
      />

      <motion.p
        className={`flex flex-wrap m-0 w-full ${textClassName}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {Array.from(word).map((c, i) => {
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
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      _
                    </motion.span>
                  </motion.span>
                );
              }
              return (
                <motion.span key={i} className="inline-block">
                  {c}
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

export default Section5;
