import React from "react";
import { motion } from "framer-motion";
import gameimg1 from "../../assets/images/games-img (6).png";
import gameimg2 from "../../assets/images/games-img (5).png";
import gameimg3 from "../../assets/images/games-img (4).png";
import gameimg4 from "../../assets/images/games-img (3).png";
import gameimg5 from "../../assets/images/games-img (2).png";
import gameimg6 from "../../assets/images/games-img (1).png";

const episodes = [
  {
    id: "01",
    eyebrow: "THE MATRIX...",
    title: "THE SYSTEM IS AN ICEBERG",
    subtitle:
      "How Far Does The Rabbit Hole Go? A Doctor In Politics Breaks Down Every Layer.",
    linkText: "COMING SOON >>",
    image: gameimg1,
  },
  {
    id: "02",
    eyebrow: "THE BOYS...",
    title: "WHEN YOUR BOSS IS HOMELANDER",
    subtitle: "The Side Effects of Private Tyranny.",
    linkText: "COMING SOON >>",
    image: gameimg2,
  },
  {
    id: "03",
    eyebrow: "SEVERANCE...",
    title: "SEVERED BY DESIGN",
    subtitle:
      "An Interior Designer Dissects How Your Environment Controls Your Mind.",
    linkText: "COMING SOON >>",
    image: gameimg3,
  },
];

const blogs = [
  {
    id: "01",
    eyebrow: "GHOST IN THE SHELL...",
    title: "NOW WE CAN SEE FACE TO FACE",
    subtitle:
      "1996 Was a Dim Image in the Mirror. In 2026 We Can See Face to Face.",
    linkText: "COMING SOON >>",
    image: gameimg4,
  },
  {
    id: "02",
    eyebrow: "FIGHT CLUB...",
    title: "SELF IMPROVEMENT IS MASTURBATION. BUT SELF DESTRUCTION...",
    subtitle: "A self improvement thought experiment.",
    linkText: "COMING SOON >>",
    image: gameimg5,
  },
  {
    id: "03",
    eyebrow: "JOKER V FOR VENDETTA...",
    title: "MASKS OF RESISTANCE",
    subtitle: "When you're playing chess with a mask on.",
    linkText: "COMING SOON >>",
    image: gameimg6,
  },
];

const Section3 = () => {
  return (
    <section className="w-full bg-[#000000] py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-0">
        {/* FEATURED EPISODES SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
        >
          <BlockRevealText 
            text="COMING SOON..." 
            className="mb-2 block" 
            textClassName="font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171]" 
            delay={0.8}
          />
          <h2 className="mb-10 font-michroma text-[32px] font-bold uppercase tracking-wide text-white">
            <TypingText text="FEATURED EPISODES" delay={0.8} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {episodes.map((item, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={index}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {/* <div className="absolute bottom-[-15px] left-4 font-cinzel text-[90px] font-normal text-[#a39171] opacity-90 leading-none">
                    {item.id}
                  </div> */}
                </div>
                <div className="mt-6 flex flex-col pr-4">
                  <BlockRevealText 
                    text={item.eyebrow} 
                    className="block" 
                    textClassName="font-cinzel text-[12px] font-extrabold tracking-[0em] text-[#a39171] uppercase" 
                    delay={0.6 + (index * 0.15)}
                  />
                  <h3 className="mt-2 font-michroma text-[16px] font-bold leading-snug tracking-wide text-white uppercase">
                    <TypingText text={item.title} delay={0.6 + (index * 0.15)} />
                  </h3>
                  <p className="mt-3 font-sans text-[13px] font-bold leading-relaxed text-[#d4d4d4]">
                    {item.subtitle}
                  </p>
                  <span className="mt-4 font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase transition-colors group-hover:text-white">
                    {item.linkText}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FEATURED BLOGS SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
          }}
        >
          <BlockRevealText 
            text="GOTHM BLOG..." 
            className="mb-2 block" 
            textClassName="font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171]" 
            delay={0.8}
          />
          <h2 className="mb-10 font-michroma text-[32px] font-bold uppercase tracking-wide text-white">
            <TypingText text="FEATURED BLOGS" delay={0.8} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((item, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={index}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#0a0a0a]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {/* <div className="absolute bottom-[-15px] left-4 font-cinzel text-[90px] font-normal text-[#a39171] opacity-90 leading-none">
                    {item.id}
                  </div> */}
                </div>
                <div className="mt-6 flex flex-col pr-4">
                  <BlockRevealText 
                    text={item.eyebrow} 
                    className="block" 
                    textClassName="font-cinzel text-[12px] font-extrabold tracking-[0em] text-[#a39171] uppercase" 
                    delay={0.6 + (index * 0.15)}
                  />
                  <h3 className="mt-2 font-michroma text-[16px] font-bold leading-snug tracking-wide text-white uppercase">
                    <TypingText text={item.title} delay={0.6 + (index * 0.15)} />
                  </h3>
                  <p className="mt-3 font-sans text-[13px] font-bold leading-relaxed text-[#d4d4d4]">
                    {item.subtitle}
                  </p>
                  <span className="mt-4 font-cinzel text-[13px] font-extrabold tracking-[0em] text-[#a39171] uppercase transition-colors group-hover:text-white">
                    {item.linkText}
                  </span>
                </div>
              </motion.div>
            ))}
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

export default Section3;
