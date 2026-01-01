import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-900">Contact Us</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We welcome you to visit our ashram and experience the peaceful spiritual atmosphere. Feel free to reach out to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-xl hover:shadow-2xl transition-all">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2 text-lg">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Natagarh Ramakrishna Vivekananda Ashram<br />
                      Natagarh, Kolkata, West Bengal 700113<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2 text-lg">Phone</h3>
                    <p className="text-gray-700">+91-XXXX-XXXXXX</p>
                    <p className="text-gray-700">+91-XXXX-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2 text-lg">Email</h3>
                    <p className="text-gray-700">info@natagarh-ashram.org</p>
                    <p className="text-gray-700">contact@natagarh-ashram.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2 text-lg">Visiting Hours</h3>
                    <p className="text-gray-700">Daily: 5:00 AM - 9:00 PM</p>
                    <p className="text-gray-600 text-sm mt-1">Morning Prayer: 6:00 AM</p>
                    <p className="text-gray-600 text-sm">Evening Prayer: 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donations Section */}
            <Card className="shadow-xl bg-orange-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-orange-100 mb-4">
                    Your generous contributions help us continue our spiritual, educational, and social service activities. Every donation, big or small, makes a difference.
                  </p>
                  <div className="bg-white text-orange-900 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2 text-lg">Bank Transfer</h4>
                    <p><span className="font-semibold">Account Name:</span> Natagarh Ramakrishna Vivekananda Ashram</p>
                    <p><span className="font-semibold">Account Number:</span> [Your Account Number]</p>
                    <p><span className="font-semibold">Bank Name:</span> [Your Bank Name]</p>
                    <p><span className="font-semibold">IFSC Code:</span> [Your IFSC Code]</p>
                    <p><span className="font-semibold">Branch:</span> [Your Branch Name]</p>
                  </div>
                  <div className="bg-white text-orange-900 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-lg">UPI / Online Payment</h4>
                    <p><span className="font-semibold">UPI ID:</span> [yourupiid@bank]</p>
                  </div>
                  <p className="text-orange-100 mt-4">
                    For receipts or queries, please email us at <a href="mailto:info@natagarh-ashram.org" className="underline">info@natagarh-ashram.org</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="shadow-xl h-full">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-2xl">Location Map</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 h-[calc(100%-80px)]">
                <div className="w-full h-full min-h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5806473429116!2d88.39311939999999!3d22.706649799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c078cd4a17b%3A0xc1ded9597fc7d050!2sNatagarh%20Ramakrishna%20Vivekananda%20Ashram!5e0!3m2!1sen!2sin!4v1766934212671!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ashram Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-16 text-center">
          <Card className="shadow-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="py-12 px-6">
              <h2 className="text-3xl font-bold mb-4">You Are Always Welcome</h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Whether you seek spiritual guidance, wish to participate in our programs, or simply want to experience the peaceful atmosphere, our doors are always open. Come and be a part of our spiritual family.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;