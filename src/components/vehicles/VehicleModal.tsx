import { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Shield,
  Star,
  Coffee,
} from "lucide-react";
import Button from "../ui/Button";
import type { Vehicle } from "../../types/vehicle";
import { formatCurrency } from "../../lib/utils";

interface VehicleModalProps {
  vehicle: Vehicle;
  onClose: () => void;
}

const VehicleModal = ({ vehicle, onClose }: VehicleModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");
  const [includeTourGuide, setIncludeTourGuide] = useState(false);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? vehicle.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === vehicle.images.length - 1 ? 0 : prev + 1
    );
  };

  const calculateTotalCost = () => {
    if (!selectedStartDate || !selectedEndDate) return 0;
    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);
    const days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    const baseCost = days * vehicle.dailyRate;
    const tourGuideCost = includeTourGuide ? days * 100 : 0;
    return baseCost + tourGuideCost;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Carousel */}
        <div className="relative h-[30vh]">
          <img
            src={vehicle.images[currentImageIndex]}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vehicle Details */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  {vehicle.make} {vehicle.model}
                </h2>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-slate-600">
                    {vehicle.rating} ({vehicle.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="text-slate-600 mb-6">{vehicle.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-slate-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{vehicle.capacity} seats</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Shield className="w-5 h-5 mr-2" />
                  <span>{vehicle.transmission}</span>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Features & Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {vehicle.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-slate-600"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Section */}
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Book This Vehicle</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    value={selectedStartDate}
                    onChange={(e) => setSelectedStartDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={selectedEndDate}
                    onChange={(e) => setSelectedEndDate(e.target.value)}
                    min={selectedStartDate}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Coffee className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-medium">Include Tour Guide</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeTourGuide}
                      onChange={(e) => setIncludeTourGuide(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-slate-600">Daily Rate</span>
                  <span className="font-medium">
                    {formatCurrency(vehicle.dailyRate)}
                  </span>
                </div>
                {includeTourGuide && (
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Tour Guide (per day)</span>
                    <span className="font-medium">{formatCurrency(100)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total Cost</span>
                  <span className="text-emerald-600">
                    {formatCurrency(calculateTotalCost())}
                  </span>
                </div>
              </div>

              <Button
                className="w-full"
                disabled={!selectedStartDate || !selectedEndDate}
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VehicleModal;