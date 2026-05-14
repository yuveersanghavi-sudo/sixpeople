import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div className="flex flex-col items-start gap-10">
            <div className="flex items-center gap-6 group">
               <div className="w-16 h-16 flex items-center justify-center p-2 border-2 border-black/5 rounded-2xl group-hover:border-brand-red transition-all">
                  <img src="/sixpeoplelogo.jpeg" alt="SixPeople" className="w-full h-full object-contain" />
               </div>
               <div>
                 <h2 className="text-4xl font-black uppercase tracking-tighter">SixPeople</h2>
                 <p className="text-xs font-black text-brand-red uppercase tracking-[0.4em] -mt-1">Bombay, India</p>
               </div>
            </div>
            <p className="text-3xl font-medium italic text-brand-gray max-w-sm tracking-tight">
              "No panels. No pitching. Just people."
            </p>
            <div className="flex gap-4">
               <div className="w-12 h-1 bg-brand-red rounded-full" />
               <div className="w-4 h-1 bg-brand-gray/20 rounded-full" />
               <div className="w-4 h-1 bg-brand-gray/20 rounded-full" />
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-12">
            <div className="space-y-6 md:text-right">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Join the collective</h4>
              <div className="flex flex-col md:items-end gap-6">
                <a 
                  href="https://instagram.com/sixpeople.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-3xl font-black hover:text-brand-red transition-all group"
                >
                  <span className="text-xs opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-display">THE COMMUNITY</span>
                  @sixpeople.co
                </a>
                <a 
                  href="https://instagram.com/bansarishahh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-3xl font-black hover:text-brand-red transition-all group"
                >
                  <span className="text-xs opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-display">THE FOUNDER</span>
                  @bansarishahh
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">
          <p className="flex items-center gap-3">
             <span className="text-brand-red">●</span>
             © 2026 SixPeople Community.
          </p>
          <div className="flex gap-12">
             <a href="#" className="hover:text-black transition-all hover:tracking-[0.4em]">Privacy</a>
             <a href="#" className="hover:text-black transition-all hover:tracking-[0.4em]">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
