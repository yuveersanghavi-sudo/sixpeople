import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/90 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 flex items-center justify-center">
             <img src="/sixpeoplelogo.jpeg" alt="SixPeople" className="w-full h-full object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <div className="flex flex-col -gap-1">
            <h1 className="text-2xl font-black uppercase tracking-tighter leading-none">SixPeople</h1>
            <p className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Bombay Community</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[12px] font-black uppercase tracking-[0.2em]">
          <a href="#about" className="hover:text-brand-red transition-all">About</a>
          <a href="#past-events" className="hover:text-brand-red transition-all">Past Events</a>
          <a href="#next-event" className="hover:text-brand-red transition-all">Next Event</a>
          <a href="#faq" className="hover:text-brand-red transition-all">FAQ</a>
          <a href="#next-event" className="bg-brand-red text-white px-8 py-3 rounded-full hover:bg-black transition-all">
            Apply Now
          </a>
        </div>

        <div className="md:hidden">
          <button className="p-2 text-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
