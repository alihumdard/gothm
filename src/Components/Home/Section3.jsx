import React, { useMemo, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import gameimg1 from "../../assets/images/games-img (6).png";
import gameimg2 from "../../assets/images/games-img (5).png";
import gameimg3 from "../../assets/images/games-img (4).png";
import gameimg4 from "../../assets/images/games-img (3).png";
import gameimg5 from "../../assets/images/games-img (2).png";
import gameimg6 from "../../assets/images/games-img (1).png";

/* ---------------- TEXT ANIMATIONS ---------------- */

const TypingText = ({ text = "", delay = 0, className = "" }) => {
  const letters = useMemo(() => Array.from(text), [text]);

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
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BlockRevealText = ({
  text = "",
  delay = 0,
  className = "",
  textClassName = "",
}) => {
  const letters = useMemo(() => Array.from(text), [text]);

  return (
    <motion.div
      className={`relative w-fit overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-[#a39171] z-10"
        variants={{
          hidden: { x: "0%" },
          visible: {
            x: "100%",
            transition: { duration: 0.8, delay },
          },
        }}
      />

      <motion.p className={`relative z-0 m-0 ${textClassName}`}>
        {letters.map((char, i) => {
          if (char === "_") {
            return (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
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
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.p>
    </motion.div>
  );
};

/* ---------------- IMAGE COMPONENT (BLINK + STAGGER) ---------------- */

const ImageReveal = ({ image, alt, delay, sectionInView }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!sectionInView) return;

    const runEntranceAndGlitch = async () => {
      // Synced Entrance Blink (No delay, all together)
      await controls.start({
        opacity: [0, 1, 0, 1, 0.5, 1],
        filter: ["blur(10px)", "blur(0px)", "blur(5px)", "blur(0px)", "blur(0px)", "blur(0px)"],
        transition: { duration: 0.6, ease: "easeInOut" }
      });

      // Synced Infinite Glitch Loop (happens every 3 seconds)
      // We calculate time so all images hit the glitch loop at the exact same modulo time
      const syncDelay = 3000 - (Date.now() % 3000);
      await new Promise((r) => setTimeout(r, syncDelay));

      while (true) {
        await controls.start({
          opacity: [1, 0.4, 1, 0.7, 1],
          x: [0, -5, 5, -2, 0],
          y: [0, 3, -3, 1, 0],
          scale: [1, 1.03, 0.97, 1.01, 1],
          filter: [
            "blur(0px) contrast(1)",
            "blur(3px) contrast(1.5)",
            "blur(2px) contrast(2)",
            "blur(1px) contrast(1.2)",
            "blur(0px) contrast(1)"
          ],
          transition: { duration: 0.35, ease: "linear" }
        });
        await new Promise((r) => setTimeout(r, 2650)); // Wait for next loop
      }
    };

    runEntranceAndGlitch();
  }, [sectionInView, delay, controls]);

  return (
    <div ref={ref} className="relative aspect-video overflow-hidden">
      <motion.img
        src={image}
        alt={alt}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={controls}
        className="w-full h-full object-cover"
      />

      <motion.div
        className="absolute bottom-0 left-0 h-[22%] w-full bg-[#a39171]"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
};

/* ---------------- DATA ---------------- */

const episodes = [
  {
    id: "01",
    eyebrow: "THE MATRIX...",
    title: "THE SYSTEM IS AN ICEBERG",
    subtitle:
      "How Far Does The Rabbit Hole Go? A Doctor In Politics Breaks Down Every Layer.",
    linkText: "COMING SOON ->",
    image: gameimg1,
  },
  {
    id: "02",
    eyebrow: "THE BOYS_",
    title: "WHEN YOUR BOSS IS HOMELANDER",
    subtitle: "The Side Effects of Private Tyranny.",
    linkText: "COMING SOON ->",
    image: gameimg2,
  },
  {
    id: "03",
    eyebrow: "SEVERANCE_",
    title: "SEVERED BY DESIGN",
    subtitle:
      "An Interior Designer Dissects How Your Environment Controls Your Mind.",
    linkText: "COMING SOON ->",
    image: gameimg3,
  },
];

const blogs = [
  {
    id: "01",
    eyebrow: "GHOST IN THE SHELL_",
    title: "NOW WE CAN SEE FACE TO FACE",
    subtitle:
      "1996 Was a Dim Image in the Mirror. In 2026 We Can See Face to Face.",
    image: gameimg4,
  },
  {
    id: "02",
    eyebrow: "FIGHT CLUB_",
    title: "SELF IMPROVEMENT IS MASTURBATION.",
    subtitle: "A self improvement thought experiment.",
    image: gameimg5,
  },
  {
    id: "03",
    eyebrow: "JOKER V FOR VENDETTA_",
    title: "MASKS OF RESISTANCE",
    subtitle: "When you're playing chess with a mask on.",
    image: gameimg6,
  },
];

/* ---------------- SECTION ---------------- */

const Section3 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-black xl:py-16 py-6 text-white">
      <div className="mx-auto max-w-7xl flex flex-col gap-16 px-6">
        {/* EPISODES */}
        <div id="episodes">
          <BlockRevealText
            text="COMING SOON_"
            textClassName="text-[#a39171] text-[13px] font-light font-sans tracking-[0.1em]"
          />

          <h2 className="lg:text-[28px] text-[26px] font-bold font-orbitron uppercase mt-2 mb-10">
            <TypingText text="FEATURED EPISODES" />
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {episodes.map((item, index) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ImageReveal
                  image={item.image}
                  alt={item.title}
                  delay={index * 200}
                  sectionInView={inView}
                />

                {/* 🔥 ORIGINAL TEXT (KEPT SAME) */}
                <BlockRevealText
                  text={item.eyebrow}
                  textClassName="text-[#a39171] text-[12px] mt-4"
                />

                <h3 className="mt-2 text-[16px] font-bold font-orbitron uppercase">
                  <TypingText text={item.title} />
                </h3>

                <p className="text-[15px] font-bold leading-[1.2] text-gray-300 mt-2">
                  {item.subtitle}
                </p>

                <span className="text-[#a39171] text-[12px] mt-3 block group-hover:text-white">
                  {item.linkText}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOGS */}
        <div id="blog">
          <BlockRevealText
            text="GOTHM BLOG_"
            textClassName="text-[#a39171] text-[13px] font-light font-sans tracking-[0.1em]"
          />

          <h2 className="text-[28px] font-bold font-orbitron uppercase mt-2 mb-10">
            <TypingText text="FEATURED BLOGS" />
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {blogs.map((item, index) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ImageReveal
                  image={item.image}
                  alt={item.title}
                  delay={(index + 3) * 200}
                  sectionInView={inView}
                />

                {/* 🔥 ORIGINAL TEXT (KEPT SAME) */}
                <BlockRevealText
                  text={item.eyebrow}
                  textClassName="text-[#a39171] text-[12px] mt-4 font-sans font-light tracking-[0.1em]"
                />

                <h3 className="mt-2 xl:text-[16px] text-[14px] font-bold font-orbitron uppercase">
                  <TypingText text={item.title} />
                </h3>

                <p className="text-[15px] font-bold leading-[1.2] text-gray-300 mt-2">
                  {item.subtitle}
                </p>

                <span className="text-[#a39171] text-[12px] mt-3 block group-hover:text-white">
                  COMING SOON -&gt;
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
