
import React, { useState, useContext } from 'react';
// Fixed missing Package import
import { ShoppingCart, Star, Search, Filter, Package } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductType, Product } from '../types';
import { CartContext } from '../App';

const ShopSupplies: React.FC = () => {
  const [activeType, setActiveType] = useState<ProductType | 'All'>('All');
  const [search, setSearch] = useState('');
  const cartContext = useContext(CartContext);

  const productTypes: (ProductType | 'All')[] = ['All', 'Food', 'Toys', 'Grooming', 'Beds', 'Health', 'Clothing'];
  
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesType = activeType === 'All' || p.type === activeType;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch && !p.isHikingGear;
  });

  const handleAddToCart = (product: Product) => {
    if (cartContext) {
      cartContext.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        type: 'product'
      });
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-fredoka font-bold mb-4">Pet Supplies Store</h1>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Search food, toys, beds..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {productTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeType === type 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white text-gray-600 border'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-600">
                  {product.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-yellow-400 mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="text-gray-500 text-xs font-bold ml-1">{product.rating}</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-orange-500 text-white p-3 rounded-xl hover:bg-orange-600 transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <Package size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-400">No products found for this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopSupplies;
