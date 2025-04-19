"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const carouselRef = useRef<HTMLDivElement>(null);

  // Dummy images for the carousel
  const images = [
    '/dummy/kenya-landscape.jpg',
    '/dummy/team-meeting.jpg',
    '/dummy/media-event.jpg',
    '/dummy/brand-strategy.jpg',
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '100%',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animate when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#092517] text-white"
    >
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:w-1/2 z-10"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#84d028] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#092517]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="font-medium text-[#6c9f14]">Grand Turaco PR</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Soaring Stories,</span>
              <motion.span
                variants={underlineVariants}
                className="absolute bottom-0 left-0 h-3 bg-[#84d028] z-0"
                style={{ bottom: '10%' }}
              />
            </span>
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Grounded Impact.</span>
              <motion.span
                variants={underlineVariants}
                className="absolute bottom-0 left-0 h-3 bg-[#6c9f14] z-0"
                style={{ bottom: '10%' }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 max-w-lg"
          >
            Elevate your brand with our Kenyan-rooted PR strategies that blend
            creativity with measurable results.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <button className="px-8 py-3 bg-[#84d028] hover:bg-[#6c9f14] text-[#092517] font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
            <button className="px-8 py-3 border-2 border-[#84d028] hover:border-[#6c9f14] text-white font-semibold rounded-full transition-all transform hover:scale-105">
              Our Services
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-6"
          >
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={shapeVariants}
                animate={controls}
                className={`w-12 h-12 rounded-full ${
                  i % 2 === 0 ? 'bg-[#84d028]' : 'bg-[#6c9f14]'
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          ref={carouselRef}
          className="md:w-1/2 relative h-[400px] md:h-[600px]"
          initial="hidden"
          animate={controls}
        >
          {/* Background shapes */}
          <motion.div
            custom={1}
            variants={shapeVariants}
            className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#84d028]/20 blur-xl"
          />
          <motion.div
            custom={2}
            variants={shapeVariants}
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#6c9f14]/20 blur-xl"
          />
          <motion.div
            custom={3}
            variants={shapeVariants}
            className="absolute top-1/4 right-1/4 w-48 h-48 rotate-45 bg-[#84d028]/10"
          />

          {/* Carousel images with different shapes */}
          <AnimatePresence mode="wait">
            {images.map((img, index) => (
              currentSlide === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.8, ease: 'easeInOut' }
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  className={`absolute ${
                    index % 4 === 0
                      ? 'top-10 left-10 w-64 h-64 rounded-full'
                      : index % 3 === 0
                      ? 'top-20 right-20 w-72 h-56 rounded-3xl rotate-6'
                      : index % 2 === 0
                      ? 'bottom-10 left-20 w-60 h-60 rounded-lg rotate-12'
                      : 'bottom-20 right-10 w-56 h-72 rounded-full rotate-3'
                  } overflow-hidden shadow-2xl`}
                  style={{
                    zIndex: 10 + index,
                    border: '4px solid white',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="w-full h-full bg-gray-200 animate-pulse">
                    {/* Replace with actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#84d028] to-[#6c9f14] flex items-center justify-center">
                      <span className="text-[#092517] font-bold text-lg">Image {index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#84d028]/30 blur-lg"
      />
      <motion.div
        animate={{
          y: [15, 0, 15],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          },
        }}
        className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-[#6c9f14]/20 blur-lg"
      />
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-[#84d028]/30 rounded-full"
      />
    </section>
  );
};

export default HeroSection;
