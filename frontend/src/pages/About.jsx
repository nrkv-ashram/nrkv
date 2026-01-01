import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-900">About Us</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* History Section */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-orange-900">History of Natagarh Ramakrishna Vivekananda Ashram</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The Natagarh Ramakrishna Vivekananda Ashram was established with the noble vision of spreading the universal teachings of Sri Ramakrishna Paramhansa and Swami Vivekananda. Founded by devoted spiritual seekers, the ashram has grown into a vibrant center for spiritual practice and community service.
              </p>
              <p>
                Over the years, the ashram has touched countless lives through its various activities including daily worship, meditation sessions, educational programs, and social welfare initiatives. The ashram stands as a testament to the timeless wisdom of our spiritual masters.
              </p>
              <p>
                Located in the serene town of Natagarh, the ashram provides a peaceful sanctuary where seekers can delve deep into spiritual practices, away from the hustle and bustle of modern life. The campus includes a main temple, meditation hall, library, and residential facilities for devotees and visitors.
              </p>
            </div>
          </div>
        </section>

        {/* Sri Ramakrishna Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="/images/thakur.jpg" 
                alt="Sri Ramakrishna Paramhansa" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-6 text-orange-900">Sri Ramakrishna Paramhansa</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Sri Ramakrishna (1836-1886) was a great Indian mystic and spiritual master whose teachings emphasized the harmony of all religions. He realized God through various spiritual paths and demonstrated that all religions lead to the same ultimate truth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                His simple yet profound teachings continue to inspire millions around the world. He taught that the purpose of human life is to realize God, and this realization is possible through sincere devotion, meditation, and selfless service.
              </p>
            </div>
          </div>
        </section>

        {/* Swami Vivekananda Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-lg shadow-lg p-10 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-orange-900">Swami Vivekananda</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Swami Vivekananda (1863-1902) was the chief disciple of Sri Ramakrishna and a key figure in introducing Indian philosophy to the Western world. He represented Hinduism at the Parliament of World Religions in Chicago in 1893.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                His teachings focus on the practical application of Vedanta in daily life, emphasizing strength, courage, and service to humanity. He believed that religion is not about dogma but about realizing one's true divine nature.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Swami Vivekananda's message of self-confidence, fearlessness, and universal brotherhood continues to inspire youth worldwide. His vision of combining spirituality with social service forms the cornerstone of our ashram's activities.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/images/swamiji.jpg" 
                alt="Swami Vivekananda" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20">
          <div className="bg-orange-600 text-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-6xl mb-4">🕉️</div>
                <h3 className="text-xl font-semibold mb-3">Unity in Diversity</h3>
                <p className="text-orange-100">
                  All religions are different paths leading to the same goal. We respect and honor all faiths.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🙏</div>
                <h3 className="text-xl font-semibold mb-3">Service to Humanity</h3>
                <p className="text-orange-100">
                  Service to man is service to God. We engage in various social welfare activities.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">💫</div>
                <h3 className="text-xl font-semibold mb-3">Self-Realization</h3>
                <p className="text-orange-100">
                  The ultimate goal is to realize one's true divine nature through spiritual practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-8 text-orange-900 text-center">Our Activities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Daily Worship</h3>
                <p className="text-gray-700">Morning and evening prayers, arati, and meditation sessions</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Spiritual Classes</h3>
                <p className="text-gray-700">Regular classes on Vedanta, Bhagavad Gita, and Upanishads</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Youth Programs</h3>
                <p className="text-gray-700">Character building workshops and leadership development</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Social Service</h3>
                <p className="text-gray-700">Free medical camps, education support, and relief work</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Library</h3>
                <p className="text-gray-700">Well-stocked library with spiritual and philosophical literature</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2 text-orange-900">Cultural Events</h3>
                <p className="text-gray-700">Celebrations of festivals, bhajan programs, and spiritual discourses</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;