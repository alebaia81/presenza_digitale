import React, { useState } from 'react';
import { m, useReducedMotion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../../data/faqs';


export default function FaqSection() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section 
      aria-labelledby="faq-section-heading" 
      className="py-24 px-6 relative border-t border-border-primary bg-bg-secondary transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-16">
          <h2 
            id="faq-section-heading" 
            className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight font-serif text-gold-gradient"
          >
            Domande Frequenti
          </h2>
          <p className="text-xl text-text-secondary font-light font-sans max-w-2xl mx-auto">
            Tutto quello che c'è da sapere sulla creazione di siti web accessibili, posizionamento SEO locale a Piacenza e costi di sviluppo.
          </p>
        </div>

        {/* Lista Fisarmonica FAQ */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div 
                key={index} 
                className="bg-bg-card border border-border-primary/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3>
                  <button
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left py-5 px-6 font-bold text-lg text-[#2d2a26] dark:text-text-primary focus-visible:outline-3 focus-visible:outline-offset-2 hover:text-gold-amber dark:hover:text-gold-amber transition-colors font-serif gap-4"
                  >
                    <span>{item.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gold-amber shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      aria-hidden="true" 
                    />
                  </button>
                </h3>

                <m.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  initial={false}
                  animate={shouldReduceMotion ? {
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0
                  } : {
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" as const }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 px-6 pt-1 text-text-secondary leading-relaxed font-light font-sans text-base border-t border-border-primary/10">
                    {item.answer}
                  </div>
                </m.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
