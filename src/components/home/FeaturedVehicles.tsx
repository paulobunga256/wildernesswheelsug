import { motion } from 'framer-motion';
import { Calendar, Users, Gauge } from 'lucide-react';
import Button from '../ui/Button';

const vehicles = [
  {
    id: 1,
    name: 'Jeep Wrangler Rubicon',
    type: '4x4 SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
    price: 150,
    capacity: 4,
    transmission: 'Automatic',
  },
  {
    id: 2,
    name: 'Land Rover Defender',
    type: 'Luxury 4x4',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80',
    price: 200,
    capacity: 5,
    transmission: 'Automatic',
  },
  {
    id: 3,
    name: 'Toyota Land Cruiser',
    type: 'Adventure SUV',
    image: 'https://images.unsplash.com/photo-1594505474902-2e9eaad10a4e?auto=format&fit=crop&q=80',
    price: 180,
    capacity: 7,
    transmission: 'Automatic',
  },
];

const FeaturedVehicles = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our most popular vehicles, perfect for any adventure. Each
            vehicle is thoroughly maintained and equipped for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full">
                  ${vehicle.price}/day
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-slate-600 mb-4">{vehicle.type}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-slate-600">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{vehicle.capacity} seats</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Gauge className="w-5 h-5 mr-2" />
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>
                <Button className="w-full">Book Now</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;