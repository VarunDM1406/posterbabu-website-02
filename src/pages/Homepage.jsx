import React from "react";
import { MessageCircle, Zap, CheckCircle, Star } from "lucide-react";

/* ENTRY OFFERS */

const ENTRY_OFFERS = [
{
name: "Fast Edit",
price: 49,
tagline: "Perfect for quick changes",
features: [
"Edit existing poster",
"Text or offer update",
"Delivered fast"
],
button: "Edit My Poster"
},
{
name: "Custom Poster",
price: 149,
tagline: "Designed for your business",
features: [
"Custom poster design",
"Instagram / WhatsApp size",
"HD file delivery",
"Delivered within 24 hours"
],
button: "Create My Poster",
highlight: true
}
];

/* PORTFOLIO ITEMS */

const PORTFOLIO_ITEMS = [
{
id: 1,
cat: "Bakery",
title: "Fresh Cake Offer",
img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
},
{
id: 2,
cat: "Gym",
title: "Monthly Membership Offer",
img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
},
{
id: 3,
cat: "Retail",
title: "Festive Season Sale",
img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80"
},
{
id: 4,
cat: "Salon",
title: "Discounted Hair Spa",
img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
},
{
id: 5,
cat: "Cafe",
title: "Breakfast Combo Poster",
img: "https://images.unsplash.com/photo-1501339817302-ee4f89db0fe0?auto=format&fit=crop&w=600&q=80"
},
{
id: 6,
cat: "Coaching",
title: "Admission Open Flyer",
img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
}
];

/* TESTIMONIALS */

const TESTIMONIALS = [
{
name: "Rahul",
biz: "Gym Owner",
text: "PosterBabu made my gym posters in 10 minutes! Really professional work.",
rating: 5
},
{
name: "Sushma",
biz: "Salon Owner",
text: "I just send a WhatsApp and get beautiful designs for my parlor. Best service.",
rating: 5
},
{
name: "Amit",
biz: "Cafe Owner",
text: "Very affordable and fast. They understand local customers very well.",
rating: 5
}
];

/* WHATSAPP FUNCTION */

const openWhatsApp = (context = "") => {

const baseMessage = context
? `Hi PosterBabu 👋\nI'm interested in: ${context}.\n\nBusiness Name:\nDetails:`
: "Hi PosterBabu 👋 I want to order a poster for my business.";

window.open(
`https://wa.me/917428091729?text=${encodeURIComponent(baseMessage)}`,
"_blank"
);

};

/* HOMEPAGE COMPONENT */

const Homepage = ({ navigate }) => {

return (

<div className="animate-in fade-in duration-500">

{/* HERO SECTION */}

<section className="pt-16 md:pt-28 pb-20 px-4">

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

<div className="flex-1 text-center md:text-left">

<div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-8 uppercase">
<Zap size={14} fill="currentColor" />
Fastest Design Service in India
</div>

<h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
Get Ready-to-Post <br/>
Social Media <span className="text-orange-600">Creatives</span>
</h1>

<p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
Posters, offers, and festival creatives designed for small businesses.
Delivered in <span className="font-bold text-slate-900">minutes</span> via WhatsApp.
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

<button
onClick={() => openWhatsApp("Poster Order")}
className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3"
>

<MessageCircle fill="currentColor"/>
Order a Poster

</button>

<button
onClick={() => navigate("pricing")}
className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-10 py-5 rounded-2xl font-bold text-xl"
>

View Pricing

</button>

</div>

</div>

<div className="flex-1 hidden md:block">

<img
src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
alt="Poster Sample"
className="rounded-3xl shadow-2xl"
/>

</div>

</div>

</section>

{/* ENTRY OFFERS */}

<section className="py-24 bg-slate-50 px-4">

<div className="max-w-4xl mx-auto">

<div className="text-center mb-16">

<h2 className="text-4xl font-black mb-4">
Try PosterBabu Today
</h2>

<p className="text-slate-500 italic">
No long term commitment. Get your first design now.
</p>

</div>

<div className="grid md:grid-cols-2 gap-8">

{ENTRY_OFFERS.map((offer, i) => (

<div
key={i}
className={`bg-white p-10 rounded-3xl border-2 flex flex-col ${
offer.highlight
? "border-orange-500 shadow-xl"
: "border-slate-100"
}`}
>

<span className="text-xs font-black uppercase tracking-widest text-slate-400">
{offer.tagline}
</span>

<h3 className="text-3xl font-black mt-2 mb-4">
{offer.name}
</h3>

<div className="text-5xl font-black mb-6">
₹{offer.price}
</div>

<ul className="space-y-3 mb-8">

{offer.features.map((f, j) => (

<li key={j} className="flex items-center gap-3 text-slate-600 font-bold">

<CheckCircle size={18} className="text-green-500"/>

{f}

</li>

))}

</ul>

<button
onClick={() => openWhatsApp(offer.name)}
className={`py-4 rounded-xl font-black ${
offer.highlight
? "bg-orange-600 text-white"
: "bg-slate-100"
}`}
>

{offer.button}

</button>

</div>

))}

</div>

</div>

</section>

{/* TESTIMONIALS */}

<section className="py-24 px-4">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-black text-center mb-16">
What Our Clients Say
</h2>

<div className="grid md:grid-cols-3 gap-8">

{TESTIMONIALS.map((t, i) => (

<div key={i} className="bg-slate-50 p-8 rounded-2xl">

<div className="flex gap-1 text-orange-500 mb-4">

{[...Array(t.rating)].map((_, j) => (

<Star key={j} size={14} fill="currentColor"/>

))}

</div>

<p className="italic mb-6">
"{t.text}"
</p>

<div className="font-bold">
{t.name}
</div>

<div className="text-xs text-orange-600 font-bold uppercase">
{t.biz}
</div>

</div>

))}

</div>

</div>

</section>

</div>

);

};

export default Homepage;