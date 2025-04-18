'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from "next/image";

const testimonials = [
  {
    name: 'Sarah & John',
    role: 'Couple from USA',
    image: '/images/testimonials/couple-1.jpg',
    content: 'Our trip to India was absolutely magical! The team at Travel India made everything so seamless. From the moment we landed to our departure, every detail was perfectly planned.'
  },
  {
    name: 'Michael Chen',
    role: 'Solo Traveler',
    image: '/images/testimonials/solo-1.jpg',
    content: 'As a solo traveler, I was initially nervous about exploring India. Travel India\'s personalized itinerary and 24/7 support made me feel safe and confident throughout my journey.'
  },
  {
    name: 'The Smith Family',
    role: 'Family of 4',
    image: '/images/testimonials/family-1.jpg',
    content: 'Traveling with kids can be challenging, but Travel India made it a breeze. They understood our family\'s needs and created the perfect balance of adventure and comfort.'
  },
  {
    name: 'Emma Wilson',
    role: 'Adventure Seeker',
    image: '/images/testimonials/adventure-1.jpg',
    content: 'The trekking experience in the Himalayas was beyond amazing! Travel India\'s local guides were knowledgeable and made sure we had an authentic experience.'
  }
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from our happy travelers
          </p>
        </motion.div>

        <div className="relative">
          {/* Left Navigation Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
            </button>
          )}

          {/* Right Navigation Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-900" />
            </button>
          )}

          <div 
            ref={containerRef}
            onScroll={checkScrollButtons}
            className="overflow-x-hidden scroll-smooth"
          >
            <div className="flex gap-8 pb-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[350px] bg-gray-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog/kerala-hidden-gems" className="inline-block">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Read More Reviews
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 