import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Car, Map, Wrench, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import PageHero from '../components/layout/PageHero';

const services = [
  {
    icon: Car,
    title: 'Vehicle Rentals',
    description:
      'Choose from our fleet of meticulously maintained vehicles, from rugged 4x4s to luxury SUVs. Each vehicle is equipped with essential safety features and modern amenities.',
    cta: 'View Fleet',
  },
  {
    icon: Map,
    title: 'Guided Tours',
    description:
      'Experience the wilderness with our expert guides. We offer customized tour packages that combine adventure, safety, and comfort for an unforgettable journey.',
    cta: 'Explore Tours',
  },
  {
    icon: Wrench,
    title: 'Equipment Rentals',
    description:
      'Complement your vehicle rental with our range of camping and outdoor equipment. From tents to GPS devices, we have everything you need for your adventure.',
    cta: 'View Equipment',
  },
];

const faqs = [
  {
    question: 'What documents do I need to rent a vehicle?',
    answer:
      'You will need a valid driver\'s license, proof of insurance, and a credit card for the security deposit. International customers must provide a valid passport and international driving permit.',
  },
  {
    question: 'Are your vehicles insured?',
    answer:
      'Yes, all our vehicles come with comprehensive insurance coverage. Additional coverage options are available for purchase to reduce your liability.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Bookings can be cancelled up to 48 hours before the rental period for a full refund. Cancellations within 48 hours may be subject to a fee.',
  },
  {
    question: 'Do you offer roadside assistance?',
    answer:
      '24/7 roadside assistance is included with all rentals. Our support team is always ready to help you with any issues that may arise during your journey.',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Adventure Enthusiast',
    content:
      "The guided tour exceeded all expectations. The vehicle was perfect, and our guide's knowledge made the experience unforgettable.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Travel Blogger',
    content:
      'Professional service from start to finish. The equipment was top-notch, and the staff went above and beyond to ensure we were prepared.',
    rating: 5,
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <PageHero
        title="Our Services"
        description="Discover our comprehensive range of services designed to make your adventure memorable and worry-free."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <service.icon className="w-12 h-12 text-emerald-600 mb-6" />
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Button>{service.cta}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50"
                >
                  <span className="font-medium text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 py-4 text-slate-600 border-t">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;