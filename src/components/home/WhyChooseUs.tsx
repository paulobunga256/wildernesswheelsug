import { motion } from 'framer-motion';
import { Shield, Clock, Settings, Award } from 'lucide-react';
import Button from '../ui/Button';

const features = [
  {
    icon: Shield,
    title: 'Safety First',
    description:
      'All our vehicles undergo rigorous safety inspections and are equipped with modern safety features.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description:
      'Round-the-clock customer support to assist you wherever your adventure takes you.',
  },
  {
    icon: Settings,
    title: 'Well-Maintained Fleet',
    description:
      'Regular maintenance and updates ensure our vehicles are always in prime condition.',
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description:
      'Our team of experienced adventurers will help you choose the perfect vehicle for your journey.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Why Choose Wilderness Wheels?
          </motion.h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            We're committed to providing you with the best vehicles and service for
            your adventure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-emerald-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white text-emerald-600 hover:bg-emerald-50"
          >
            Start Your Adventure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;