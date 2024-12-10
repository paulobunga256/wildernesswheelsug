import Hero from "../components/home/Hero";
import FeaturedVehicles from "../components/home/FeaturedVehicles";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BlogPosts from "../components/home/BlogPosts";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useSelector } from "react-redux";
import { selectTestimonials } from "../features/testimonialsSlice";

const Home = () => {
  const testimonials = useSelector(selectTestimonials);

  return (
    <main>
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />

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

      <BlogPosts />
    </main>
  );
};

export default Home;
