import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
} from "lucide-react";
import Button from "../components/ui/Button";
import VehicleModal from "../components/vehicles/VehicleModal";
import VehicleFilters from "../components/vehicles/VehicleFilters";
import PageHero from "../components/layout/PageHero";
import { formatCurrency } from "../lib/utils";
import type { Vehicle } from "../types/vehicle";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Vehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const featuredVehicles = useSelector((state: RootState) => state.featuredVehicles.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState(featuredVehicles);

  const handleSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sorted = [...filteredVehicles].sort((a, b) => {
      return newOrder === "asc"
        ? a.dailyRate - b.dailyRate
        : b.dailyRate - a.dailyRate;
    });
    setFilteredVehicles(sorted);
  };

  return (
    <main>
      <PageHero
        title="Our Vehicle Fleet"
        description="Choose from our selection of premium adventure vehicles, each perfectly equipped for your next journey."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <VehicleFilters
              vehicles={featuredVehicles}
              onFilterChange={setFilteredVehicles}
            />
          </div>

          {/* Vehicle Grid */}
          <div className="lg:w-3/4">
            {/* Sort Controls */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600">
                Showing {filteredVehicles.length} vehicles
              </p>
              <button
                onClick={handleSort}
                className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600"
              >
                <DollarSign className="w-4 h-4" />
                <span>
                  Price {sortOrder === "asc" ? "Low to High" : "High to Low"}
                </span>
                {sortOrder === "asc" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={vehicle.images[0]}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full">
                      {formatCurrency(vehicle.dailyRate)}/day
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {vehicle.make} {vehicle.model}
                      </h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-1 text-sm text-slate-600">
                          {vehicle.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{vehicle.type}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-slate-600">
                        <Users className="w-5 h-5 mr-2" />
                        <span>{vehicle.capacity} seats</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <Shield className="w-5 h-5 mr-2" />
                        <span>{vehicle.transmission}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <Button onClick={() => setSelectedVehicle(vehicle)}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Details Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <VehicleModal
            vehicle={selectedVehicle}
            onClose={() => setSelectedVehicle(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Vehicles;
