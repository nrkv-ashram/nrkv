import React from 'react';

const School = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-900">Sarada Sishu Vidyamandir</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
        </div>
        <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          The ashram runs a primary school (KG to Class IV) dedicated to holistic education, blending academics with values and culture.
        </p>

        {/* About the School */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-orange-900">About the School</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Sarada Sishu Vidyamandir was established to provide quality education to children in the local community. The school offers classes from Kindergarten (KG) to Class IV, focusing on academic excellence, character building, and spiritual growth.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our dedicated teachers nurture each child with care, ensuring a joyful and safe learning environment. Alongside the regular curriculum, students participate in cultural programs, value education, yoga, and prayer sessions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The school is open to all, regardless of background, and aims to instill the ideals of service, discipline, and respect for all faiths.
            </p>
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-16">
          <div className="bg-orange-600 text-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Facilities</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-3">Classrooms</h3>
                <p className="text-orange-100">Bright, well-ventilated classrooms for effective learning.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏫</div>
                <h3 className="text-xl font-semibold mb-3">Playground</h3>
                <p className="text-orange-100">Safe outdoor play area for physical activities and games.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🧘‍♂️</div>
                <h3 className="text-xl font-semibold mb-3">Yoga & Prayer</h3>
                <p className="text-orange-100">Daily yoga and prayer sessions for holistic development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-orange-900">Admissions</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Admissions are open for KG to Class IV. For details, please visit the ashram office or contact us via phone or email.
            </p>
            <ul className="text-gray-700 text-lg leading-relaxed list-disc pl-6">
              <li>Age criteria as per class norms</li>
              <li>Birth certificate and address proof required</li>
              <li>Interaction with the child and parents</li>
            </ul>
          </div>
        </section>

        {/* Notice Section (moved below Admission) */}
        <section className="mb-10">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">Notice</h2>
            <ul className="list-disc pl-6 text-yellow-900 text-lg">
              <li>Admissions for KG to Class IV are open for the new session.</li>
              <li>School will remain closed on all national holidays.</li>
              <li>Annual function scheduled for February 2026. Details will be announced soon.</li>
            </ul>
          </div>
        </section>

        {/* Contact for School */}
        <section>
          <div className="bg-orange-600 text-white rounded-lg shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact for School Enquiries</h2>
            <p className="text-orange-100 text-lg mb-4">Phone: +91-XXXX-XXXXXX</p>
            <p className="text-orange-100 text-lg mb-4">Email: school@natagarh-ashram.org</p>
            <p className="text-orange-100 text-lg">Address: Natagarh Ramakrishna Vivekananda Ashram, Natagarh, Kolkata, West Bengal 700113</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default School;
