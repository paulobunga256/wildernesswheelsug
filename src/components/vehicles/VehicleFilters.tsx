import { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import Button from '../ui/Button';
import type { Vehicle } from '../../types/vehicle';

interface VehicleFiltersProps {
  vehicles: Vehicle[];
  onFilterChange: (filtered: Vehicle[]) => void;
}

interface FilterState {
  priceRange: [number, number];
  capacity: number[];
  makes: string[];
}

const VehicleFilters = ({ vehicles, onFilterChange }: VehicleFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, Math.max(...vehicles.map((v) => v.dailyRate))],
    capacity: [],
    makes: [],
  });

  const uniqueMakes = Array.from(new Set(vehicles.map((v) => v.make)));
  const uniqueCapacities = Array.from(new Set(vehicles.map((v) => v.capacity)));

  const handlePriceChange = (value: [number, number]) => {
    setFilters((prev) => ({ ...prev, priceRange: value }));
  };

  const toggleCapacity = (capacity: number) => {
    setFilters((prev) => ({
      ...prev,
      capacity: prev.capacity.includes(capacity)
        ? prev.capacity.filter((c) => c !== capacity)
        : [...prev.capacity, capacity],
    }));
  };

  const toggleMake = (make: string) => {
    setFilters((prev) => ({
      ...prev,
      makes: prev.makes.includes(make)
        ? prev.makes.filter((m) => m !== make)
        : [...prev.makes, make],
    }));
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [0, Math.max(...vehicles.map((v) => v.dailyRate))],
      capacity: [],
      makes: [],
    });
  };

  useEffect(() => {
    const filtered = vehicles.filter((vehicle) => {
      const matchesPrice =
        vehicle.dailyRate >= filters.priceRange[0] &&
        vehicle.dailyRate <= filters.priceRange[1];
      const matchesCapacity =
        filters.capacity.length === 0 ||
        filters.capacity.includes(vehicle.capacity);
      const matchesMake =
        filters.makes.length === 0 || filters.makes.includes(vehicle.make);

      return matchesPrice && matchesCapacity && matchesMake;
    });

    onFilterChange(filtered);
  }, [filters, vehicles]);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsOpen(true)}
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filters Sidebar/Modal */}
      <div
        className={`${
          isOpen
            ? 'fixed inset-0 z-50 bg-black/50 lg:relative lg:bg-transparent'
            : ''
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`${
            isOpen
              ? 'fixed right-0 top-0 h-full w-80 bg-white p-6 shadow-xl transform translate-x-0'
              : 'hidden lg:block'
          } lg:relative lg:transform-none lg:p-0 transition-transform duration-200`}
          onClick={(e) => e.stopPropagation()}
        >
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 lg:hidden"
            >
              <X className="w-6 h-6" />
            </button>
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Filters
              </h3>
              <Button
                variant="ghost"
                className="text-sm text-slate-600"
                onClick={resetFilters}
              >
                Reset All
              </Button>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-medium text-slate-900 mb-3">Price Range</h4>
              <div className="space-y-2">
                <input
                  type="range"
                  min={0}
                  max={Math.max(...vehicles.map((v) => v.dailyRate))}
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange([filters.priceRange[0], +e.target.value])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Passenger Capacity */}
            <div>
              <h4 className="font-medium text-slate-900 mb-3">
                Passenger Capacity
              </h4>
              <div className="space-y-2">
                {uniqueCapacities.sort().map((capacity) => (
                  <label
                    key={capacity}
                    className="flex items-center space-x-2 text-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={filters.capacity.includes(capacity)}
                      onChange={() => toggleCapacity(capacity)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>{capacity} seats</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Vehicle Make */}
            <div>
              <h4 className="font-medium text-slate-900 mb-3">Vehicle Make</h4>
              <div className="space-y-2">
                {uniqueMakes.sort().map((make) => (
                  <label
                    key={make}
                    className="flex items-center space-x-2 text-slate-600"
                  >
                    <input
                      type="checkbox"
                      checked={filters.makes.includes(make)}
                      onChange={() => toggleMake(make)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>{make}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleFilters;