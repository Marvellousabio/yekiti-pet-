
import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Heart, Search, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react';
import { CartItem } from './types.ts';

// Pages
import Home from './pages/Home.tsx';
import ShopPets from './pages/ShopPets.tsx';
import ShopSupplies from './pages/ShopSupplies.tsx';
import HikingGear from './pages/HikingGear.tsx';
import PetCare from './pages/PetCare.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Reviews from './pages/Reviews.tsx';
import Contact from './pages/Contact.tsx';
import Checkout from './pages/Checkout.tsx';

// Cart Context
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          {/* Top Banner */}
          <div className="bg-orange-500 text-white text-center py-2 text-sm font-medium">
            🔥 First-time buyer? Use code <b>HELLOPET</b> for 15% off your first supply order!
          </div>

          {/* Sticky Header */}
          <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-orange-500 p-2 rounded-xl">
                  <Heart className="text-white fill-current" size={24} />
                </div>
                <span className="text-2xl font-fredoka font-bold text-gray-800 tracking-tight">Yetkus<span className="text-orange-500">Pet</span></span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="hover:text-orange-500 font-medium transition-colors text-gray-700">Home</Link>
                <Link to="/shop-pets" className="hover:text-orange-500 font-medium transition-colors text-gray-700">Shop Pets</Link>
                <Link to="/supplies" className="hover:text-orange-500 font-medium transition-colors text-gray-700">Supplies</Link>
                <Link to="/hiking" className="hover:text-green-600 font-medium transition-colors text-green-700">Adventure Gear</Link>
                <Link to="/care" className="hover:text-orange-500 font-medium transition-colors text-gray-700">Pet Care</Link>
                <Link to="/reviews" className="hover:text-orange-500 font-medium transition-colors text-gray-700">Reviews</Link>
                <Link to="/about" className="hover:text-orange-500 font-medium transition-colors text-gray-700">About</Link>
                <Link to="/contact" className="hover:text-orange-500 font-medium transition-colors text-gray-700">Contact</Link>
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ShoppingCart size={24} className="text-gray-700" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                      {totalItems}
                    </span>
                  )}
                </button>
                <button 
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-xl animate-in fade-in slide-in-from-top-4">
                <div className="flex flex-col p-4 space-y-4 font-medium">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/shop-pets" onClick={() => setIsMenuOpen(false)}>Shop Pets</Link>
                  <Link to="/supplies" onClick={() => setIsMenuOpen(false)}>Supplies</Link>
                  <Link to="/hiking" onClick={() => setIsMenuOpen(false)} className="text-green-700">Adventure Gear</Link>
                  <Link to="/care" onClick={() => setIsMenuOpen(false)}>Pet Care Tips</Link>
                  <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>Customer Reviews</Link>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop-pets" element={<ShopPets />} />
              <Route path="/supplies" element={<ShopSupplies />} />
              <Route path="/hiking" element={<HikingGear />} />
              <Route path="/care" element={<PetCare />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h3 className="text-2xl font-fredoka font-bold mb-4">Yetkus<span className="text-orange-500">Pet</span></h3>
                <p className="text-gray-400 mb-6">
                  Providing healthy, well-cared-for animals and premium products to keep them happy and adventurous.
                </p>
                <div className="flex space-x-4 text-gray-400">
                  <Facebook className="hover:text-orange-500 cursor-pointer transition-colors" />
                  <Instagram className="hover:text-orange-500 cursor-pointer transition-colors" />
                  <Twitter className="hover:text-orange-500 cursor-pointer transition-colors" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/shop-pets" className="hover:text-white transition-colors">Shop Pets</Link></li>
                  <li><Link to="/supplies" className="hover:text-white transition-colors">Supplies</Link></li>
                  <li><Link to="/hiking" className="hover:text-white transition-colors">Hiking Gear</Link></li>
                  <li><Link to="/care" className="hover:text-white transition-colors">Care Advice</Link></li>
                  <li><Link to="/reviews" className="hover:text-white transition-colors">Success Stories</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Policies</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/contact" className="hover:text-white transition-colors">Delivery Info</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Return Policy</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Health Guarantee</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
                <p className="text-gray-400 mb-4 text-sm">Join our Birthday Club for special pet discounts!</p>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-orange-500 outline-none text-white" 
                  />
                  <button type="button" className="bg-orange-500 text-white px-4 py-2 rounded-r-lg font-bold hover:bg-orange-600 transition-colors">
                    Join
                  </button>
                </form>
              </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Yetkus Pet Store. Built with love for your pets.
            </div>
          </footer>

          {/* Cart Drawer */}
          {isCartOpen && (
            <div className="fixed inset-0 z-[60] flex justify-end">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsCartOpen(false)} />
              <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
                <div className="p-4 border-b flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center">
                    <ShoppingCart className="mr-2" /> Your Cart
                  </h2>
                  <button onClick={() => setIsCartOpen(false)} className="p-1 hover:bg-gray-100 rounded-full">
                    <X size={24} />
                  </button>
                </div>
                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">Your cart is empty!</p>
                      <Link 
                        to="/supplies" 
                        onClick={() => setIsCartOpen(false)}
                        className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold"
                      >
                        Start Shopping
                      </Link>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="flex items-center space-x-4 border-b pb-4 last:border-0">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                        <div className="flex-grow">
                          <h4 className="font-bold">{item.name}</h4>
                          <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:bg-red-50 p-1 rounded"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="p-4 border-t bg-gray-50">
                    <div className="flex justify-between mb-4 text-lg font-bold">
                      <span>Total:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <Link 
                      to="/checkout" 
                      onClick={() => setIsCartOpen(false)}
                      className="block w-full bg-orange-500 text-white text-center py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
                    >
                      Checkout Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Persistent Mobile Call Button */}
          <div className="fixed bottom-6 right-6 lg:hidden z-40">
            <a 
              href="tel:+1234567890" 
              className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </HashRouter>
    </CartContext.Provider>
  );
};

export default App;
