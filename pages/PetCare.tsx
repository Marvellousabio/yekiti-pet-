
import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { getPetAdvice } from '../geminiService';

const PetCare: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsLoading(true);
    setAnswer('');
    const res = await getPetAdvice(question);
    setAnswer(res);
    setIsLoading(false);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-fredoka font-bold mb-4">Pet Care & Advice</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Expert knowledge and AI-powered assistance for all your pet parenting needs.
          </p>
        </header>

        {/* AI Assistant Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 mb-20">
          <div className="bg-orange-500 p-8 text-white flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <Sparkles className="mr-2" /> Ask the Vet Assistant
              </h2>
              <p className="opacity-80 text-sm">Powered by Gemini AI for instant advice</p>
            </div>
            <MessageCircle size={40} className="opacity-40" />
          </div>
          <div className="p-8">
            <form onSubmit={handleAsk} className="flex gap-4 mb-8">
              <input 
                type="text" 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., How often should I bathe my Golden Retriever?"
                className="flex-grow bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 transition-colors disabled:bg-gray-300"
              >
                {isLoading ? 'Thinking...' : <Send />}
              </button>
            </form>

            {answer && (
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-2 rounded-full text-white shrink-0">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-900 mb-2">Expert Advice</h4>
                    <p className="text-gray-700 leading-relaxed">{answer}</p>
                  </div>
                </div>
              </div>
            )}
            {!answer && !isLoading && (
              <div className="text-center py-12 text-gray-400">
                <p>Curious about pet nutrition, behavior, or grooming? Go ahead, ask!</p>
              </div>
            )}
          </div>
        </div>

        {/* Blog Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-fredoka font-bold flex items-center">
              <BookOpen className="mr-3 text-orange-500" /> Recent Articles
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                    <button className="text-sm font-bold text-gray-800 hover:text-orange-500 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetCare;
