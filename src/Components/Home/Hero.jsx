import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaSpotify,
  FaPodcast,
  FaAmazon,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import cyber1 from "../../assets/images/cyber1.png";
import cyber2 from "../../assets/images/cyber2.png";

const slides = [
  {
    id: 4,
    isTitleSlide: true,
    title1: "GHOST",
    title2: "OF THE",
    title3: "MACHINE",
    subtitle: "THE THINGS YOU WATCH, ARE WATCHING YOU.",
  },
  {
    id: 1,
    subheading: "FOR THE UNINITIATED_",
    heading:
      "YOU CAME HERE WITH THE IDEA THAT WE COVER PLOT TWISTS IN MOVIES. THE PLOT TWIST IS WE COVER THE IDEAS IN THE FILMS THAT BROUGHT YOU HERE",
    paragraphs: [
      "Narrative can carry what plain language can't survive.",
      "GOTHM decrypts the messages safehoused inside entertainment.",
      "Truths, warnings, and questions hidden in the media we know and love.",
    ],
    buttons: [{ text: "GET INITIATED >>", link: "#" }],
  },
  {
    id: 2,
    subheading: "WELCOME BACK_",
    heading:
      "YOU ALREADY KNEW IT WAS MORE THAN A MOVIE. YOU JUST NEEDED SOMEWHERE YOUR THOUGHTS COULD ECHO BACK.",
    paragraphs: [
      "Credits rolled. Mind kept rolling.",
      "GOTHM is where the thoughts you couldn't quite place come back with a label.",
      "Organised to a fault. Obsessed with the details.",
    ],
    buttons: [
      { text: "SEE WHATS NEW>>", link: "#" },
      { text: "GET GHOST MAIL>>", link: "#" },
    ],
  },
  {
    id: 3,
    subheading: "POTENTIAL GUEST_",
    heading:
      "IF A STORY HAS EVER CHANGED THE WAY YOU SEE THE WORLD, WE SHOULD TALK. YOUR VOICE IS WELCOMED.",
    paragraphs: [
      'Some of the best conversations start with, "I can\'t stop thinking about this.."',
      "Whether you create stories, study them, or just can't let them go, there's a seat at the table.",
      "If you've ever looked at a story and seen something more, there's room at the window behind the fourth wall.",
    ],
    buttons: [{ text: "BE OUR NEXT GUEST >>", link: "#" }],
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative w-full bg-[#030303] flex items-start justify-center min-h-[128vh] lg:min-h-0 lg:h-[110vh] overflow-hidden lg:overflow-visible">
      {/* Social icons bar - made sticky so it stays visible */}
      <div className="sticky top-[50vh] -translate-y-1/2 h-0 right-6 z-50 hidden lg:flex flex-col gap-6 text-[#505050] self-start ml-auto">
        <SocialIcon icon={<FaYoutube size={20} />} />
        <SocialIcon icon={<FaSpotify size={20} />} />
        <SocialIcon icon={<FaPodcast size={20} />} />
        <SocialIcon icon={<FaAmazon size={20} />} />
        <SocialIcon icon={<FaInstagram size={20} />} />
        <SocialIcon icon={<FaTiktok size={20} />} />
        <SocialIcon icon={<FaXTwitter size={20} />} />
      </div>

      <div className="absolute inset-0 mx-auto flex flex-col lg:flex-row w-full max-w-7xl items-stretch justify-center px-6 lg:px-12 gap-10 md:gap-12 lg:gap-0">
        {/* Left Image Section */}
        <div className="flex w-full lg:w-1/2 justify-center lg:justify-end items-stretch z-10 relative">
          <div className="flex justify-center items-start gap-4 w-full max-w-[600px] h-full relative">
            {/* Cyber1 (Skull) is sticky and scrolls with you */}
            <div className=" z-20 h-fit mt-10">
            <motion.img
              src={cyber1}
              alt="Cyber 1"
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={{ 
                opacity: [0, 1, 0, 1, 0.5, 0.9], 
                x: [-20, 0, -10, 5, -5, 0], 
                filter: ["blur(10px)", "blur(0px)", "blur(5px)", "blur(0px)", "blur(0px)", "blur(0px)"] 
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="xl:w-[650px] lg:w-[350px] md:w-80 w-64 h-auto object-contain drop-shadow-[0_0_15px_rgba(100,180,255,0.1)]"
            />
            </div>
            
            <div className="z-10 h-fit sticky top-[4vh]">
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ 
                  opacity: [0, 1, 0, 1, 0.5, 1],
                  filter: ["blur(10px)", "blur(0px)", "blur(5px)", "blur(0px)", "blur(0px)", "blur(0px)"]
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.img
                  src={cyber2}
                  alt="Cyber 2"
                  initial={{
                    opacity: 0.9,
                    x: 0,
                    y: 0,
                    scale: 1,
                    filter: "drop-shadow(0px 0px 15px rgba(100,180,255,0.2))"
                  }}
                  animate={{
                    opacity: [1, 0.7, 1, 0.8, 1],
                    x: [0, -4, 4, -2, 0],
                    y: [0, 2, -2, 1, 0],
                    scale: [1, 1.01, 0.99, 1.01, 1],
                    filter: [
                      "drop-shadow(0px 0px 15px rgba(100,180,255,0.2))",
                      "drop-shadow(5px 0px 0px rgba(255,0,80,0.8)) drop-shadow(-5px 0px 0px rgba(0,255,255,0.8)) drop-shadow(0px 0px 25px rgba(100,180,255,0.6))",
                      "drop-shadow(-4px 3px 0px rgba(255,0,80,0.8)) drop-shadow(4px -3px 0px rgba(0,255,255,0.8)) drop-shadow(0px 0px 25px rgba(100,180,255,0.6))",
                      "drop-shadow(2px -2px 0px rgba(255,0,80,0.5)) drop-shadow(-2px 2px 0px rgba(0,255,255,0.5)) drop-shadow(0px 0px 15px rgba(100,180,255,0.3))",
                      "drop-shadow(0px 0px 15px rgba(100,180,255,0.2))"
                    ]
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "linear",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="xl:w-[650px] lg:w-[350px] md:w-80 w-56 h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Right Text Section */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-start h-full z-20 lg:-ml-12 xl:-ml-24 lg:pl-10">
          <div className="w-full flex flex-col justify-center relative top-[5vh] min-h-[450px] lg:mt-10">
            <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col justify-center items-start text-left w-full h-full"
            >
              {slides[currentSlide].isTitleSlide ? (
                <div className="flex flex-col justify-center items-start text-left w-full pl-0 lg:pl-8">
                  <h1 className="font-feonie leading-[0.9] font-normal lg:leading-[1] tracking-tight mb-4 lg:mb-4 overflow-hidden">
                    <AnimatedTypingText
                      text={slides[currentSlide].title1}
                      delay={0}
                    />
                    <AnimatedTypingText
                      text={slides[currentSlide].title2}
                      delay={0}
                    />
                    <AnimatedTypingText
                      text={slides[currentSlide].title3}
                      delay={0}
                    />
                  </h1>
                  <BlockRevealSubtitle
                    text={slides[currentSlide].subtitle}
                    delay={2.0}
                  />
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col w-full max-w-[550px] gap-4 lg:gap-5 lg:pl-6 bg-[#030303]/40 backdrop-blur-sm lg:backdrop-blur-none p-4 lg:p-0 rounded-xl lg:rounded-none"
                >
                  <h3 className="font-sans font-light tracking-[0.2em] text-[#a39171] text-[13px] tracking-[0em] font-extrabold uppercase">
                    {slides[currentSlide].subheading?.split('').map((char, i) => (
                      char === '_' ? (
                        <motion.span
                          key={i}
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        >
                          _
                        </motion.span>
                      ) : char
                    ))}
                  </h3>
                  <h2 className="font-michroma text-white text-[18px] lg:text-[22px] leading-[1.3] lg:leading-[1.4] uppercase mb-1">
                    {slides[currentSlide].heading}
                  </h2>
                  <div className="flex flex-col mb-4 lg:mb-2">
                    {slides[currentSlide].paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="font-sans text-[#d0d0d0] text-[14px] lg:text-[15px] font-normal leading-relaxed tracking-wide"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 lg:mb-4">
                    {slides[currentSlide].buttons.map((btn, idx) => (
                      <button
                        key={idx}
                        className="border border-[#a39171] text-[#a39171] bg-transparent hover:bg-[#a39171] hover:text-[#030303] transition-colors duration-300 font-sans text-[13px] font-light tracking-[0.1em] px-6 py-3 uppercase"
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="text-[#a39171] font-sans font-light tracking-[0.2em] text-[13px] tracking-[0em]  hover:text-white transition-colors flex items-center w-fit uppercase"
                  >
                    NEXT&gt;&gt;
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="flex items-center justify-center transition-colors hover:text-white"
  >
    {icon}
  </a>
);

const AnimatedTypingText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.05,
        staggerDirection: -1, // Staggers from right to left
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      className="block text-[45px] min-[400px]:text-[52px] sm:text-[60px] md:text-[80px] lg:text-[90px] font-extralight text-white whitespace-nowrap overflow-visible py-1 pr-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
const BlockRevealSubtitle = ({ text, delay = 0 }) => {
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
        staggerChildren: 0.03, // faster typing for subtitle
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
  };

  return (
    <div className="relative w-fit mt-2">
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        variants={blockVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.p
        className="font-michroma text-[10px] md:text-[12px] lg:text-[13px] font-bold tracking-[0em] text-[#a39171] uppercase whitespace-nowrap m-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => {
          if (char === "I") {
            return (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                <span className="tracking-[-0.15em] pr-[0.15em]">I</span>
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
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
};

export default Hero;
