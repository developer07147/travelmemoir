'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            ref={ref}
            style={{ y, opacity }}
            className="relative w-full h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/about.jpg"
              alt="Travel photographer capturing a sunset"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Journey Became Yours
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              We&apos;re just two passionate travelers who&apos;ve wandered through India&apos;s valleys, coasts, and cultural corridors. From cozy hidden gems to majestic wonders, we&apos;ve experienced it all — and now, we&apos;re bringing that knowledge to help you experience travel effortlessly.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you&apos;re a family, a couple, a solo wanderer, or a group of friends, we take care of the planning, so you can simply create memories.
            </p>
            
            <p className="text-lg font-medium text-white">
              No confusion. No chaos. Just unforgettable journeys.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Learn More About Us
              </button>
            </motion.div>

            <p className="text-lg text-gray-600 mb-8">
              I&apos;m passionate about capturing life&apos;s most precious moments through the lens of my camera. Whether it&apos;s the breathtaking landscapes of distant lands or the intimate details of local culture, I&apos;m always seeking to share authentic stories through my photography and writing.
            </p>

            <p className="text-lg text-gray-600">
              Let&apos;s embark on this journey together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 