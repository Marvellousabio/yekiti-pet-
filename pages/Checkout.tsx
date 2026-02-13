
import React, { useContext, useState } from 'react';
import { CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const cartContext = useContext(CartContext);
  const [isOrdered, setIsOrdered] = useState(false);

  if (!cartContext || cartContext.cart.length === 0) {
    if (isOrdered) {
       return (
        <div className="py-24 container mx-auto px-4 text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-green-600 mb-8 animate-bounce">
            <CheckCircle2 size={64} />
          </div>
          <h1 className="text-4xl font-fredoka font-bold mb-4">Order Confirmed!</h1>
          <p className="text-gray-500 mb-12 max-w-md mx-auto">
            Thank you for shopping at Yetkus Pet Store. We've sent a confirmation email to you.
          </p>
          <Link to="/" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold">
            Back to Home
          </Link>
        </div>
      );
    }
    return (
      <div className="py-24 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty.</h1>
        <Link to="/supplies" className="text-orange-500 font-bold hover:underline">Start Shopping</Link>
      </div>
    );
  }

  const totalPrice = cartContext.cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const shipping = 5.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    cartContext.clearCart();
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-fredoka font-bold mb-12">Checkout</h1>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Truck className="mr-2 text-orange-500" /> Shipping Information
              </h3>
              <form className="grid md:grid-cols-2 gap-4">
                <input placeholder="First Name" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
                <input placeholder="Last Name" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
                <input placeholder="Email Address" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500 md:col-span-2" />
                <input placeholder="Address" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500 md:col-span-2" />
                <input placeholder="City" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
                <input placeholder="Postal Code" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
              </form>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <CreditCard className="mr-2 text-orange-500" /> Payment Details
              </h3>
              <div className="space-y-4">
                <div className="flex space-x-4 mb-6">
                  <div className="border-2 border-orange-500 p-4 rounded-xl flex-1 flex items-center justify-center font-bold text-orange-500">
                    Credit Card
                  </div>
                  <div className="border-2 border-gray-100 p-4 rounded-xl flex-1 flex items-center justify-center font-bold text-gray-400">
                    PayPal
                  </div>
                </div>
                <input placeholder="Card Number" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM/YY" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
                  <input placeholder="CVC" className="w-full bg-gray-50 p-3 rounded-xl border-none outline-none focus:ring-1 focus:ring-orange-500" />
                </div>
              </div>
            </section>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border sticky top-28">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
                {cartContext.cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-500">{item.name} x {item.quantity}</span>
                    <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-fredoka font-bold pt-4">
                  <span>Total</span>
                  <span className="text-orange-500">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={handlePlaceOrder}
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold mt-8 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-100"
              >
                Place Order
              </button>
              <div className="mt-6 flex items-center justify-center text-xs text-gray-400">
                <ShieldCheck size={14} className="mr-1" /> SSL Secure Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
