import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
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
import cyber1 from "../../assets/images/left.png";
import cyber2 from "../../assets/images/right.png";

// ─── Constants ───────────────────────────────────────────────────────────────

const SLIDES = [
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

const SOCIAL_ICONS = [
  FaYoutube,
  FaSpotify,
  FaPodcast,
  FaAmazon,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const cyber1Variants = {
  hidden: { opacity: 0, filter: "brightness(0)" },
  visible: {
    opacity: [0, 1, 0, 1, 0.4, 0.9, 0.6, 1],
    filter: [
      "brightness(0)", "brightness(1.5)", "brightness(0)", "brightness(1.2)",
      "brightness(0.5)", "brightness(1.1)", "brightness(0.8)", "brightness(1)",
    ],
    transition: {
      duration: 0.6,
      ease: "linear",
      times: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    },
  },
};

const cyber2Variants = {
  hidden: { opacity: 0, filter: "brightness(0)" },
  visible: {
    opacity: [0, 1, 0, 1, 0.3, 0.8, 0.5, 1],
    filter: [
      "brightness(0)", "brightness(1.8)", "brightness(0)", "brightness(1.5)",
      "brightness(0.4)", "brightness(1.2)", "brightness(0.7)", "brightness(1)",
    ],
    transition: {
      duration: 0.6,
      ease: "linear",
      delay: 0.3,
      times: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    },
  },
};


const textSectionVariants = {
  hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 2, ease: "easeOut", delay: 0.5 },
  },
};

const socialBarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 2.2 },
  },
};

const slideTransition = { duration: 0.8, ease: "easeOut" };

const desktopSlideVariants = {
  initial: { opacity: 0, x: 30, filter: "blur(10px)", scale: 1 },
  animate: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { opacity: 0, x: -30, filter: "blur(10px)", scale: 1 },
};

const mobileSlideVariants = {
  initial: { opacity: 0, x: 0, filter: "blur(10px)", scale: 0.90 },
  animate: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)", 
    scale: [0.95, 1.01, 0.98],
    transition: { 
      opacity: { duration: 1.2, ease: "easeOut" },
      x: { duration: 1.2, ease: "easeOut" },
      filter: { duration: 1.2, ease: "easeOut" },
      scale: {
        duration: 4.8, 
        ease: "easeInOut", 
        times: [0, 0.85, 1]
      }
    }
  },
  exit: { opacity: 0, x: 0, filter: "blur(10px)", scale: 0.95 },
};

const typingContainerVariants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.006, // fast typing speed
    },
  },
  exit: { opacity: 1 },
};

const letterTypingVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.01 } },
  exit: { opacity: 0 },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const AnimatedText = React.memo(({ text }) => (
  <>
    {Array.from(text).map((char, index) => (
      <motion.span key={index} variants={letterTypingVariants}>
        {char}
      </motion.span>
    ))}
  </>
));
AnimatedText.displayName = "AnimatedText";

const SocialIcon = React.memo(({ Icon }) => (
  <a href="#" className="flex items-center justify-center transition-colors hover:text-white text-[14px] lg:text-[22px]">
    <Icon size="1em" />
  </a>
));
SocialIcon.displayName = "SocialIcon";

const BlinkingUnderscore = React.memo(() => (
  <motion.span
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
  >
    _
  </motion.span>
));
BlinkingUnderscore.displayName = "BlinkingUnderscore";

