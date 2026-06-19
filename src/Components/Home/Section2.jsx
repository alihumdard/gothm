import React from "react";
import { motion } from "framer-motion";
import pyramidImage from "../../assets/images/diagram.png";

const Section2 = () => {
  return (
    <section
      id="what-is-gothm"
      className="relative w-full overflow-hidden bg-[#000000] py-16 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row px-6 lg:px-0">
        {/* LEFT SIDE: Content Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex w-full lg:w-3/5 flex-col pr-8"
        >
          <BlockRevealText 
            text="WHAT IS GOTHM..." 
            className="mb-1 text-left block" 
            textClassName="font-cinzel text-[13px] font-extrabold tracking-[0.2em] text-[#a39171]" 
            delay={0.8}
          />

          <h2 className="mb-2 font-michroma text-[25px] font-medium leading-[1.25] tracking-wide text-white">
            <TypingText text="THE NARRATIVE IS THE MACHINE." delay={0.8} />
            <br />
            <TypingText text="THE GHOST IS THE MESSAGE WITHIN." delay={2.1} />
          </h2>

          <div className="space-y-3 font-sans text-[14px] leading-[1.2] font-semibold text-[#d4d4d4]">
            <p>
              Hosted safely inside a story, a message that you could never say
              out loud can be safehoused, and distributed to billions of people.
              A memo that would be sent straight to spam for conspiracy. A truth
              that would be rejected for wearing a plain name tag, would instead
              be accepted with open arms by our fellow society members. And
              embraced with open wallets by the companies in big media.
            </p>

            <BlockRevealText 
              text="SAFEHOUSED AND DISTRIBUTED. MARKET AND COMMODIFIED." 
              textClassName="font-cinzel text-[14px] font-extrabold tracking-[0em] text-[#a39171] uppercase" 
              className="block"
              delay={0.8}
            />

            <p>
              In a world where they'd hide the stories of truth. We'd just hide
              the truth in the world of a story.
            </p>

            <p>
              GOTHM is the mouthpiece for those buried messages. A refuge for
              those who know there's more depth there than there is media. A
              stage for the questions that survived under the guise of
              entertainment. For the warnings that arrived dressed as narrative.
              The unshadowing of the overshadowed. A voice for the Ghost of the
              Machine.
            </p>

            <p>
              Welcome to the window behind the fourth wall, where we stare
              through the lens of the media. Excavating deeper truths about
              ourselves, our world, our culture.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center gap-6">
              <span className="w-56 font-sans text-[15px] font-semibold text-white">
                Extracting the ideas within...
              </span>
              <button className="border border-[#303030] font-extrabold bg-[#000000] px-6 py-2 font-cinzel text-[13px] font-semibold tracking-[0.15em] text-[#a39171] transition-colors hover:border-[#a39171]">
                GOTHM PODCAST &gt;&gt;
              </button>
            </div>

            <div className="flex items-center gap-6">
              <span className="w-56 font-sans text-[15px] font-bold text-white">
                Synthesizing the findings...
              </span>
              <button className="border border-[#303030] bg-[#000000] px-6 py-2 font-cinzel text-[13px] font-extrabold tracking-[0.15em] text-[#a39171] transition-colors hover:border-[#a39171]">
                GOTHM BLOG &gt;&gt;
              </button>
            </div>
          </div>

          <div className="mt-4 mb-4">
            <BlockRevealText 
              text="SAFEHOUSED AND DISTRIBUTED. MARKET AND COMMODIFIED." 
              textClassName="font-cinzel text-[14px] font-extrabold tracking-[0em] text-[#a39171] uppercase" 
              className="block"
              delay={0.8}
            />
          </div>

          <div>
            <button className="border border-[#303030] bg-[#000000] px-8 py-3.5 font-cinzel text-[13px] font-extrabold tracking-[0.15em] text-[#a39171] transition-colors hover:border-[#a39171]">
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
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex w-full lg:w-2/5 flex-col items-center justify-center pt-16 lg:pt-0"
        >
          <div className="relative flex w-full max-w-[280px] justify-center mx-auto items-center mt-8 mb-8">
            <BlockRevealText 
              text="SYNTHESIS" 
              className="absolute -top-32 left-54 -translate-x-1/2" 
              textClassName="font-cinzel text-[12px] lg:text-[13px] font-bold tracking-[0em] text-[#a39171] uppercase whitespace-nowrap" 
              delay={1.2}
            />

            <img
              src={pyramidImage}
              alt="Synthesis Extraction Analysis Pyramid"
              className="w-full h-auto object-contain opacity-90"
              style={{ mixBlendMode: "screen" }}
            />

            <BlockRevealText 
              text="EXTRACTION" 
              className="absolute -bottom-32 -left-80" 
              textClassName="font-cinzel text-[12px] lg:text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase whitespace-nowrap" 
              delay={1.2}
            />

            <BlockRevealText 
              text="ANALYSIS" 
              className="absolute -bottom-32 right-30" 
              textClassName="font-cinzel text-[12px] lg:text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase whitespace-nowrap" 
              delay={1.2}
            />
          </div>
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

const BlockRevealText = ({ text, delay = 0, className = "", textClassName = "" }) => {
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

export default Section2;
