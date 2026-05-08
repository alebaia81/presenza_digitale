import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <h1 className="text-[6rem] leading-none font-serif m-0 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-3xl font-semibold mt-0 mb-6">
        Pagina Non Trovata
      </h2>
      <p className="text-zinc-400 text-lg mb-8 max-w-md leading-relaxed font-light">
        La pagina che stai cercando potrebbe essere stata rimossa, aver cambiato
        nome o essere temporaneamente non disponibile.
      </p>
      <Link
        to="/"
        className="inline-block bg-white text-black no-underline px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
      >
        Torna alla Home
      </Link>
    </main>
  );
}
