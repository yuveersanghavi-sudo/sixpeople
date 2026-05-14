import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-brand-bg overflow-hidden">
      <div className="section-padding w-full relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl w-full"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-black/5 bg-white text-[11px] font-black uppercase tracking-[0.3em] mb-10 text-brand-gray"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_12px_rgba(220,20,60,0.6)]" />
            SixPeople by Bansari Shah
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-[8vw] font-black leading-[0.85] tracking-tight mb-12 text-black"
          >
            NO PANELS. <br />
            NO PITCHING. <br />
            JUST <span className="text-brand-red italic underline decoration-8 underline-offset-4">PEOPLE.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-3xl text-brand-gray max-w-4xl mx-auto mb-16 leading-tight font-medium tracking-tight"
          >
            A monthly community for ambitious founders, creators, and builders in Bombay. Find talent-dense, like-minded people. Make real connections.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-10">
            <a 
              href="#next-event"
              className="btn-primary px-16 py-6 scale-110 shadow-[20px_20px_60px_rgba(220,20,60,0.2)]"
            >
              Apply for Next Event
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[13px] font-black uppercase tracking-[0.2em] text-black pt-10 mt-6 border-t border-black/5 w-full max-w-2xl">
              <span className="flex items-center gap-2 italic"><span className="text-brand-red">/</span> 50-100 people</span>
              <span className="flex items-center gap-2 italic"><span className="text-brand-red">/</span> Monthly events</span>
              <span className="flex items-center gap-2 italic"><span className="text-brand-red">/</span> Ages 18-25</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vacation Inc Style Background Shapes */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[40vw] h-[40vw] border-[40px] border-brand-red/5 rounded-full pointer-events-none" />
    </section>
  );
}
