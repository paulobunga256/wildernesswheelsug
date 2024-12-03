import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'Amazing experience with Wilderness Wheels! The vehicle was perfect for our mountain adventure, and the service was exceptional.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    text: 'Top-notch vehicles and incredible customer service. Made our family trip unforgettable!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    text: 'The attention to detail and quality of their vehicles exceeded our expectations. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Michael Chang',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    text: 'Professional service from start to finish. The vehicle was immaculately maintained and perfect for our needs.',
    rating: 5,
  },
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
          What Our Customers Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-emerald-600 transition-colors z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {reviews[currentIndex].name}
                    </h3>
                    <div className="flex items-center">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-slate-600 italic">
                  "{reviews[currentIndex].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-lg text-slate-600 hover:text-emerald-600 transition-colors z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;