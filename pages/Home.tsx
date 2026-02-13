
import React from 'react';
import { Link } from 'react-router-dom';
// Fixed missing MessageSquare import
import { Dog, Package, Mountain, Phone, Star, ShieldCheck, Heart, ArrowRight, MessageSquare } from 'lucide-react';
import { PETS, TESTIMONIALS, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center bg-orange-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/650/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              The Best for Your Furry Friends
            </span>
            <h1 className="text-5xl lg:text-7xl font-fredoka font-bold text-gray-900 leading-tight">
              Your One-Stop Shop for <span className="text-orange-500">Happy, Healthy</span> Pets.
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Quality pets, trusted supplies, and adventure gear for every pet lover. We believe pets are family.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shop-pets" className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
                <Dog className="mr-2" size={20} /> Shop Pets
              </Link>
              <Link to="/supplies" className="bg-white text-gray-800 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold flex items-center hover:bg-gray-50 transition-all shadow-sm">
                <Package className="mr-2" size={20} /> Shop Supplies
              </Link>
            </div>
            <div className="flex items-center space-x-6 pt-4 text-sm font-medium text-gray-500">
              <div className="flex items-center"><ShieldCheck className="text-green-500 mr-2" size={18} /> Vet Checked</div>
              <div className="flex items-center"><Star className="text-yellow-500 mr-2" size={18} /> 4.9/5 Rating</div>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="bg-orange-300 w-[500px] h-[500px] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30"></div>
            <img 
              src="https://picsum.photos/id/237/600/600" 
              alt="Happy Dog" 
              className="relative rounded-3xl shadow-2xl z-10 border-8 border-white transform rotate-3"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full"><Heart className="text-green-600" fill="currentColor" /></div>
              <div>
                <p className="font-bold text-gray-900">100% Health Guarantee</p>
                <p className="text-xs text-gray-500">Verified by our on-site vets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / Quick Actions */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/hiking" className="group relative overflow-hidden rounded-3xl h-64 shadow-lg hover:shadow-2xl transition-all">
            <img src="https://picsum.photos/id/433/800/600" alt="Hiking Gear" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-fredoka font-bold mb-2">Pet Hiking Gear</h3>
              <p className="text-sm opacity-90 mb-4">Adventure ready gear for the trails.</p>
              <div className="flex items-center text-sm font-bold uppercase tracking-wider">
                Shop Now <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>
          <Link to="/shop-pets" className="group relative overflow-hidden rounded-3xl h-64 shadow-lg hover:shadow-2xl transition-all">
            <img src="https://picsum.photos/id/1062/800/600" alt="Shop Pets" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-fredoka font-bold mb-2">New Arrivals</h3>
              <p className="text-sm opacity-90 mb-4">Meet your new best friend today.</p>
              <div className="flex items-center text-sm font-bold uppercase tracking-wider">
                View Pets <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>
          <div className="bg-orange-500 rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white space-y-4">
            <div className="bg-white/20 p-4 rounded-full">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-fredoka font-bold">Ask Our Experts</h3>
            <p className="text-sm opacity-90">Get AI-powered pet care advice instantly.</p>
            <Link to="/care" className="bg-white text-orange-600 px-6 py-2 rounded-xl font-bold hover:bg-orange-50 transition-colors">
              Chat with AI
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-fredoka font-bold mb-2">Meet Our Pets</h2>
              <p className="text-gray-500">Wait till you see these cuties in person!</p>
            </div>
            <Link to="/shop-pets" className="text-orange-500 font-bold flex items-center hover:underline">
              View All Pets <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PETS.slice(0, 4).map(pet => (
              <div key={pet.id} className="group bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img src={pet.images[0]} alt={pet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600">
                    {pet.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{pet.name}</h3>
                    <span className="text-lg font-bold text-orange-500">${pet.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{pet.description}</p>
                  <div className="flex items-center space-x-2 text-xs font-bold text-green-600 mb-6">
                    <ShieldCheck size={14} /> <span>Health Guarantee</span>
                  </div>
                  <Link 
                    to="/shop-pets" 
                    className="block w-full text-center bg-white border border-gray-200 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Banner */}
      <section className="hiking-gradient py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl font-fredoka font-bold leading-tight">
              Adventure Ready – Explore the Outdoors With Your Pet.
            </h2>
            <p className="text-lg opacity-80 max-w-lg">
              We provide the most durable, vet-approved hiking gear for you and your four-legged companion. Don't let anything hold back your next mountain trip.
            </p>
            <Link to="/hiking" className="inline-block bg-white text-green-900 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
              Explore Adventure Gear
            </Link>
          </div>
          <div className="relative flex justify-center">
            <img 
              src="https://picsum.photos/id/1025/600/400" 
              alt="Adventure Dog" 
              className="rounded-3xl shadow-2xl border-4 border-white/20"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-fredoka font-bold mb-4">Happy Tails</h2>
            <p className="text-gray-500">Don't just take our word for it — hear it from our family of happy pet owners!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover border-4 border-orange-50" />
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{t.content}"</p>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">Adopted {t.petName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
