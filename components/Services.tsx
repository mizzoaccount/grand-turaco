"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ServicesSection = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 },
    },
  };

  const services = [
    {
      title: 'Brand Strategy',
      description:
        'We craft compelling narratives that define your brand’s DNA and resonate deeply with your audience. Our Kenyan-rooted approach combines market insights with storytelling to position your brand for long-term success.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: '85% of brands see improved recognition within 6 months',
    },
    {
      title: 'Digital Strategy',
      description:
        'From social media to content ecosystems, we build digital presences that engage and convert. Our Nairobi-based team creates platform-perfect strategies tailored for the African digital landscape.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      stats: 'Average 3.2x increase in engagement rates',
    },
    {
      title: 'Media Liaison',
      description:
        'We open doors to Kenya’s top media houses and influencers. Our established relationships secure premium coverage that amplifies your brand’s voice across print, broadcast, and digital platforms.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      stats: '92% success rate in securing targeted media placements',
    },
    {
      title: 'Corporate Reputation',
      description:
        'We protect and enhance your corporate image through strategic thought leadership and stakeholder engagement programs that build trust across all your audiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: '78% of clients report improved stakeholder confidence',
    },
    {
      title: 'Creative Strategy',
      description:
        'Our award-winning creatives design campaigns that stop audiences in their tracks. From visual identity to multimedia storytelling, we make brands unforgettable.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      stats: 'Campaigns are 4.7x more memorable than industry average',
    },
    {
      title: 'Crisis Management',
      description:
        'When challenges arise, our rapid response team protects your reputation with strategic communication that mitigates damage and rebuilds trust.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      ),
      stats: 'Average 67% faster crisis resolution time',
    },
  ];

  return (
    <section ref={ref} className="bg-[#f8fafc] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-1 bg-[#84d028]/10 text-[#6c9f14] rounded-full text-sm font-medium">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-[#092517] mb-6"
          >
            <span className="relative inline-block">
              <span className="relative z-10">How We Elevate</span>
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
            <span className="text-[#84d028]">Your Brand</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We combine Kenyan creativity with global PR excellence to deliver results that matter.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 overflow-hidden relative"
            >
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
                className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-[#84d028]/5 z-0"
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#84d028]/10 text-[#84d028] flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#092517] mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#84d028]"></div>
                  <span className="text-sm font-medium text-[#6c9f14]">
                    {service.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
          className="absolute left-1/4 top-1/3 w-16 h-16 rounded-full bg-[#84d028]/10 blur-lg"
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
          className="absolute right-1/4 bottom-1/4 w-24 h-24 rounded-full bg-[#6c9f14]/10 blur-lg"
        />
      </div>
    </section>
  );
};

export default ServicesSection;