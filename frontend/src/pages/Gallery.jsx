import React, { useState } from 'react';

// Gallery data: each event has a group of images
const galleryData = [
  {
    event: 'Annual Festival 2025',
    images: [
      '/images/events/annual-festival-2025/1.jpg',
      '/images/events/annual-festival-2025/2.jpg',
      '/images/events/annual-festival-2025/3.jpg',
    ],
  },
  {
    event: "Children's Day",
    images: [
      '/images/events/childrens-day/1.jpg',
      '/images/events/childrens-day/2.jpg',
    ],
  },
  {
    event: 'Yoga Camp',
    images: [
      '/images/events/yoga-camp/1.jpg',
      '/images/events/yoga-camp/2.jpg',
    ],
  },
];

const Gallery = () => {
  const [openGroup, setOpenGroup] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-900">Gallery</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore memories from our events and celebrations. Click an event to view its photo gallery.
          </p>
        </div>
        {/* Event gallery groups: click event to open group, click image for modal */}
        <div className="grid md:grid-cols-2 gap-10">
          {galleryData.map((group, idx) => (
            <div key={group.event}>
              <button
                className="w-full text-left bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all mb-4 text-orange-900 font-bold text-2xl"
                onClick={() => setOpenGroup(openGroup === idx ? null : idx)}
                aria-expanded={openGroup === idx}
              >
                {group.event}
              </button>
              {openGroup === idx && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {group.images.map((img, i) => (
                    <img
                      key={img}
                      src={img}
                      alt={group.event + ' ' + (i + 1)}
                      className="rounded-lg shadow-md cursor-pointer object-cover h-40 w-full hover:scale-105 transition-transform"
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Modal for full image view */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Full View" className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
