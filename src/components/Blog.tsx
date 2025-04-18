'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Top 10 Hidden Gems in Kerala',
    excerpt: 'Discover the lesser-known but equally stunning destinations in God\'s Own Country.',
    image: '/images/blog/kerala-gems.jpg',
    date: 'April 15, 2024',
    readTime: '5 min read',
    slug: 'kerala-hidden-gems'
  },
  {
    title: 'A Complete Guide to Rajasthan\'s Palaces',
    excerpt: 'Explore the majestic palaces and forts that tell the story of Rajasthan\'s royal heritage.',
    image: '/images/blog/rajasthan-palaces.jpg',
    date: 'April 10, 2024',
    readTime: '7 min read',
    slug: 'rajasthan-palaces'
  },
  {
    title: 'Sustainable Travel in India',
    excerpt: 'Learn how to travel responsibly while exploring India\'s diverse landscapes and cultures.',
    image: '/images/blog/sustainable-travel.jpg',
    date: 'April 5, 2024',
    readTime: '6 min read',
    slug: 'sustainable-travel'
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Stories & Guides
          </h2>
          <p className="text-xl text-gray-600">
            Insights and tips from our travel experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors">
                    Read More →
                  </button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog/kerala-hidden-gems">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              View All Articles
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 