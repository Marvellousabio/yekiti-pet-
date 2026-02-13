
import React, { useState, useContext } from 'react';
import { ShieldCheck, Heart, Info, CheckCircle2 } from 'lucide-react';
import { PETS } from '../constants';
import { PetCategory, Pet } from '../types';
import { CartContext } from '../App';

const ShopPets: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PetCategory | 'All'>('All');
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const cartContext = useContext(CartContext);

  const categories: (PetCategory | 'All')[] = ['All', 'Dogs', 'Cats', 'Birds', 'Small Animals'];
  
  const filteredPets = activeCategory === 'All' 
    ? PETS 
    : PETS.filter(p => p.category === activeCategory);

  const handleReserve = (pet: Pet) => {
    if (cartContext) {
      cartContext.addToCart({
        id: pet.id,
        name: `Reservation: ${pet.name}`,
        price: 100, // Deposit fee
        quantity: 1,
        image: pet.images[0],
        type: 'pet'
      });
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-fredoka font-bold mb-4">Meet Our Furry & Feathered Friends</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            All our pets come from ethical breeders, are fully vaccinated, and carry a 1-year health guarantee.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-orange-500 text-white shadow-lg' 
                : 'bg-white text-gray-600 border hover:border-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pet Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPets.map(pet => (
            <div key={pet.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group">
              <div className="relative h-64">
                <img src={pet.images[0]} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-orange-500 shadow-md">
                  <Heart size={20} />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-2xl font-fredoka font-bold text-gray-800">{pet.name}</h3>
                  <span className="text-xl font-bold text-orange-500">${pet.price}</span>
                </div>
                <p className="text-sm font-medium text-orange-600 mb-4">{pet.breed} • {pet.age}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-green-700 font-bold bg-green-50 px-2 py-1 rounded">
                    <CheckCircle2 size={14} className="mr-1" /> Fully Vaccinated
                  </div>
                  <div className="flex items-center text-xs text-blue-700 font-bold bg-blue-50 px-2 py-1 rounded">
                    <ShieldCheck size={14} className="mr-1" /> 1-Year Health Guarantee
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {pet.personality.map(tag => (
                    <span key={tag} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full uppercase tracking-wider font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto space-y-3">
                  <button 
                    onClick={() => setSelectedPet(pet)}
                    className="w-full bg-gray-50 text-gray-800 border border-gray-200 py-3 rounded-xl font-bold flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <Info size={18} className="mr-2" /> View Details
                  </button>
                  <button 
                    onClick={() => handleReserve(pet)}
                    className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
                  >
                    Reserve Now ($100 Deposit)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pet Details Modal (Simplified for demo) */}
        {selectedPet && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPet(null)} />
            <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="grid md:grid-cols-2">
                <div className="h-full">
                  <img src={selectedPet.images[0]} alt={selectedPet.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 space-y-6">
                  <button onClick={() => setSelectedPet(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
                    <CheckCircle2 size={32} />
                  </button>
                  <div>
                    <h2 className="text-4xl font-fredoka font-bold text-gray-900">{selectedPet.name}</h2>
                    <p className="text-orange-500 text-xl font-bold">${selectedPet.price}</p>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>{selectedPet.description}</p>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-xs uppercase font-bold text-gray-400">Breed</p>
                        <p className="font-bold">{selectedPet.breed}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-gray-400">Age</p>
                        <p className="font-bold">{selectedPet.age}</p>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      handleReserve(selectedPet);
                      setSelectedPet(null);
                    }}
                    className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-colors"
                  >
                    Reserve This Pet
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPets;
