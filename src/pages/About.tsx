import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  ChevronRight,
  MapPin,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/layout/PageHero";

const About = () => {
  const faqs = [
    {
      question: "What areas do you cover in Uganda?",
      answer:
        "We provide transportation services across Uganda, from major cities to remote wilderness areas. Our fleet is equipped to handle diverse terrains and travel needs.",
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Yes, we provide reliable and comfortable airport transfer services for both individuals and groups.",
    },
    {
      question: "How do I book a vehicle?",
      answer:
        "You can book a vehicle through our website, by phone, or via email. Our team is ready to help you find the perfect transportation solution.",
    },
    {
      question: "Are your drivers experienced?",
      answer:
        "All our drivers are professionally trained, licensed, and have extensive knowledge of Ugandan roads and routes.",
    },
  ];

  return (
    <main className="bg-white">
      <PageHero
        title="Our Story"
        description="Pioneering adventure travel since 2010, making the wilderness accessible to all."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
      />

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                About Wilderness Wheels
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Welcome to Wilderness Wheels Uganda, your trusted partner for
                reliable and professional transport services across Uganda. We
                are dedicated to offering safe, efficient, and customer-focused
                transportation solutions tailored to meet your unique needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're running errands in the city, attending corporate
                meetings, or exploring Uganda's scenic wilderness, we've got the
                perfect vehicle for you—always accompanied by a professional
                driver at no extra cost.
              </p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Explore Our Services <ChevronRight className="ml-2" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/api/placeholder/600/400"
                alt="Wilderness Wheels Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Full-Width Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/api/placeholder/1920/800')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p>
                  To provide reliable, safe, and customer-focused transport
                  solutions that cater to diverse needs, ensuring efficiency,
                  affordability, and sustainability.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              >
                <Award className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p>
                  To be the leading transport provider in Uganda, recognized for
                  exceptional service, environmentally conscious practices, and
                  commitment to enhancing mobility.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tailored Transportation Solutions for Every Journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-emerald-600" />,
                title: "Town Runners",
                description:
                  "Efficient city transport with fuel-saving vehicles",
              },
              {
                icon: <MapPin className="w-12 h-12 text-emerald-600" />,
                title: "Safari Transport",
                description: "Rugged 4x4 vehicles for Uganda's wilderness",
              },
              {
                icon: <Phone className="w-12 h-12 text-emerald-600" />,
                title: "Corporate Solutions",
                description: "Professional transport for business needs",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-md rounded-lg p-6 mb-4"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Uganda?</h2>
          <p className="text-xl mb-8">
            Let Wilderness Wheels be your trusted transportation partner.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
