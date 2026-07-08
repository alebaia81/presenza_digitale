import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  role: string;
}

interface TrustSectionProps {
  city?: string;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    text: "Finalmente un professionista che capisce le realtà locali. Hanno rifatto il sito della mia trattoria e ora riceviamo molte più prenotazioni online. Assistenza rapidissima.",
    author: "Marco R.",
    role: "Ristoratore, Piacenza"
  },
  {
    text: "Professionali e veloci. Mi serviva una landing page per la mia attività di artigiano e in pochi giorni ero online con un sito bellissimo e visibile su Google.",
    author: "Andrea A.",
    role: "Artigiano, Caorso"
  },
  {
    text: "Avere un referente di zona fa la differenza. Ci siamo incontrati di persona e hanno capito subito cosa serviva alla mia attività. Consigliatissimi.",
    author: "Elena T.",
    role: "Libera Professionista, Piacenza"
  }
];

export default function TrustSection({
  city = "Piacenza",
  reviews = defaultReviews
}: TrustSectionProps) {
  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4 font-serif">I risultati parlano per noi</h2>
        <p className="text-text-secondary font-light text-lg">Cosa dicono gli imprenditori e le attività commerciali di {city} che ci hanno scelto.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="bg-bg-card border border-border-primary rounded-3xl p-8 hover:bg-bg-secondary hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-6 text-gold-amber" aria-hidden="true">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-text-secondary text-[1.1rem] leading-relaxed mb-8 font-light italic">"{review.text}"</p>
            </div>
            <div className="flex items-center gap-4 border-t border-border-primary pt-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#bf953f] to-[#b38728] flex items-center justify-center text-black font-bold text-lg shadow-lg">
                {review.author.charAt(0)}
              </div>
              <div>
                <p className="text-text-primary font-bold">{review.author}</p>
                <p className="text-gold-amber text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
