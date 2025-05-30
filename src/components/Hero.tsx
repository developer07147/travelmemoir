'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const videos = ['/videos/hero1.mp4', '/videos/hero2.mp4'];

  useEffect(() => {
    const videos = videoRefs.current;
    if (!videos.length) return;

    const playNextVideo = () => {
      const currentVideo = videos[currentVideoIndex];
      if (currentVideo) {
        currentVideo.pause();
      }

      const nextIndex = (currentVideoIndex + 1) % videos.length;
      const nextVideo = videos[nextIndex];
      if (nextVideo) {
        nextVideo.currentTime = 0;
        nextVideo.play().catch(console.error);
      }

      setCurrentVideoIndex(nextIndex);
    };

    const currentVideo = videos[currentVideoIndex];
    if (currentVideo) {
      currentVideo.addEventListener("ended", playNextVideo);
      return () => {
        currentVideo.removeEventListener("ended", playNextVideo);
      };
    }
  }, [currentVideoIndex, videos.length]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <motion.div
            key={video}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentVideoIndex === index ? 1 : 0,
              transition: { duration: 1 }
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el as HTMLVideoElement;
              }}
              className="w-full h-full object-cover"
              playsInline
              muted
              autoPlay={index === 0}
              loop={false}
            >
              <source src={video} type="video/mp4" />
            </video>
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Discover the World&apos;s Hidden Gems
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            We're two travel enthusiasts helping you explore India like never before — beautifully planned, so you only focus on the experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-opacity-90"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-1 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 