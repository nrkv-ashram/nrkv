import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Calendar, BookOpen, Heart, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto text-center relative min-h-[420px] md:min-h-[520px]">
          {/* Banner background */}
          <div className="absolute inset-0 w-full h-full z-0 flex justify-center items-center min-h-[420px] md:min-h-[520px]">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" 
              alt="Ashram Banner" 
              className="w-full h-full object-cover opacity-40" 
              style={{objectPosition: 'center'}}
            />
          </div>
          <div className="relative z-10">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img src="/images/thakur.jpg" alt="Sri Ramakrishna" className="w-full h-full object-cover" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-900 drop-shadow-lg">
              Natagarh Ramakrishna Vivekananda Ashram
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-800 max-w-3xl mx-auto">
            Arise, awake, and stop not till the goal is reached
          </p>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            A spiritual sanctuary dedicated to the teachings of Sri Ramakrishna Paramhansa and Swami Vivekananda. 
            Join us in our journey of self-discovery and service to humanity.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/events">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg shadow-lg">
                Upcoming Events
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Spiritual Leaders Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-900">Our Guiding Lights</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Sri Ramakrishna */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg shadow-xl mx-auto w-full max-w-xs">
                <img 
                  src="/images/thakur.jpg" 
                  alt="Sri Ramakrishna Paramhansa" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Sri Ramakrishna Paramhansa</h3>
              <p className="text-gray-600 italic mb-2">শ্রী রামকৃষ্ণ পরমহংস</p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-3">
                  "God can be realized through all paths. All religions are true. The important thing is to reach the roof."
                </p>
                <p className="text-gray-600 text-sm italic">
                  "ঈশ্বরকে সকল পথেই লাভ করা যায়। সকল ধর্মই সত্য।"
                </p>
              </div>
            </div>

            {/* Maa Sarada */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg shadow-xl mx-auto w-full max-w-xs">
                <img 
                  src="/images/maa_sarada.jpg" 
                  alt="Maa Sarada Devi" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Maa Sarada Devi</h3>
              <p className="text-gray-600 italic mb-2">মা সারদা দেবী</p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-3">
                  "If you want peace of mind, do not find fault with others. Learn to see your own faults."
                </p>
                <p className="text-gray-600 text-sm italic">
                  "যদি মনের শান্তি চাও, অন্যের দোষ দেখো না। নিজের দোষ দেখতে শেখো।"
                </p>
              </div>
            </div>

            {/* Swami Vivekananda */}
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-lg shadow-xl mx-auto w-full max-w-xs">
                <img 
                  src="/images/swamiji.jpg" 
                  alt="Swami Vivekananda" 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Swami Vivekananda</h3>
              <p className="text-gray-600 italic mb-2">স্বামী বিবেকানন্দ</p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-3">
                  "Arise, awake, and stop not till the goal is reached."
                </p>
                <p className="text-gray-600 text-sm italic">
                  "উঠো, জাগো এবং লক্ষ্যে না পৌঁছানো পর্যন্ত থেমো না।"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-900">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80" 
                alt="Meditation" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Natagarh Ramakrishna Vivekananda Ashram is dedicated to spreading the universal message of Sri Ramakrishna Paramhansa and the practical Vedanta of Swami Vivekananda.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in the harmony of all religions and the divinity inherent in every soul. Through spiritual practices, education, and selfless service, we strive to awaken the potential within each individual.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our ashram serves as a beacon of light, guiding seekers on their spiritual journey while actively engaging in community welfare and social service activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-900">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Spiritual Education</h3>
              <p className="text-gray-600">
                Regular classes on Vedanta, Bhagavad Gita, and the teachings of great spiritual masters.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Meditation & Yoga</h3>
              <p className="text-gray-600">
                Daily meditation sessions and yoga classes for physical and mental well-being.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Community Service</h3>
              <p className="text-gray-600">
                Active involvement in social welfare through healthcare, education, and relief activities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-orange-900">Cultural Programs</h3>
              <p className="text-gray-600">
                Regular festivals, bhajan sessions, and spiritual discourses celebrating our rich heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-semibold mb-6 italic">
            "In a day, when you don't come across any problems - you can be sure that you are travelling in a wrong path."
          </p>
          <p className="text-xl">— Swami Vivekananda</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-900">Join Us</h2>
          <p className="text-xl text-gray-700 mb-10">
            Experience the peace and spiritual atmosphere of our ashram. All are welcome to participate in our activities and programs.
          </p>
          <Link to="/contact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 text-lg shadow-lg">
              Visit Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;