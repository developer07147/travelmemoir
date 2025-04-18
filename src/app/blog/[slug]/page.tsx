import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

// Blog post data
const blogPosts = {
  'kerala-hidden-gems': {
    title: 'Top 10 Hidden Gems in Kerala',
    date: 'April 15, 2024',
    readTime: '5 min read',
    image: '/images/blog/kerala-gems.jpg',
    content: `
      <article class="text-gray-700">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Top 10 Hidden Gems in Kerala: Beyond the Backwaters</h1>
        
        <p class="mb-8">Kerala, often called God's Own Country, is renowned for its backwaters and beaches. However, this southern Indian state harbors countless lesser-known treasures waiting to be discovered. Join us as we unveil ten spectacular destinations that often escape the typical tourist radar.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Silent Valley National Park</h2>
        <p class="mb-8">Nestled in the Nilgiri hills, Silent Valley is one of the last undisturbed tracts of South Western Ghats rain forests. Home to the endangered lion-tailed macaque, this pristine ecosystem offers a glimpse into a world untouched by human interference.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Gavi Eco-Tourism</h2>
        <p class="mb-8">A hidden paradise in Pathanamthitta, Gavi offers a unique blend of wildlife experiences, trekking trails, and camping opportunities. The morning mist rolling over the cardamom plantations creates an ethereal atmosphere that photographers will love.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Thusharagiri Falls</h2>
        <p class="mb-8">Located in Kozhikode, these three magnificent waterfalls offer excellent trekking opportunities and stunning views. The name literally means 'snow-capped mountains,' referring to the white spray of the cascading waters.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Nelliyampathy Hills</h2>
        <p class="mb-8">Often overshadowed by Munnar, Nelliyampathy offers equally stunning views without the crowds. The bio-organic orange farms and coffee plantations make it a unique destination for agri-tourism.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Kalaripayattu Centers in Kannur</h2>
        <p class="mb-8">Experience the ancient martial art form of Kerala in its authentic setting. These traditional training centers offer demonstrations and short courses for interested travelers.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Ashtamudi Lake</h2>
        <p class="mb-8">While Vembanad gets all the attention, Ashtamudi offers a more intimate backwater experience. The eight-armed lake system provides excellent opportunities for houseboat stays away from the tourist crowds.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Ranipuram</h2>
        <p class="mb-8">Known as the 'Ooty of Kerala,' this hill station in Kasaragod offers pristine grasslands, shola forests, and excellent hiking opportunities. The biodiversity here is remarkable yet rarely explored.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">8. Muziris Heritage Site</h2>
        <p class="mb-8">This ancient port city tells tales of Kerala's trade relations with Romans, Arabs, and Chinese. The archaeological findings and restored buildings offer fascinating insights into history.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">9. Thattekad Bird Sanctuary</h2>
        <p class="mb-8">Dr. Salim Ali described it as the richest bird habitat in peninsular India. Home to over 250 species of birds, it's a paradise for birdwatchers and nature photographers.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">10. Kanthaloor</h2>
        <p class="mb-8">Famous for its apple orchards and organic farming practices, this village offers a unique agricultural tourism experience in Kerala. The cool climate supports the cultivation of various temperate fruits.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Planning Your Visit</h2>
        <p class="mb-8">The best time to explore these hidden gems is during the winter months (October to February) when the weather is pleasant. Many of these locations require advance planning and local guidance. Our team at Travel India can help you create a customized itinerary that includes these off-beat destinations while ensuring comfortable accommodations and reliable transportation.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Responsible Tourism</h2>
        <p class="mb-8">As these locations are relatively untouched by mass tourism, it's crucial to practice responsible travel. Respect local customs, avoid plastic usage, and support local communities through your travel choices.</p>

        <p class="mb-8">Ready to explore these hidden gems? Contact us to plan your unique Kerala adventure that goes beyond the usual tourist trail.</p>
      </article>
    `,
    metaDescription: 'Discover 10 lesser-known but equally stunning destinations in Kerala, India. From hidden waterfalls to pristine forests, explore the unexplored side of God\'s Own Country.',
    keywords: 'Kerala tourism, hidden gems in Kerala, offbeat Kerala destinations, Kerala travel guide, Silent Valley, Gavi, Kerala wildlife, Kerala hills'
  },
  'rajasthan-palaces': {
    title: 'A Complete Guide to Rajasthan\'s Palaces',
    date: 'April 10, 2024',
    readTime: '7 min read',
    image: '/images/blog/rajasthan-palaces.jpg',
    content: `
      <article class="text-gray-700">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Royal Rajasthan: A Complete Guide to the Most Magnificent Palaces</h1>

        <p class="mb-8">Rajasthan's palaces stand as testament to India's royal heritage, each telling its own story of valor, romance, and architectural brilliance. This comprehensive guide takes you through the most spectacular palaces, their historical significance, and how to best experience their grandeur.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">City Palace, Udaipur</h2>
        <p class="mb-8">The largest palace complex in Rajasthan, the City Palace in Udaipur is a magnificent blend of Rajasthani, Mughal, European, and Chinese architecture. Built over 400 years, it offers panoramic views of Lake Pichola and houses museums showcasing royal artifacts.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Amber Fort-Palace, Jaipur</h2>
        <p class="mb-8">This UNESCO World Heritage site combines stunning red sandstone and marble architecture. The Sheesh Mahal (Mirror Palace) is its crown jewel, where a single candle can illuminate the entire room through thousands of mirror pieces.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Umaid Bhawan Palace, Jodhpur</h2>
        <p class="mb-8">One of the world's largest private residences, this Art Deco marvel was built in the 20th century. Part hotel, part museum, and part royal residence, it offers unparalleled luxury and historical insights.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Architectural Marvels and Historical Significance</h2>
        <p class="mb-8">These palaces showcase various architectural styles:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Indo-Saracenic Revival architecture</li>
          <li>Traditional Rajput architecture</li>
          <li>Mughal influences</li>
          <li>European colonial elements</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Best Time to Visit</h2>
        <p class="mb-8">October to March offers the most pleasant weather for exploring these palaces. Many palaces are illuminated during evening hours, creating magical photo opportunities.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Practical Tips for Palace Tours</h2>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Book guided tours for historical context</li>
          <li>Visit early morning to avoid crowds</li>
          <li>Respect dress codes and photography rules</li>
          <li>Consider staying in palace hotels for the complete royal experience</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Conservation and Modern Usage</h2>
        <p class="mb-8">Many palaces now serve as:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Heritage hotels</li>
          <li>Museums</li>
          <li>Cultural centers</li>
          <li>Wedding venues</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Planning Your Palace Tour</h2>
        <p class="mb-8">Let us help you create a customized itinerary that covers these magnificent palaces while ensuring comfortable accommodations and expert guides who can bring these historical monuments to life.</p>
      </article>
    `,
    metaDescription: 'Explore the magnificent palaces of Rajasthan with our comprehensive guide. Learn about their history, architecture, and how to best experience their grandeur.',
    keywords: 'Rajasthan palaces, Indian palaces, royal heritage India, palace tours, Udaipur City Palace, Amber Fort, Umaid Bhawan'
  },
  'sustainable-travel': {
    title: 'Sustainable Travel in India',
    date: 'April 5, 2024',
    readTime: '6 min read',
    image: '/images/blog/sustainable-travel.jpg',
    content: `
      <article class="text-gray-700">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Sustainable Travel in India: A Comprehensive Guide to Responsible Tourism</h1>

        <p class="mb-8">As global awareness about environmental conservation grows, sustainable travel has become more important than ever. India, with its rich biodiversity and cultural heritage, offers numerous opportunities for responsible tourism. Here's your guide to exploring India while minimizing your environmental impact.</p>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Understanding Sustainable Travel</h2>
        <p class="mb-8">Sustainable travel encompasses:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Environmental conservation</li>
          <li>Cultural preservation</li>
          <li>Economic support for local communities</li>
          <li>Responsible resource usage</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Eco-Friendly Accommodations</h2>
        <p class="mb-8">India offers various sustainable staying options:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Eco-lodges in wildlife sanctuaries</li>
          <li>Organic farm stays</li>
          <li>Community-run guesthouses</li>
          <li>Heritage hotels with sustainable practices</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Supporting Local Communities</h2>
        <p class="mb-8">Ways to contribute to local economies:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Choose locally-owned accommodations</li>
          <li>Buy directly from artisans</li>
          <li>Participate in community-based tourism</li>
          <li>Use local guides</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Sustainable Transportation</h2>
        <p class="mb-8">Minimize your carbon footprint:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Use public transportation when possible</li>
          <li>Choose trains over flights for long distances</li>
          <li>Walk or cycle in cities</li>
          <li>Share vehicles during tours</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Responsible Wildlife Tourism</h2>
        <p class="mb-8">Guidelines for ethical wildlife encounters:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Choose certified wildlife tours</li>
          <li>Maintain safe distances from animals</li>
          <li>Never feed wildlife</li>
          <li>Follow park rules strictly</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Cultural Sensitivity</h2>
        <p class="mb-8">Tips for respectful cultural interaction:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Learn basic local phrases</li>
          <li>Dress appropriately</li>
          <li>Ask permission before photographing people</li>
          <li>Participate in local customs respectfully</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Waste Management While Traveling</h2>
        <p class="mb-8">Practical tips:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Carry a reusable water bottle</li>
          <li>Say no to plastic bags</li>
          <li>Dispose of waste properly</li>
          <li>Use eco-friendly products</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Sustainable Travel Destinations in India</h2>
        <p class="mb-8">Some notable examples:</p>
        <ul class="list-disc pl-6 mb-8 space-y-2 text-gray-700">
          <li>Spiti Valley's eco-tourism</li>
          <li>Kerala's responsible tourism initiative</li>
          <li>Sikkim's organic farming tourism</li>
          <li>Ladakh's community-based tourism</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Planning Your Sustainable Journey</h2>
        <p class="mb-8">Let us help you create an eco-friendly travel itinerary that allows you to explore India responsibly while making a positive impact on local communities and the environment.</p>
      </article>
    `,
    metaDescription: 'Learn how to travel sustainably in India with our comprehensive guide to eco-friendly tourism, responsible wildlife viewing, and supporting local communities.',
    keywords: 'sustainable travel India, eco-friendly tourism, responsible travel, Indian culture, environmental conservation, community tourism'
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-28 pb-20">
        {/* Hero Image Section - Wider than content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-8 sm:px-12 py-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center text-sm text-gray-500 mb-12 border-b border-gray-100 pb-8">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 
                  prose-headings:font-bold 
                  prose-h1:text-4xl 
                  prose-h1:mb-8
                  prose-h2:text-2xl 
                  prose-h2:mt-12 
                  prose-h2:mb-6
                  prose-p:text-gray-700 
                  prose-p:leading-relaxed 
                  prose-p:mb-8
                  prose-a:text-blue-600 
                  prose-a:no-underline 
                  prose-a:font-medium
                  prose-strong:text-gray-900 
                  prose-strong:font-semibold
                  prose-blockquote:text-gray-700 
                  prose-blockquote:border-l-4
                  prose-blockquote:border-gray-200 
                  prose-blockquote:bg-gray-50 
                  prose-blockquote:p-6 
                  prose-blockquote:rounded-lg
                  prose-blockquote:my-8
                  prose-ul:my-8
                  prose-li:text-gray-700
                  prose-li:mb-3
                  prose-img:rounded-xl 
                  prose-img:my-12
                  prose-hr:border-gray-100
                  space-y-8"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/#blog" className="inline-block">
              <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors text-lg">
                ← Back to Articles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 