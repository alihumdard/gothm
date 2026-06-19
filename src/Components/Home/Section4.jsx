import React from "react";
import { motion } from "framer-motion";
import hostImage from "../../assets/images/sahafi.png";

const Section4 = () => {
  return (
    <section className="w-full bg-[#000000] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row gap-8 px-6 lg:px-0">
        {/* LEFT SIDE: Image and Name */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex w-full lg:w-2/5 flex-col items-start pt-8"
        >
          <div className="w-full max-w-[400px] overflow-hidden">
            <img
              src={hostImage}
              alt="Julian - Host of the Ghost"
              className="w-full h-auto object-cover opacity-90 brightness-90"
            />
          </div>
          <div className="mt-6 flex flex-col">
            <h3 className="font-michroma text-[28px] font-bold text-white uppercase leading-none tracking-wide">
              <TypingText text="JULIAN" delay={0.8} />
            </h3>
            <BlockRevealText
              text="HOST OF THE GHOST"
              className="mt-1 block"
              textClassName="font-cinzel text-[14px] font-extrabold uppercase tracking-[0em] text-transparent"
              style={{ WebkitTextStroke: "1px #a39171" }}
              delay={1.2}
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex w-full lg:w-3/5 flex-col pr-4"
        >
          <BlockRevealText
            text="MEET THE HOST..."
            className="block"
            textClassName="font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase"
            delay={0.8}
          />

          <h2 className="mb-2 font-michroma text-[36px] font-bold uppercase tracking-wide text-white">
            <TypingText text="HOST OF THE GHOST" delay={0.8} />
          </h2>

          <div className="mb-2 mt-4">
            <BlockRevealText
              text="SOME OF THE THINGS WE WATCH ARE THE SUM OF THE THINGS WE ARE"
              className="block"
              textClassName="font-cinzel text-[14px] font-extrabold uppercase text-[#a39171] tracking-[0em]"
              delay={0.8}
            />
          </div>

          <div className="space-y-3 font-sans text-[14px] leading-[1.2] font-semibold text-[#d4d4d4]">
            <p>
              I've never been able to watch something and take it at face value.
              Some of the things we watch have more faces than a fifty cent
              coin. Beneath the fabric of cinematography. Woven into the
              narrative. I see a truth embedded within the architecture of the
              machine. The true soul of our own reality, blurred within fiction.
              Ourselves and the lives we lead staring back at us through the
              screen.
            </p>

            <p>
              I'm Julian. Creator and host of GOTHM — Ghost of the Machine. ADHD
              Superabled, with a talent for the extraction and synthesis of the
              messages within the narratives we all cherish and revere. I would
              never make you a promise I couldn't keep. Which is to say I won't
              go to the depths of hell for my craft. — I'd probably start there.
              Then I'd dig a trench so deep as to make hell look like a country
              club.
            </p>
          </div>

          <div className="mt-4 mb-4">
            <BlockRevealText
              text="SOME OF THE TRUTH WE CAN'T SAY IN PLAIN LANGUAGE, CAN BE A SUM OF THE TRUTH IN A NARRATIVE."
              className="block"
              textClassName="font-cinzel text-[#a39171] text-[13.5px] font-extrabold uppercase tracking-[0em]"
              delay={0.8}
            />
          </div>

          <div className="space-y-3 font-sans text-[14px] leading-[1.2] font-semibold text-[#d4d4d4]">
            <p>
              I'm building GOTHM on a single belief: Some of the truths too
              dangerous to say in plain language. Too profound. Too
              controversial. If filtered through the vehicle of fiction can be
              delivered through the mist. You can say anything that you want
              through the voice of a story.
            </p>

            <p>
              I'm here to sift through the mist and extract those messages.
              Decode the encrypted echo within. I'm here to unwrap the packaging
              and deliver you the gift hidden inside. If you're following me on
              this journey, you already know too much. And if this is the
              beginning. Just so you know:
            </p>
          </div>

          <div className="mt-10 mb-8">
            <h3 className="font-michroma text-[22px] font-medium text-white tracking-wide">
              <TypingText text="The Things You Watch, Are Watching You." delay={0.8} />
            </h3>
          </div>

          <div className="mt-2">
            <BlockRevealText
              text="— Julian"
              className="block"
              textClassName="font-cinzel text-[24px] font-extrabold italic text-[#bba58c]"
              delay={0.8}
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

export default Section4;
