'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const destinations = [
  {
    name: 'Kerala',
    image: '/images/destinations/kerala.jpg',
    description: 'God\'s Own Country',
  },
  {
    name: 'Rajasthan',
    image: '/images/destinations/rajasthan.jpg',
    description: 'Land of Kings',
  },
  {
    name: 'Goa',
    image: '/images/destinations/goa.jpg',
    description: 'Beach Paradise',
  },
  {
    name: 'Himachal Pradesh',
    image: '/images/destinations/himachal.jpg',
    description: 'Mountain Majesty',
  },
  {
    name: 'Tamil Nadu',
    image: '/images/destinations/tamil-nadu.jpg',
    description: 'Cultural Heritage',
  },
  {
    name: 'Uttarakhand',
    image: '/images/destinations/uttarakhand.jpg',
    description: 'Spiritual Heights',
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore India's Wonders
          </h2>
          <p className="text-xl text-gray-600">
            Discover the diverse beauty of India through our curated destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {destination.name}
                </h3>
                <p className="text-white/90">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations; 