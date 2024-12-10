import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const CustomerReviews = () => {
  const testimonials = useSelector((state: RootState) => state.testimonials.testimonials);
  console.log('Testimonials:', testimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length || 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length || 1)) % (testimonials.length || 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length || 1));
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
              {testimonials.length > 0 && (
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
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {testimonials[currentIndex].name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                </motion.div>
              )}
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
