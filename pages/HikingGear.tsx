
import React, { useContext } from 'react';
import { Mountain, Wind, Shield, Compass, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { CartContext } from '../App';

const HikingGear: React.FC = () => {
  const cartContext = useContext(CartContext);
  const hikingGear = PRODUCTS.filter(p => p.isHikingGear);

  return (
    <div className="bg-[#1a2e05] text-white min-h-screen">
      {/* Premium Hero */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://picsum.photos/id/433/1920/1080" 
          alt="Hiking Hero" 
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[2px]"
        />
        <div className="container mx-auto px-4 relative z-20 text-center space-y-6">
          <div className="inline-flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase">
            <Mountain size={16} className="mr-2" /> Peak Performance
          </div>
          <h1 className="text-5xl md:text-7xl font-fredoka font-bold leading-tight">
            Built for the <span className="text-green-400">Wild</span>.
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto font-light">
            Engineered for durability, comfort, and safety. Because your best friend belongs in the great outdoors as much as you do.
          </p>
        </div>
      </section>

      {/* Feature Grids */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="text-center space-y-4">
            <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-green-400">
              <Shield size={32} />
            </div>
            <h4 className="font-bold">Indestructible</h4>
            <p className="text-sm opacity-60">Military-grade nylon and reinforced stitching.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-green-400">
              <Wind size={32} />
            </div>
            <h4 className="font-bold">Breathable</h4>
            <p className="text-sm opacity-60">Advanced mesh lining for maximum airflow.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-green-400">
              <Compass size={32} />
            </div>
            <h4 className="font-bold">Ergonomic</h4>
            <p className="text-sm opacity-60">Designed to follow your pet's natural gait.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-green-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-green-400">
              <Mountain size={32} />
            </div>
            <h4 className="font-bold">All-Terrain</h4>
            <p className="text-sm opacity-60">Tested in the harshest mountain conditions.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl font-fredoka font-bold mb-12 text-center">Elite Adventure Gear</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {hikingGear.map(product => (
            <div key={product.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all">
              <div className="h-80 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-2xl font-bold text-green-400">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <button 
                  onClick={() => cartContext?.addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                    type: 'product'
                  })}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
                >
                  <ShoppingCart size={20} className="mr-2" /> Add to Trail Kit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HikingGear;
