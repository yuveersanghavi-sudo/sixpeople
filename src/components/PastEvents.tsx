import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "The Juhu Coffee Hang",
    date: "May 9, 2026",
    location: "Third Wave Coffee, Juhu",
    format: "Coffee + Open Networking",
    desc: "Our first event brought together founders and creators from across Bombay. The best part? A random 40-year-old walked in for coffee, joined our group, and networked his textile business on the spot.",
    img: "/sixpeople9thmay.jpeg"
  }
];

export default function PastEvents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = events[activeIndex];

  return (
    <section id="past-events" className="bg-brand-bg">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">OUR FIRST EVENT</h2>
            <div className="h-2 w-32 bg-brand-red rounded-full" />
          </div>
          <div className="flex gap-4">
             <button className="w-16 h-16 bg-white border border-black/5 rounded-2xl flex items-center justify-center text-black hover:bg-brand-red hover:text-white transition-all shadow-sm">
                <ChevronLeft className="w-8 h-8" />
             </button>
             <button className="w-16 h-16 bg-white border border-black/5 rounded-2xl flex items-center justify-center text-black hover:bg-brand-red hover:text-white transition-all shadow-sm">
                <ChevronRight className="w-8 h-8" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 group relative overflow-hidden rounded-[4rem] bg-white p-4 border border-black/5 shadow-xl">
            <div className="aspect-[16/9] w-full rounded-[3.5rem] overflow-hidden">
              <motion.img 
                key={activeEvent.img}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={activeEvent.img} 
                alt={activeEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>
            <div className="absolute top-12 left-12">
               <div className="px-6 py-2 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg">
                 May 9, 2026
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-10">
             <div className="bento-item h-full flex flex-col bg-white border-2 border-brand-red/5">
                <h3 className="text-3xl font-black mb-8 italic text-brand-red leading-none">{activeEvent.title}</h3>
                <div className="mb-8 p-6 bg-brand-bg rounded-3xl border border-black/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Location</p>
                  <p className="font-bold text-xl">{activeEvent.location}</p>
                </div>
                <div className="flex-grow">
                  <p className="text-xl text-brand-gray font-medium leading-snug tracking-tight italic">"{activeEvent.desc}"</p>
                </div>
                <div className="mt-8 pt-8 border-t border-black/5">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-2 italic">Format</p>
                   <p className="font-black text-black tracking-tight">{activeEvent.format}</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="aspect-square rounded-[3.5rem] bg-white flex flex-col items-center justify-center border border-black/5 overflow-hidden group relative">
                <div className="absolute top-6 right-6 w-2 h-2 bg-brand-red rounded-full opacity-20" />
                <div className="text-[12px] font-black text-brand-gray/40 uppercase tracking-[0.3em] text-center px-8 transition-all duration-300 group-hover:text-brand-red group-hover:scale-110">
                  More photos coming soon
                </div>
                <div className="absolute bottom-[-100%] left-0 w-full h-1 bg-brand-red transition-all duration-500 group-hover:bottom-0" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
