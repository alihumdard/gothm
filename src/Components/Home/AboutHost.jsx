import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import hostImage from "../../assets/images/anchor.jpeg";

/* ---------------- Typing Text ---------------- */
const TypingText = ({ text = "", delay = 0, className = "" }) => {
  const letters = Array.from(text);

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              transition: { duration: 0.4 },
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/* ---------------- Block Reveal ---------------- */
const BlockRevealText = ({
  text,
  delay = 0,
  className = "",
  textClassName = "",
  glitchI = false,
}) => {
  const letters = Array.from(text);

  return (
    <div className={`relative w-fit overflow-hidden ${className}`}>
      {/* sliding block */}
      <motion.div
        className="absolute inset-0 bg-[#a39171] z-10"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true }}
      />

      <motion.p
        className={textClassName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              delayChildren: delay + 0.2,
              staggerChildren: 0.03,
            },
          },
        }}
      >
        {letters.map((char, i) => {
          if (glitchI && char === "I") {
            return (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, filter: "blur(5px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                className="inline-block"
              >
                <span className="tracking-[-0.2em] pr-[0.2em]">I</span>
              </motion.span>
            );
          }
          if (char === "_") {
            return (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, filter: "blur(5px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                className="inline-block"
              >
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
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, filter: "blur(5px)" },
                visible: { opacity: 1, filter: "blur(0px)" },
              }}
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

/* ---------------- SECTION 4 ---------------- */

const Section4 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const imgControls = useAnimation();

  /* IMAGE BLINK (SYNCED, NO BLUR) */
  useEffect(() => {
    if (!inView) return;

    const runEntranceAndGlitch = async () => {
      await imgControls.start({ opacity: 1 });

      const syncDelay = 3000 - (Date.now() % 3000);
      await new Promise((r) => setTimeout(r, syncDelay));

      while (true) {
        await imgControls.start({
          opacity: [1, 0.4, 1, 0.7, 1],
          x: [0, -5, 5, -2, 0],
          y: [0, 3, -3, 1, 0],
          scale: [1, 1.03, 0.97, 1.01, 1],
          // No blur, just contrast changes to simulate fade/glitch
          filter: [
            "contrast(1)",
            "contrast(1.5)",
            "contrast(2)",
            "contrast(1.2)",
            "contrast(1)",
          ],
          transition: { duration: 0.35, ease: "linear" },
        });
        await new Promise((r) => setTimeout(r, 2650));
      }
    };

    runEntranceAndGlitch();
  }, [inView, imgControls]);

  return (
    <section
      id="about-the-host"
      ref={ref}
      className="w-full bg-[#000000] xl:py-16 py-6 text-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row gap-8 px-6">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex w-full lg:w-2/5 flex-col items-start"
        >
          <div className="w-full max-w-[400px] overflow-hidden">
            <motion.img
              src={hostImage}
              alt="Julian"
              initial={{ opacity: 0 }}
              animate={imgControls}
              className="w-full h-[500px] object-cover opacity-90 brightness-90"
            />
          </div>

          <div className="mt-6 flex flex-col">
            <h3 className="font-michroma text-[28px] font-bold uppercase leading-none tracking-wide">
              <TypingText text="JULIAN" />
            </h3>

            <BlockRevealText
              text="HOST OF THE GHOST"
              className="mt-1"
              textClassName="font-michroma text-[10px] font-bold uppercase text-[#a39171]"
              delay={0.8}
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE (FULL ORIGINAL TEXT RESTORED) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex w-full lg:w-3/5 flex-col pr-4"
        >
          <BlockRevealText
            text="MEET THE HOST_"
            textClassName="font-sans text-[13px] font-light tracking-[0.1em] uppercase text-[#a39171]"
            delay={0.6}
          />

          <h2 className="mt-2 font-michroma xl:text-[28px] text-[20px] font-bold uppercase text-white">
            <TypingText text="HOST OF THE GHOST" delay={0.8} />
          </h2>

          <BlockRevealText
            text="SOME OF THE THINGS WE WATCH ARE THE SUM OF THE THINGS WE ARE."
            className="mt-4"
            textClassName="font-michroma text-[11.5px] md:text-[12px] lg:text-[12px] font-bold tracking-[0em] text-[#a39171] uppercase"
            delay={1}
            glitchI={true}
          />

          <div className="space-y-3 mt-4 text-[15px] text-[#d4d4d4] font-bold leading-[1.2] w-full max-w-[550px]">
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
              Superabled, with a talent for extraction and synthesis of meaning.
              I would never make you a promise I couldn't keep. Which is to say
              I won't go to the depths of hell for my craft — I'd probably start
              there.
            </p>
          </div>

          <BlockRevealText
            text="SOME OF THE TRUTH WE CAN'T SAY IN PLAIN LANGUAGE, CAN BE A SUM OF THE TRUTH IN A NARRATIVE."
            className="mt-4"
            textClassName="font-michroma text-[12px] md:text-[12px] lg:text-[12px] font-bold tracking-[0em] text-[#a39171] uppercase"
            delay={1.2}
            glitchI={true}
          />

          <div className="space-y-3 mt-4 text-[15px] text-[#d4d4d4] font-bold leading-[1] w-full max-w-[550px]">
            <p>
              I'm building GOTHM on a single belief: Some truths are too
              dangerous to say in plain language. Too profound. Too
              controversial. But through fiction they can be delivered safely.
            </p>

            <p>
              I'm here to extract those messages, decode the encrypted echo, and
              deliver what is hidden beneath the story.
            </p>
          </div>

          <h3 className="mt-10 font-michroma text-[20px] text-[#d4d4d4]">
            <TypingText text="The Things You Watch, Are Watching You." />
          </h3>

          <p className="mt-6 font-cinzel text-[24px] font-semibold italic text-[#979490]">
            — Julian
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
