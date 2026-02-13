
import React from 'react';
import { Heart, Users, Sparkles, Award } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Brand Story Hero */}
      <section className="py-24 container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl font-fredoka font-bold text-gray-900 mb-6 leading-tight">
            At Yetkus Pet Store, we believe <span className="text-orange-500">pets are family.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Founded in 2015 by animal lovers for animal lovers, Yetkus Pet Store started as a small local initiative to improve the lives of pets in our community. What began as a passionate hobby has grown into a premier destination for healthy pets and high-quality gear.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every pet that enters our store is treated with the utmost care, from regular vet check-ups to personalized attention. We are not just selling pets; we are creating lifelong bonds.
          </p>
        </div>
        <div className="relative">
          <div className="bg-orange-100 absolute -inset-4 rounded-3xl -z-10 rotate-3"></div>
          <img 
            src="https://picsum.photos/id/1012/800/800" 
            alt="Founder with Pet" 
            className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Stats/Values */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
            <div className="bg-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-white mb-6">
              <Heart fill="currentColor" size={24} />
            </div>
            <h3 className="text-3xl font-fredoka font-bold mb-2">5,000+</h3>
            <p className="text-gray-500 font-medium">Happy Adoptions</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
            <div className="bg-green-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-white mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-3xl font-fredoka font-bold mb-2">100%</h3>
            <p className="text-gray-500 font-medium">Health Guarantee</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
            <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-white mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-3xl font-fredoka font-bold mb-2">24/7</h3>
            <p className="text-gray-500 font-medium">Expert Support</p>
          </div>
          <div className="bg-white p-8 rounded-3xl text-center shadow-sm">
            <div className="bg-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-white mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-3xl font-fredoka font-bold mb-2">20+</h3>
            <p className="text-gray-500 font-medium">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-fredoka font-bold mb-4">Meet the Experts</h2>
          <p className="text-gray-500">The passionate team behind the smiles.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="text-center space-y-4">
              <div className="relative group">
                <img 
                  src={`https://picsum.photos/id/${i + 60}/400/500`} 
                  alt="Staff member" 
                  className="rounded-3xl shadow-lg w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">Staff Member {i}</h4>
                <p className="text-orange-500 font-medium">Senior Pet Consultant</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
