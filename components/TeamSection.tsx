"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

const TeamSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const controls = useAnimation();
  const teamRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const teamMembers = [
    {
      name: 'Victor Susa',
      role: 'Founder & CEO',
      bio: 'PR strategist with 12+ years experience elevating African brands to global standards.',
      image: '/team/wanjiku.jpg',
    },
    {
      name: 'Kamau Ochieng',
      role: 'Creative Director',
      bio: 'Award-winning creative lead specializing in brand storytelling across Africa.',
      image: '/team/kamau.jpg',
    },
    {
      name: 'Amina Said',
      role: 'Digital Strategist',
      bio: 'Digital growth expert focused on measurable results and audience engagement.',
      image: '/team/amina.jpg',
    },
    {
      name: 'Joseph Kariuki',
      role: 'Media Relations',
      bio: 'Connects brands with Kenya\'s top media houses and influencers.',
      image: '/team/joseph.jpg',
    },
    {
      name: 'Grace Atieno',
      role: 'Account Director',
      bio: 'Client partnership specialist ensuring exceptional service delivery.',
      image: '/team/grace.jpg',
    },
    {
      name: 'David Mutua',
      role: 'Content Lead',
      bio: 'Storyteller crafting compelling narratives that resonate across cultures.',
      image: '/team/david.jpg',
    },
  ];

  const scrollToIndex = (index: number) => {
    if (teamRef.current) {
      const container = teamRef.current;
      const card = container.children[index] as HTMLElement;
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollPosition = cardWidth * index - (containerWidth - cardWidth) / 2;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % teamMembers.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    scrollToIndex(prevIndex);
  };

  return (
    <section ref={ref} className="bg-white py-20 overflow-hidden relative">
      {/* Floating decorative elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-[#84d028]/10 z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#6c9f14]/10 blur-lg z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-1 bg-[#84d028]/10 text-[#6c9f14] rounded-full text-sm font-medium">
              Our Team
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#092517] mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Meet The Creative</span>
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
            <span className="text-[#84d028]">Minds Behind Your Success</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A passionate team of PR experts, strategists, and storytellers dedicated to elevating your brand.
          </motion.p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#84d028' }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-[#6c9f14] text-white rounded-full items-center justify-center shadow-lg z-20"
            aria-label="Previous team member"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#84d028' }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-[#6c9f14] text-white rounded-full items-center justify-center shadow-lg z-20"
            aria-label="Next team member"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Team Members */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            ref={teamRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 -mx-4 px-4 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                className="flex-shrink-0 w-72 md:w-80 snap-center"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                    <div className="w-full h-full bg-gradient-to-br from-[#84d028] to-[#6c9f14] flex items-center justify-center">
                      <span className="text-white font-bold">Team Member Photo</span>
                    </div>
                    {/* Decorative shape */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        transition: {
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        },
                      }}
                      className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#84d028]/10 z-0"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <motion.h3 
                      whileHover={{ color: '#84d028' }}
                      className="text-2xl font-bold text-[#092517] mb-1"
                    >
                      {member.name}
                    </motion.h3>
                    <span className="inline-block px-3 py-1 bg-[#84d028]/10 text-[#6c9f14] rounded-full text-sm font-medium mb-3">
                      {member.role}
                    </span>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      {['X', 'LinkedIn', 'Instagram'].map((social, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          whileHover={{ scale: 1.1, color: '#84d028' }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full bg-[#84d028]/10 flex items-center justify-center text-[#092517]"
                        >
                          <span className="text-xs font-medium">{social}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation Dots */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex justify-center gap-2 mt-8 md:hidden"
        >
          {teamMembers.map((_, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#84d028]' : 'bg-gray-300'}`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;