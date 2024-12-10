import { motion } from "framer-motion";
import { Users, Gauge } from "lucide-react";
import Button from "../ui/Button";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Vehicle } from '../../types/vehicle';
import { useState } from "react";
import VehicleModal from "../../components/vehicles/VehicleModal";

const FeaturedVehicles = () => {
  const vehicles = useSelector((state: RootState) => state.featuredVehicles.vehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  console.log('Featured Vehicles:', vehicles);

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
          {vehicles.map((vehicle: Vehicle, index: number) => (
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
                <Button className="w-full" onClick={() => setSelectedVehicle(vehicle)}>Book Now</Button>
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

      {selectedVehicle && (
        <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
      )}
    </section>
  );
};

export default FeaturedVehicles;
