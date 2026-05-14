import { motion } from 'motion/react';

const steps = [
  {
    number: "1",
    title: "Apply",
    desc: "Fill in your details, Instagram, and what you're building. We look for ambition."
  },
  {
    number: "2",
    title: "Get Confirmed",
    desc: "We review every application manually to ensure the room stays talent-dense."
  },
  {
    number: "3",
    title: "Pay Online",
    desc: "Event fee varies by format, paid via securely via our selection email."
  },
  {
    number: "4",
    title: "Join the Group",
    desc: "Get added to our restricted WhatsApp community of 250+ founders."
  },
  {
    number: "5",
    title: "Show Up",
    desc: "Meet people, share insights, and build real friendships in Bombay."
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-white section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6">How It Works</h2>
          <p className="text-gray-500 text-lg">A simple process designed to curate the best possible environment for everyone.</p>
        </div>
        <div className="hidden md:block w-32 h-1 bg-brand-red rounded-full mb-4" />
      </div>
      
      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white p-10 rounded-[3rem] flex-grow flex flex-col group hover:bg-brand-red transition-all duration-500 border border-black/5 shadow-sm">
              <span className="w-12 h-12 flex items-center justify-center bg-brand-red text-white font-black text-2xl group-hover:bg-white group-hover:text-brand-red transition-colors mb-8 rounded-2xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                {step.number}
              </span>
              <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors tracking-tight italic">{step.title}</h3>
              <p className="text-brand-gray group-hover:text-white/80 transition-colors leading-snug font-medium tracking-tight">
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
               <div className="hidden md:flex justify-center py-4">
                  <div className="w-1.5 h-12 bg-brand-red/10 rounded-full" />
               </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
