import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';
import PageHero from '../components/layout/PageHero';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Jane Smith',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Johnson',
    role: 'Fleet Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
  },
];

const About = () => {
  return (
    <main className="bg-white">
      <PageHero
        title="Our Story"
        description="Pioneering adventure travel since 2010, making the wilderness accessible to all."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
      />

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-slate-600">
              Welcome to Wilderness Wheels Uganda, your trusted partner for reliable and professional transport services across Uganda. We are dedicated to offering safe, efficient, and customer-focused transportation solutions tailored to meet your unique needs.
            </p>
            <p className="text-lg text-slate-600">
              Whether you’re running errands in the city, attending corporate meetings, or exploring Uganda’s scenic wilderness, we’ve got the perfect vehicle for you—always accompanied by a professional driver at no extra cost to ensure your safety and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To provide exceptional vehicle rental services that enable unforgettable adventures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-slate-600">
                Safety, reliability, and customer satisfaction are at the heart of everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Our Community</h3>
              <p className="text-slate-600">
                We're proud to support local communities and promote sustainable tourism practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">
              - Town Runners: Efficient, fuel-saving vehicles like the Toyota Premio and other compact cars, ideal for city trips.
            </p>
            <p className="text-lg text-slate-600">
              - Corporate Transport: Reliable transportation for businesses, ensuring punctuality and professionalism.
            </p>
            <p className="text-lg text-slate-600">
              - Safari and Adventure Transport: Rugged 4x4 vehicles designed for Uganda’s wild terrain, perfect for safaris and outdoor adventures.
            </p>
            <p className="text-lg text-slate-600">
              - Custom Transport Solutions: Flexible packages tailored to suit your specific travel or logistical requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600">
              The passionate individuals behind Wilderness Wheels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
