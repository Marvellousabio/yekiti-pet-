
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-fredoka font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Questions about our pets? Need help with your order? Our team is here to help you and your furry friends.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Visit Our Store</h4>
                <p className="text-gray-500 text-sm">123 Pet Lane, Sunshine City, SC 45678</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="bg-green-100 p-4 rounded-2xl text-green-600">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <a href="tel:+1234567890" className="text-gray-500 text-sm hover:text-green-600 font-bold">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                <p className="text-gray-500 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-500 text-sm">Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <div className="bg-green-500 text-white p-8 rounded-3xl shadow-lg flex items-center justify-between group cursor-pointer">
              <div>
                <h4 className="font-bold text-lg mb-1">WhatsApp Us</h4>
                <p className="text-white/80 text-sm">Instant support for quick questions.</p>
              </div>
              <MessageSquare size={32} className="group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-10">
            <h3 className="text-2xl font-fredoka font-bold mb-8">Send Us a Message</h3>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none">
                  <option>Pet Adoption Inquiry</option>
                  <option>Product Support</option>
                  <option>Delivery Status</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100">
                  <Send size={18} className="mr-2" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-3xl overflow-hidden h-96 shadow-sm border bg-gray-200 flex items-center justify-center relative">
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="font-bold">Google Maps Integration Placeholder</p>
            <p className="text-sm">In a real deployment, an interactive map would be embedded here.</p>
          </div>
          <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border">
            <p className="font-bold text-gray-800">Yetkus Pet Store HQ</p>
            <p className="text-xs text-gray-500">123 Pet Lane, Sunshine City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