// Scattered Random Typing Effect
const RandomRevealText = React.memo(({ text, delay = 0, className = "" }) => {
  const letters = Array.from(text);
  
  // Calculate a random delay for each letter to make them pop up randomly across all lines
  const delays = useMemo(() => {
    return letters.map(() => Math.random() * 1.5);
  }, [letters]);

  return (
    <span
      className={`block font-extralight text-white whitespace-nowrap overflow-visible py-1 sm:pr-4 ${className}`}
      style={{ fontSize: "clamp(2.2rem, 11vw, 6.5625rem)" }}
    >
      {letters.map((char, index) => {
        if (char === " ") return " ";
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2, // instant pop like a typing effect
              delay: delay + delays[index],
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
});
RandomRevealText.displayName = "RandomRevealText";

// Colored band block reveal followed by fast typing from the left
const BlockRevealTypingSubtitle = React.memo(({ text, delay = 0, className = "" }) => {
  const letters = Array.from(text);

  const blockVariants = {
    hidden: { left: "0%", right: "100%" },
    visible: {
      left: ["0%", "0%", "100%"],
      right: ["100%", "0%", "0%"],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.1, 0.5],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay + 0.1, // start typing exactly when block starts sweeping right
        staggerChildren: 0.015, // fast typing speed to match sweep
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.9 } },
  };

  return (
    <div className={`relative w-full sm:w-fit mt-0 ${className}`}>
      <motion.div
        className="absolute top-0 bottom-0 bg-[#a39171] z-10"
        variants={blockVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.p
        className="font-michroma text-[12px] sm:text-[13.5px] md:text-[11px] lg:text-[13px] font-bold text-[#a39171] uppercase tracking-[0.1em] md:tracking-widest m-0 relative pr-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => {
          if (char === " ") return <span key={index} className="whitespace-pre"> </span>;
          return (
            <motion.span
              key={index}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
});
BlockRevealTypingSubtitle.displayName = "BlockRevealTypingSubtitle";

const SubheadingText = React.memo(({ text }) => (
  <h3 className="font-sans font-light tracking-[0.15em] lg:tracking-[0.2em] leading-tighter lg:leading-normal text-[#a39171] text-[12px] md:text-[13px] uppercase">
    {text.split("").map((char, i) =>
      char === "_" ? (
        <motion.span key={i} variants={letterTypingVariants}>
          <BlinkingUnderscore />
        </motion.span>
      ) : (
        <motion.span key={i} variants={letterTypingVariants}>
          {char}
        </motion.span>
      )
    )}
  </h3>
));
SubheadingText.displayName = "SubheadingText";

const SlideButtons = React.memo(({ buttons }) => (
  <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-start flex-nowrap gap-4 sm:gap-4 mb-2 lg:mb-4 w-full sm:w-max">
    {buttons.map((btn, idx) => (
      <button
        key={idx}
        className="w-max sm:w-auto text-center whitespace-nowrap border border-[#a39171] text-[#a39171] bg-transparent hover:bg-[#a39171] hover:text-[#030303] transition-colors duration-300 font-sans text-[13px] sm:text-[11px] lg:text-[13px] font-light tracking-[0.1em] px-6 py-3 sm:px-3 sm:py-2 lg:px-6 lg:py-3 uppercase"
      >
        {btn.text}
      </button>
    ))}
  </div>
));
SlideButtons.displayName = "SlideButtons";

// ─── Main Component ──────────────────────────────────────────────────────────

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setPageLoaded(true);
    const initialTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 4000); // After initial load delay (1.75s) + animation (1.5s), we can safely set to false
    return () => clearTimeout(initialTimer);
  }, []);



  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    startTimer();
  }, [startTimer]);

  const slide = SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full bg-[#030303] flex items-start justify-center min-h-[115vh] lg:min-h-0 lg:h-[97vh] overflow-hidden lg:overflow-visible"
    >
      {/* Social icons bar */}
      <motion.div
        variants={socialBarVariants}
        initial="hidden"
        animate={pageLoaded ? "visible" : "hidden"}
        className="absolute top-[40%] lg:top-70 -translate-y-1/2 right-2 lg:right-6 z-50 hidden sm:flex flex-col gap-2 lg:gap-3 text-[#505050]"
      >
        {SOCIAL_ICONS.map((Icon, i) => (
          <SocialIcon key={i} Icon={Icon} />
        ))}
      </motion.div>

      <div className="absolute inset-0 mx-auto flex flex-col sm:flex-row w-full max-w-7xl items-center sm:items-stretch justify-center px-0 sm:px-1 md:px-6 lg:px-12 gap-0">

        {/* Left Image Section */}
        <div className="flex w-full sm:w-1/2 justify-center sm:justify-end items-stretch z-10 absolute sm:relative inset-0 sm:inset-auto -mr-0 sm:-mr-8 md:-mr-16 lg:-mr-[100px] xl:-mr-[100px] opacity-70 sm:opacity-100 pointer-events-none sm:pointer-events-auto">
          <div className="flex justify-center sm:justify-end items-start gap-0 w-full max-w-none h-full relative">

            {/* cyber1 */}
            <div className="z-20 h-fit mt-40 sm:mt-22 md:mt-10 lg:mt-10">
              <motion.img
                src={cyber1}
                alt="Cyber 1"
                variants={cyber1Variants}
                initial="hidden"
                animate={pageLoaded ? "visible" : "hidden"}
                className="xl:w-[600px] lg:w-[220px] md:w-56 sm:w-[200px] w-[100px] h-auto object-contain drop-shadow-[0_0_15px_rgba(100,180,255,0.1)]"
              />
            </div>

            {/* cyber2 */}
            <div className="z-10 lg:sticky lg:top-[19.7vh] top-[5vh] sm:top-[13vh]  sm:-ml-0">
              <motion.div
                variants={cyber2Variants}
                initial="hidden"
                animate={pageLoaded ? "visible" : "hidden"}
              >
                <motion.img
                  src={cyber2}
                  alt="Cyber 2"
                  className="xl:w-[600px] lg:w-[450px] md:w-80 sm:w-[200px] w-[280px] h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <motion.div
          variants={textSectionVariants}
          initial="hidden"
          animate={pageLoaded ? "visible" : "hidden"}
          className="relative w-full sm:w-1/2 flex flex-col justify-start h-full z-20 px-6 sm:px-0 sm:-ml-2 md:-ml-6 lg:-ml-12 xl:-ml-24 lg:pl-10 pointer-events-auto"
        >
          <div className="w-full flex flex-col justify-center relative top-[5vh] min-h-[240px] lg:min-h-[450px] mt-44 lg:mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={slideTransition}
                className="absolute inset-0 flex flex-col justify-center items-start text-left w-full h-full"
              >
                {slide.isTitleSlide ? (
                  <div className="flex flex-col justify-center items-start text-left w-full px-0 sm:px-0 sm:pl-2 lg:pl-8 mt-[20vh] sm:mt-0">
                    <h1 className="font-feonie leading-[0.9] font-normal lg:leading-[1] tracking-tight overflow-hidden w-full">
                      {/* Scattered Random Typing Effect */}
                      <RandomRevealText text={slide.title1} delay={isInitialLoad ? 1.5 : 0} className="text-left" />
                      <RandomRevealText text={slide.title2} delay={isInitialLoad ? 1.25 : 0} className="text-left" />
                      <RandomRevealText text={slide.title3} delay={isInitialLoad ? 1.5 : 0} className="text-left" />
                    </h1>
                    {/* Colored Band Block Reveal with Fast Typing Subtitle */}
                    <BlockRevealTypingSubtitle text={slide.subtitle} delay={isInitialLoad ? 1.5 + 1.25 : 1.5} className="mt-3 sm:mt-0" />
                  </div>
                ) : (
                  <motion.div
                    variants={isMobile ? mobileSlideVariants : desktopSlideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-col w-full max-w-[calc(100vw-3rem)] sm:max-w-[550px] gap-2 md:gap-4 lg:gap-5 pl-1 lg:pl-6 bg-transparent lg:bg-transparent backdrop-blur-none p-1 lg:p-0 rounded-none mt-[45vh] sm:mt-0"
                  >
                    <motion.div variants={typingContainerVariants}>
                      <SubheadingText text={slide.subheading} />

                      <h2 className="font-michroma text-white text-[16px] md:text-[15px] lg:text-[22px] leading-[1.2] lg:leading-[1.4] uppercase mb-1 mt-1">
                        <AnimatedText text={slide.heading} />
                      </h2>
                    </motion.div>

                    <div className="flex flex-col gap-3 sm:gap-0 mb-6 lg:mb-2 mt-2">
                      {slide.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="font-sans text-[#e0e0e0] text-[13px] md:text-[15px] font-medium sm:font-normal leading-[1.4] lg:leading-relaxed tracking-wide text-left"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    <SlideButtons buttons={slide.buttons} />

                    <button
                      onClick={handleNext}
                      className="text-[#a39171] font-sans font-light tracking-[0.2em] text-[12px] lg:text-[13px] hover:text-white transition-colors flex items-center w-fit uppercase"
                    >
                      NEXT&gt;&gt;
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;