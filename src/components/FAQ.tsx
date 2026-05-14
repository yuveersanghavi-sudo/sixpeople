import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How many people attend each event?",
    a: "50-100 people. We keep it exclusive so everyone can talk to as many people as possible."
  },
  {
    q: "How often are events?",
    a: "Once a month, always in Bombay."
  },
  {
    q: "What's the format?",
    a: "It varies — coffee hangs, sports evenings, art sessions, or other activities. Always 2-4 hours. Never panels or pitch sessions."
  },
  {
    q: "Who can join?",
    a: "Bombay-based founders, creators, and builders aged 18-25 who are serious and ambitious. Currently open to all; will shift to invite-only after a few events."
  },
  {
    q: "How much does it cost?",
    a: "Varies by event. Payment is online through our form."
  },
  {
    q: "How do I apply?",
    a: "Fill out the application form. We collect your name, Instagram, what you're building, why you want to join, location, and contact info."
  },
  {
    q: "What happens after I apply?",
    a: "You'll get a confirmation email and be added to our WhatsApp community of 250+ founders."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-brand-bg">
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <div className="sticky top-32">
            <h2 className="text-5xl md:text-8xl font-black mb-8 italic tracking-tighter leading-none">Questions?</h2>
            <div className="h-2 w-24 bg-brand-red rounded-full mb-8" />
            <p className="text-2xl text-brand-gray font-medium tracking-tight mb-12">Everything you need to know about joining the community.</p>
            <div className="p-8 bg-black rounded-[2.5rem] text-white">
              <p className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-brand-red">Direct Support</p>
              <a href="mailto:hello@sixpeople.co" className="text-2xl font-bold hover:text-brand-red transition-all">hello@sixpeople.co</a>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 space-y-6">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-[2.5rem] transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-brand-red/10' : 'bg-white border border-black/5 hover:border-brand-red/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-10 text-left flex items-center justify-between transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className={`font-black text-2xl tracking-tighter transition-colors ${openIndex === i ? 'text-brand-red' : 'text-black'}`}>{faq.q}</span>
                <div className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-brand-red text-white rotate-180' : 'bg-brand-bg text-gray-400'}`}>
                   <ChevronDown className="w-6 h-6" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="p-10 pt-0 text-brand-gray text-xl leading-tight font-medium tracking-tight">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
