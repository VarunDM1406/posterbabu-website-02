import React from 'react';
import { MessageCircle, Zap, CheckCircle, Star, Palette, ThumbsUp } from 'lucide-react';

// Required Constants for the HomePage
const ENTRY_OFFERS = [
  {
    name: "Fast Edit",
    price: 49,
    tagline: "Perfect for quick changes",
    features: ["Edit existing poster", "Text or offer update", "Delivered fast"],
    button: "Edit My Poster"
  },
  {
    name: "Custom Poster",
    price: 149,
    tagline: "Designed for your business",
    features: ["Custom poster design", "Instagram / WhatsApp size", "HD file delivery", "Delivered within 24 hours"],
    button: "Create My Poster",
    highlight: true
  }
];

const PORTFOLIO_ITEMS = [
  { id: 1, cat: "Bakery", title: "Fresh Cake Offer", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
  { id: 2, cat: "Gym", title: "Monthly Membership Offer", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
  { id: 3, cat: "Retail", title: "Festive Season Sale", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80" },
  { id: 4, cat: "Salon", title: "Discounted Hair Spa", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" },
  { id: 5, cat: "Cafe", title: "Breakfast Combo Poster", img: "https://images.unsplash.com/photo-1501339817302-ee4f89db0fe0?auto=format&fit=crop&w=600&q=80" },
  { id: 6, cat: "Coaching", title: "Admission Open Flyer", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" },
];

const TESTIMONIALS = [
  { name: "Rahul", biz: "Gym Owner", text: "PosterBabu made my gym posters in 10 minutes! Really professional work.", rating: 5 },
  { name: "Sushma", biz: "Salon Owner", text: "I just send a WhatsApp and get beautiful designs for my parlor. Best service.", rating: 5 },
  { name: "Amit", biz: "Cafe Owner", text: "Very affordable and fast. They understand local customers very well.", rating: 5 },
];

const openWhatsApp = (context = "") => {
  const baseMessage = context 
    ? `Hi PosterBabu 👋\nI'm interested in: ${context}.\n\n*Business Name:* \n*Details:* `
    : "Hi PosterBabu 👋 I want to order a poster for my business.";
  window.open(`https://wa.me/917428091729?text=${encodeURIComponent(baseMessage)}`, '_blank');
};

// HomePage Component
const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-500">
    {/* 1. Hero Section */}
    <section className="pt-16 md:pt-28 pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-8 uppercase">
            <Zap size={14} fill="currentColor" /> Fastest Design Service in India
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
            Get Ready-to-Post <br/>Social Media <span className="text-orange-600">Creatives</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Posters, offers, and festival creatives designed for small businesses. Delivered in <span className="text-slate-900 font-bold border-b-2 border-orange-400">minutes</span> via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => openWhatsApp("Hero Order")}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-green-200 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <MessageCircle fill="currentColor" /> Order a Poster
            </button>
            <button 
              onClick={() => navigate('pricing')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-10 py-5 rounded-2xl font-bold text-xl transition-all"
            >
              View Pricing
            </button>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-3 text-center md:text-left mt-16 border-t pt-10">
            <div>
              <p className="text-3xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-1">500+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Posters Delivered</p>
            </div>
            <div className="border-x">
              <p className="text-3xl font-black text-slate-900 flex items-center justify-center md:justify-start gap-1">120+</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Businesses Served</p>
            </div>
            <div>
              <p className="text-3xl font-black text-orange-600 flex items-center justify-center md:justify-start gap-1">4.9★</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Rating</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative hidden md:block">
           <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" 
               alt="Bakery Sample"
               className="rounded-[2.5rem] w-full h-[500px] object-cover"
             />
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-4/5 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-[10px] font-black text-orange-600 uppercase mb-1">Bakery Sample</p>
                <p className="font-bold text-slate-900 text-sm leading-tight">Weekend Special Cake Sale Creative</p>
             </div>
           </div>
        </div>
      </div>
    </section>

    {/* 2. Try PosterBabu (Entry Offers) */}
    <section className="py-24 bg-slate-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Try PosterBabu Today</h2>
          <p className="text-slate-500 italic">No long term commitment. Get your first design now.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENTRY_OFFERS.map((offer, i) => (
            <div key={i} className={`bg-white p-10 rounded-[2.5rem] border-2 transition-all hover:shadow-xl flex flex-col ${offer.highlight ? 'border-orange-500 shadow-xl shadow-orange-100' : 'border-slate-100'}`}>
              <div className="mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{offer.tagline}</span>
                <h3 className="text-3xl font-black mt-2 mb-4">{offer.name}</h3>
                <div className="text-5xl font-black text-slate-900">₹{offer.price}</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {offer.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 font-bold text-slate-600">
                    <CheckCircle size={20} className="text-green-500 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => openWhatsApp(offer.name)}
                className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 ${offer.highlight ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-slate-100 text-slate-800'}`}
              >
                {offer.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works (Home Summary) */}
    <section className="py-24 px-4 bg-indigo-950 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-16 tracking-tight uppercase tracking-widest">How PosterBabu Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "WhatsApp Request", desc: "Send your poster request on WhatsApp." },
            { step: "02", title: "We Design", desc: "Our professional team designs your creative." },
            { step: "03", title: "Receive & Post", desc: "Receive ready-to-post designs in minutes." }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 font-black text-xl border border-white/20">
                {s.step}
              </div>
              <h3 className="font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-indigo-200 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative italic">
              <div className="flex gap-1 mb-4 text-orange-500">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6">"{t.text}"</p>
              <div>
                <div className="font-bold text-slate-900 not-italic">{t.name}</div>
                <div className="text-xs text-orange-600 font-bold not-italic tracking-wider uppercase">{t.biz}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
export default Homepage;
