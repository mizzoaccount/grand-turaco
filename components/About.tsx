"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

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
    hidden: { y: 30, opacity: 0 },
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

  return (
    <section ref={ref} className="bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="lg:w-1/2 relative z-10"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 bg-[#84d028]/10 text-[#6c9f14] rounded-full text-sm font-medium">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-[#092517] mb-6"
            >
              <span className="relative inline-block">
                <span className="relative z-10">Inspired by the</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={controls}
                  variants={{
                    visible: { scaleX: 1, transition: { delay: 0.4, duration: 0.8 } },
                  }}
                  className="absolute bottom-0 left-0 w-full h-3 bg-[#84d028]/40 -rotate-1 z-0"
                  style={{ bottom: '15%' }}
                />
              </span>
              <br />
              <span className="text-[#84d028]">Vibrant Turaco</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 mb-8"
            >
              Grand Turaco PR Agency is a Kenyan-based PR firm dedicated to helping brands soar. 
              Inspired by the vibrant turaco bird, we blend creativity with strategy to deliver 
              impactful stories that resonate with local and global audiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 mb-8"
            >
              From startups to corporates, we're here to elevate your brand with our unique, 
              Kenyan-rooted perspective.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4">
              <button className="px-6 py-3 bg-[#84d028] hover:bg-[#6c9f14] text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg">
                Our Services
              </button>
              <button className="px-6 py-3 border-2 border-[#092517] hover:border-[#6c9f14] text-[#092517] font-semibold rounded-full transition-all transform hover:scale-105">
                Meet The Team
              </button>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              custom={1}
              variants={shapeVariants}
              animate={controls}
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#84d028]/10 blur-xl z-0"
            />
            <motion.div
              custom={2}
              variants={shapeVariants}
              animate={controls}
              className="absolute -bottom-10 -right-10 w-40 h-40 rotate-45 bg-[#6c9f14]/10 z-0"
            />
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            className="lg:w-1/2 relative h-[400px] lg:h-[500px]"
          >
            {/* Main image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: 0.4 }
                },
              }}
              className="absolute top-0 left-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white"
            >
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-[#84d028] to-[#6c9f14] flex items-center justify-center">
                <span className="text-white font-bold text-xl">Our Team</span>
              </div>
            </motion.div>

            {/* Decorative shapes */}
            <motion.div
              custom={1}
              variants={shapeVariants}
              animate={controls}
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#84d028]/20 z-0"
            />
            <motion.div
              custom={2}
              variants={shapeVariants}
              animate={controls}
              className="absolute bottom-10 -left-10 w-32 h-32 rotate-12 bg-[#6c9f14]/20 z-0"
            />
            <motion.div
              custom={3}
              variants={shapeVariants}
              animate={controls}
              className="absolute top-1/4 -right-5 w-24 h-24 rounded-lg rotate-6 bg-[#092517]/10 z-0"
            />

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, 15, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#84d028]/10 blur-lg z-0"
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
              className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-[#6c9f14]/10 blur-lg z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;