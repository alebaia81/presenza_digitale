import React from 'react';
import { User, Mail, Send } from 'lucide-react';

interface ContactSectionProps {
  inviaWhatsApp: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactSection({ inviaWhatsApp }: ContactSectionProps) {
  return (
    <section id="contatti" className="py-24 px-6 relative bg-zinc-950 border-t border-white/5">
      <div className="absolute inset-0 bg-gold-amber/5 mix-blend-overlay" />
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <h2 className="sr-only">Facciamo decollare il tuo business.</h2>
           <div aria-hidden="true" className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Facciamo decollare <br/><span className="text-gold-amber">il tuo business.</span></div>
           <p className="text-xl text-zinc-400 font-light">Non aspettare che i tuoi concorrenti prendano tutti i clienti della provincia. Contattaci oggi per una consulenza gratuita.</p>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Inviaci un messaggio</h3>
          <form id="contact-form" onSubmit={inviaWhatsApp} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input type="text" id="name" name="name" required className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-amber focus:ring-1 focus:ring-gold-amber transition-colors" placeholder="Mario Rossi" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input type="email" id="email" name="email" required className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gold-amber focus:ring-1 focus:ring-gold-amber transition-colors" placeholder="mario@azienda.it" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Raccontaci il tuo progetto</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-gold-amber focus:ring-1 focus:ring-gold-amber transition-colors resize-none" placeholder="Voglio rifare il sito per la mia azienda a Piacenza..."></textarea>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  required 
                  className="mt-1 w-4 h-4 rounded border-white/10 bg-zinc-950/50 text-gold-amber focus:ring-gold-amber transition-colors cursor-pointer"
                />
                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Dichiaro di aver letto la <a href="/privacy" className="text-gold-amber hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati. Utilizzerò queste informazioni esclusivamente per analizzare il tuo progetto e fornirti una risposta tecnica personalizzata.
                </span>
              </label>
              <p className="text-[10px] text-zinc-400 leading-tight">
                I tuoi dati non verranno ceduti a terzi e saranno trattati nel rispetto del GDPR.
              </p>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-2 shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:shadow-[0_0_50px_rgba(191,149,63,0.6)]">
              Invia Messaggio <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
