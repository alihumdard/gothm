import React from "react";
import { motion } from "framer-motion";
import pyramidImage from "../../assets/images/gothm_symbol.png";

const Section2 = () => {
  return (
    <section
      id="what-is-gothm"
      className="relative w-full overflow-hidden bg-[#000000] xl:py-16 py-6  text-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col lg:flex-row px-5">
        {/* LEFT SIDE: Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="flex w-full lg:w-3/5 flex-col pr-8"
        >
          <BlockRevealText
            text="WHAT IS GOTHM_"
            className="mb-1 text-left block"
            textClassName="font-sans text-[13px] font-light tracking-[0.1em] text-[#a39171]"
            delay={0.8}
          />

          <h2 className="mb-2 font-michroma xl:text-[20px] text-md font-bold leading-[1.4] tracking-wide text-white">
            <TypingText text="THE NARRATIVE IS THE MACHINE." delay={1.2} />
            <br />
            <TypingText text="THE GHOST IS THE MESSAGE WITHIN." delay={1.3} />
          </h2>

          <div className="space-y-3 font-sans text-[15px] leading-[1.2] font-bold text-[#d4d4d4]">
            <p>
              Hosted safely inside a story, a message that you could never say out loud can be safehoused, and distributed to billions of people. A memo that would be sent straight to spam for conspiracy. A truth that would be rejected for wearing a plain name tag, would instead be accepted with open arms by our fellow society members. And embraced with open wallets by the companies in big media.
            </p>

            <BlockRevealText
              text="SAFEHOUSED AND DISTRIBUTED. MARKETED AND COMMODIFIED."
              textClassName="font-michroma text-[12px] md:text-[12px] lg:text-[12px] font-bold tracking-[0em] text-[#a39171] uppercase"
              className="block"
              delay={2.6}
              glitchI={true}
            />

            <p>
              In a world where they'd hide the stories of truth. We'd just hide the truth in the world of a story.
            </p>

            <p>
              GOTHM is the mouthpiece for those buried messages. A refuge for those who know there's more depth there than there is media. A stage for the questions that survived under the guise of entertainment. For the warnings that arrived dressed as narrative. The unshadowing of the overshadowed. A voice for the Ghost of the Machine.
            </p>

            <p>
              Welcome to the window behind the fourth wall, where we stare through the lens of the media. Excavating deeper truths about ourselves, our world, our culture.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-6 sm:gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span className="w-full sm:w-56 font-sans text-[14px] sm:text-[15px] font-bold text-[#d4d4d4]">
                Extracting the ideas within...
              </span>
              <button className="w-fit whitespace-nowrap border border-[#303030] font-light bg-[#000000] px-6 py-2 font-sans text-[12px] sm:text-[13px] tracking-[0.1em] text-[#a39171] transition-colors hover:border-[#a39171]">
                GOTHM PODCAST &gt;&gt;
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <span className="w-full sm:w-56 font-sans text-[14px] sm:text-[15px] font-bold text-[#d4d4d4]">
                Synthesizing the findings...
              </span>
              <button className="w-fit whitespace-nowrap border border-[#303030] bg-[#000000] px-6 py-2 font-sans text-[12px] sm:text-[13px] font-light tracking-[0.1em] text-[#a39171] transition-colors hover:border-[#a39171]">
                GOTHM BLOG &gt;&gt;
              </button>
            </div>
          </div>

          <div className="mt-4 mb-4">
            <BlockRevealText
              text="SAFEHOUSED AND DISTRIBUTED. MARKETED AND COMMODIFIED."
              textClassName="font-michroma text-[12px] md:text-[12px] lg:text-[12px] font-bold tracking-[0em] text-[#a39171] uppercase"
              className="block"
              delay={5.0}
              glitchI={true}
            />
          </div>

          <div>
            <button className="border border-[#303030] bg-[#000000] px-8 py-3.5 font-sans text-[13px] font-light tracking-[0.1em] text-[#a39171] transition-colors hover:border-[#a39171]">
              SUBSCRIBE TO GHOST MAIL &gt;&gt;
            </button>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Pyramid Graphic */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="flex w-full lg:w-2/5 flex-col items-center justify-center pt-16 lg:pt-0"
        >
          <div className="relative flex w-full max-w-[280px] justify-center mx-auto items-center mt-8 mb-8">
            {/* TOP CENTER: SYNTHESIS - pyramid ki tip ke upar center mein */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2"
              animate={{
                opacity: [1, 0.15, 1],
                textShadow: [
                  "0 0 10px rgba(163, 145, 113, 0.9)",
                  "0 0 2px rgba(163, 145, 113, 0.1)",
                  "0 0 10px rgba(163, 145, 113, 0.9)",
                ],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0,
              }}
            >
              <span className="font-sans text-[12px] lg:text-[13px] font-light tracking-[0.1em] text-[#a39171] uppercase whitespace-nowrap">
                SYNTHESIS
              </span>
            </motion.div>

            <motion.img
              src={pyramidImage}
              alt="Synthesis Extraction Analysis Pyramid"
              className="w-full h-auto object-contain"
              style={{ mixBlendMode: "screen" }}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{
                opacity: [0, 1, 0, 1, 0.5, 1],
                filter: [
                  "blur(10px) drop-shadow(0 0 0px rgba(163, 145, 113, 0))",
                  "blur(0px) drop-shadow(0 0 15px rgba(163, 145, 113, 0.8))",
                  "blur(5px) drop-shadow(0 0 5px rgba(163, 145, 113, 0.2))",
                  "blur(0px) drop-shadow(0 0 15px rgba(163, 145, 113, 0.8))",
                  "blur(0px) drop-shadow(0 0 8px rgba(163, 145, 113, 0.4))",
                  "blur(0px) drop-shadow(0 0 10px rgba(163, 145, 113, 0.5))"
                ],
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />

            {/* BOTTOM LEFT: EXTRACTION - pyramid ka neeche left corner */}
            <motion.div
              className="absolute -bottom-8 left-0 -translate-x-1/4"
              animate={{
                opacity: [1, 0.15, 1],
                textShadow: [
                  "0 0 10px rgba(163, 145, 113, 0.9)",
                  "0 0 2px rgba(163, 145, 113, 0.1)",
                  "0 0 10px rgba(163, 145, 113, 0.9)",
                ],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.9,
              }}
            >
              <span className="font-sans text-[12px] lg:text-[13px] font-light tracking-[0.1em] text-[#a39171] uppercase whitespace-nowrap">
                EXTRACTION
              </span>
            </motion.div>

            {/* BOTTOM RIGHT: ANALYSIS - pyramid ka neeche right corner */}
            <motion.div
              className="absolute -bottom-8 right-0 translate-x-1/4"
              animate={{
                opacity: [1, 0.15, 1],
                textShadow: [
                  "0 0 10px rgba(163, 145, 113, 0.9)",
                  "0 0 2px rgba(163, 145, 113, 0.1)",
                  "0 0 10px rgba(163, 145, 113, 0.9)",
                ],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1.8,
              }}
            >
              <span className="font-sans text-[12px] lg:text-[13px] font-light tracking-[0.1em] text-[#a39171] uppercase whitespace-nowrap">
                ANALYSIS
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TypingText = ({ text, delay = 0, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.003, // fast typing speed
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.01 } },
  };

  return (
    <motion.span className={className} variants={containerVariants}>
      {Array.from(text).map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
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
    <div className={`relative w-fit max-w-full ${className}`}>
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        variants={blockVariants}
      />
      <motion.p
        className={`m-0 w-full flex flex-wrap ${textClassName}`}
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
                    <span className="tracking-[-0.2em] pr-[0.2em]">I</span>
                  </motion.span>
                );
              }
              if (char === "_") {
                return (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                  >
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

export default Section2;
