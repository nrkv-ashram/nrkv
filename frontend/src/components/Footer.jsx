import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Natagarh Ramakrishna Vivekananda Ashram</h3>
            <p className="text-orange-100 leading-relaxed">
              A spiritual sanctuary dedicated to the teachings of Sri Ramakrishna Paramhansa and Swami Vivekananda.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pages</h3>
            <ul className="space-y-2 text-orange-100">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="/notice" className="hover:text-white transition-colors">Notice</a></li>
              <li><a href="/calendar" className="hover:text-white transition-colors">Calendar</a></li>
              <li><a href="/school" className="hover:text-white transition-colors">School</a></li>
              <li><a href="/gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-orange-100">
              <p>Natagarh Ramakrishna Vivekananda Ashram</p>
              <p>Natagarh, Kolkata, West Bengal 700113</p>
              <p>India</p>
              <p className="mt-4">Phone: +91-XXXX-XXXXXX</p>
              <p>Email: info@natagarh-ashram.org</p>
              <p>Email: contact@natagarh-ashram.org</p>
              <p className="mt-4">Visiting Hours: Daily 5:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orange-800 pt-6 text-center">
          <p className="text-orange-200">
            © {currentYear} Natagarh Ramakrishna Vivekananda Ashram. All rights reserved.
          </p>
          <p className="text-orange-300 mt-2 text-sm">
            "Arise, awake, and stop not till the goal is reached" - Swami Vivekananda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;