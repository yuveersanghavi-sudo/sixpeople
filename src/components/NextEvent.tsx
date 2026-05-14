import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function NextEvent() {
  return (
    <section id="next-event" className="section-padding">
      <div className="bg-black rounded-[4rem] px-6 py-20 md:py-32 text-center relative overflow-hidden">
        {/* Subtle background flair */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-brand-red/30 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-brand-red text-white text-[12px] font-black uppercase tracking-[0.3em] mb-10 shadow-[0_0_30px_rgba(220,20,60,0.4)]">
              <Sparkles className="w-4 h-4" />
              Applications are live
            </div>
            
            <h2 className="text-6xl md:text-[8vw] font-black text-white mb-6 italic tracking-tighter leading-none">
              JUNE <span className="text-brand-red">2026</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-400 mb-16 font-medium tracking-tight">
              We announce events 15-20 days in advance. Stay tuned.
            </p>

            <a 
              href="https://forms.gle/placeholder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex scale-125 md:scale-[1.4] mb-24 px-12"
            >
              Apply Now
            </a>

            <div className="grid md:grid-cols-2 gap-12 text-left mt-16 pt-16 border-t border-white/10">
              <div className="space-y-6">
                <h4 className="text-2xl font-black text-white italic">WHO CAN JOIN?</h4>
                <ul className="space-y-4">
                  {[
                    "Bombay-based founders & creators",
                    "Ages 18-25",
                    "Serious about what they're building"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-gray-300 text-lg font-medium tracking-tight">
                      <span className="text-brand-red font-black text-2xl leading-none">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-2xl font-black text-white italic">ADMISSIONS</h4>
                <p className="text-gray-400 text-lg leading-snug font-medium tracking-tight">
                  Currently open to all ambitious builders. Shifting to invite-only after a few more events to maintain a high-density community.
                </p>
                <div className="inline-block px-4 py-1.5 border border-brand-red/30 rounded-lg text-brand-red text-[10px] font-black uppercase tracking-widest">
                   Curated Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
