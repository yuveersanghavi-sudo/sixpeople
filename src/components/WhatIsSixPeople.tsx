import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function WhatIsSixPeople() {
  return (
    <section id="about" className="section-padding bg-brand-bg">
      <div className="bento-grid">
        {/* Main Pillar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-8 bento-item bg-black group overflow-hidden relative min-h-[400px] flex flex-col justify-center"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic leading-none">Find Your <span className="text-brand-red">People</span></h2>
            <p className="text-lg md:text-2xl text-gray-400 leading-tight max-w-2xl font-medium tracking-tight">
              You are who you're surrounded with. SixPeople is a space where you can find people who are ambitious, serious, and smart. 
            </p>
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-red opacity-20 blur-[100px] rounded-full group-hover:opacity-40 transition-all duration-700" />
        </motion.div>

        {/* Stats Card - BOLD RED */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-12 md:col-span-4 bento-item flex flex-col justify-center items-center text-center bg-brand-red text-white"
        >
          <h3 className="text-7xl md:text-9xl font-black mb-2">
            <Counter value={250} suffix="+" />
          </h3>
          <p className="text-sm font-black uppercase tracking-[0.3em] opacity-80">Founders in WhatsApp</p>
          <div className="mt-8 px-6 py-2 bg-black/20 rounded-full text-[10px] font-black uppercase tracking-widest">
            growing daily
          </div>
        </motion.div>

        {/* The Why Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-12 md:col-span-5 bento-item bg-white border-2 border-brand-red/10"
        >
          <h3 className="text-2xl font-black mb-8 flex items-center gap-4">
             <span className="w-12 h-2 bg-brand-red rounded-full" />
             WHY WE EXIST
          </h3>
          <p className="text-xl text-brand-gray leading-snug font-medium tracking-tight">
            Finding talent-dense crowds is hard. In college, at events, or random meetups — you end up approaching people blindly, hoping they're like-minded.
          </p>
          <div className="red-divider opacity-10" />
          <p className="text-xl text-brand-gray leading-snug font-medium tracking-tight">
            At SixPeople, it's different. We curate a community of builders, creators, and founders who are serious about what they're doing.
          </p>
        </motion.div>

        {/* The Format Section - RED ACCENT BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="col-span-12 md:col-span-7 bento-item bg-white border-2 border-brand-red/10 flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-12">
            <h3 className="text-4xl md:text-5xl font-black leading-none italic max-w-sm font-display tracking-tighter">No panels. <br />Just conversations.</h3>
            <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-2xl">6</div>
          </div>
          <p className="text-xl text-brand-gray leading-snug font-medium tracking-tight max-w-xl">
            Every format is designed for real interaction. Coffee hangs, sports evenings, or art sessions. Make best friends, not just connections.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
