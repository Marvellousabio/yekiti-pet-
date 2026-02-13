
import React from 'react';
import { Star, Quote, Heart, MessageSquare, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS } from '../constants.ts';

const Reviews: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            <Heart size={16} fill="currentColor" />
            <span>Wall of Love</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-fredoka font-bold text-gray-900">
            Trusted by Thousands of <span className="text-orange-500">Pet Parents</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            At Yetkus, our mission is to build lasting bonds between pets and their humans. 
            Read the stories of families who found their best friends here.
          </p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Happy Adoptions', value: '5,000+', icon: ThumbsUp, color: 'text-blue-500' },
            { label: '5-Star Ratings', value: '4,200+', icon: Star, color: 'text-yellow-500' },
            { label: 'Expert Advice', value: '100%', icon: MessageSquare, color: 'text-orange-500' },
            { label: 'Health Guaranteed', value: 'Verified', icon: Heart, color: 'text-red-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center space-y-2">
              <stat.icon size={24} className={`mx-auto ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all duration-300">
              <Quote className="absolute top-6 right-8 text-orange-100 group-hover:text-orange-200 transition-colors" size={48} />
              <div className="flex text-yellow-400 mb-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    className={i >= testimonial.rating ? "text-gray-200" : ""}
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-orange-100 shadow-sm" 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-orange-500 font-medium">Adopted {testimonial.petName}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Featured Success Story */}
          <div className="lg:col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                alt="Featured Story"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                Story of the Month
              </div>
              <h3 className="text-3xl font-fredoka font-bold">Rescuing Rocky</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                "Rocky came to us as a shy, nervous pup. Thanks to the training classes and specialized diet plan recommended by the Yetkus staff, he is now the bravest explorer in our hiking group!"
              </p>
              <div className="font-bold">— The Miller Family</div>
            </div>
          </div>

          {/* Call to action card */}
          <div className="bg-gray-900 rounded-3xl p-8 text-center flex flex-col items-center justify-center space-y-6 text-white">
            <div className="bg-orange-500 p-4 rounded-full">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-fredoka font-bold">Have a Story to Share?</h3>
            <p className="text-gray-400">We love seeing our pets in their new homes. Submit your review and photos to be featured!</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors w-full">
              Submit Your Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
