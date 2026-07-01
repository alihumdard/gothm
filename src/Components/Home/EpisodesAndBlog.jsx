import React, { useMemo, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import episode1 from "../../assets/images/episode1.png";
import episode2 from "../../assets/images/episode2.png";
import episode3 from "../../assets/images/episode3.png";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

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
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.01 } },
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
            x: "105%",
            transition: { duration: 0.3, delay },
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

const ImageReveal = ({ image, alt, delay, sectionInView, number }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    if (!sectionInView) return;

    let cancelled = false;

    const runEntranceAndGlitch = async () => {
      if (cancelled) return;

      await controls.start({
        opacity: [0, 0.8, 0, 0.8, 0.4, 0.8],
        filter: [
          "brightness(0) drop-shadow(0 0 0px rgba(163,145,113,0))",
          "brightness(1.5) drop-shadow(0 0 20px rgba(163,145,113,0.8))",
          "brightness(0) drop-shadow(0 0 0px rgba(163,145,113,0))",
          "brightness(1.2) drop-shadow(0 0 10px rgba(163,145,113,0.4))",
          "brightness(0.5) drop-shadow(0 0 0px rgba(163,145,113,0))",
          "brightness(1) drop-shadow(0 0 0px rgba(163,145,113,0))"
        ],
        transition: { duration: 0.6, ease: "linear" }
      });
    };

    runEntranceAndGlitch();

    return () => { cancelled = true; };
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

      {/* Number Overlay */}
      {number && (
        <span className="absolute bottom-1 left-3 font-cinzel text-[50px] lg:text-[60px] font-normal text-[#a39171]/80 leading-none pointer-events-none drop-shadow-lg mix-blend-plus-lighter">
          {number}
        </span>
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-[22%] w-full bg-[#a39171]"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
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
    image: episode1,
  },
  {
    id: "02",
    eyebrow: "THE BOYS_",
    title: "WHEN YOUR BOSS IS HOMELANDER",
    subtitle: "The Side Effects of Private Tyranny.",
    linkText: "COMING SOON ->",
    image: episode2,
  },
  {
    id: "03",
    eyebrow: "SEVERANCE_",
    title: "SEVERED BY DESIGN",
    subtitle:
      "An Interior Designer Dissects How Your Environment Controls Your Mind.",
    linkText: "COMING SOON ->",
    image: episode3,
  },
];

const blogs = [
  {
    id: "01",
    eyebrow: "GHOST IN THE SHELL_",
    title: "NOW WE CAN SEE FACE TO FACE",
    subtitle:
      "1996 Was a Dim Image in the Mirror. In 2026 We Can See Face to Face.",
    image: blog1,
  },
  {
    id: "02",
    eyebrow: "FIGHT CLUB_",
    title: "SELF IMPROVEMENT IS MASTURBATION.",
    subtitle: "A self improvement thought experiment.",
    image: blog2,
  },
  {
    id: "03",
    eyebrow: "JOKER V FOR VENDETTA_",
    title: "MASKS OF RESISTANCE",
    subtitle: "When you're playing chess with a mask on.",
    image: blog3,
  },
];

/* ---------------- SECTION ---------------- */

const Section3 = () => {
  const episodesRef = useRef(null);
  const episodesInView = useInView(episodesRef, { once: true, margin: "-100px" });

  const blogRef = useRef(null);
  const blogInView = useInView(blogRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-black xl:py-16 py-6 text-white">
      <div className="mx-auto max-w-7xl flex flex-col gap-20 lg:gap-16 px-6">
        {/* EPISODES */}
        <div id="episodes" ref={episodesRef}>
          <BlockRevealText
            text="COMING SOON_"
            textClassName="text-[#a39171] text-[13px] font-light font-sans tracking-[0.1em]"
          />

          <h2 className="lg:text-[28px] text-[24px] font-bold font-orbitron uppercase mt-2 mb-4 lg:mb-10">
            <TypingText text="FEATURED EPISODES" />
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {episodes.map((item, index) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ImageReveal
                  image={item.image}
                  alt={item.title}
                  delay={index * 200}
                  sectionInView={episodesInView}
                  number={item.id}
                />

                {/* 🔥 ORIGINAL TEXT (KEPT SAME) */}
                <BlockRevealText
                  text={item.eyebrow}
                  textClassName="text-[#a39171] text-[12px] mt-4"
                />

                <h3 className="mt-2 lg:text-[16px] text-[14px] font-bold font-orbitron uppercase">
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
        <div id="blog" ref={blogRef}>
          <BlockRevealText
            text="GOTHM BLOG_"
            textClassName="text-[#a39171] text-[13px] font-light font-sans tracking-[0.1em]"
          />

          <h2 className="text-[24px] font-bold font-orbitron uppercase mt-2 mb-4 lg:mb-10">
            <TypingText text="FEATURED BLOGS" />
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {blogs.map((item, index) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ImageReveal
                  image={item.image}
                  alt={item.title}
                  delay={(index + 3) * 200}
                  sectionInView={blogInView}
                    number={item.id}
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
