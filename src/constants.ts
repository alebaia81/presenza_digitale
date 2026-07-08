export const WA_NUMBER = "393398156719"; 
export const waLink = `https://wa.me/${WA_NUMBER}?text=Ciao,%20vorrei%20informazioni%20sui%20vostri%20servizi%20di%20Web%20Design%20a%20Piacenza.`;
export const waLinkBlog = `https://wa.me/${WA_NUMBER}?text=Ciao!%20Ho%20letto%20il%20vostro%20blog%20e%20vorrei%20una%20consulenza%20gratuita%20per%20la%20mia%20attivit%C3%A0.`;
export const waLinkStarter = `https://wa.me/${WA_NUMBER}?text=Ciao,%20sono%20interessato%20al%20piano%20Starter%20per%20la%20mia%20attivit%C3%A0.`;
export const waLinkProfessional = `https://wa.me/${WA_NUMBER}?text=Ciao,%20vorrei%20informazioni%20sul%20piano%20Professional%20(Abbonamento%20o%20Una%20Tantum).`;
export const waLinkBusiness = `https://wa.me/${WA_NUMBER}?text=Ciao,%20vorrei%20informazioni%20sul%20piano%20Business%20(Abbonamento%20o%20Una%20Tantum).`;export const getWaLink = (pathname: string): string => {
  if (pathname === '/web-agency-cremona') {
    return `https://wa.me/${WA_NUMBER}?text=Ciao%20Alessandro%2C%20vorrei%20maggiori%20informazioni%20sui%20vostri%20servizi%20di%20sviluppo%20siti%20web%20e%20soluzioni%20AI%20a%20Cremona.`;
  }
  if (pathname.startsWith('/blog')) {
    return waLinkBlog;
  }
  return waLink;
};
