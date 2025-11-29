import Reveal from "./iu/Reveal.jsx";

export default function Hero() {
  return (
    <div className="relative w-full py-24 bg-gradient-to-r from-sky-600 to-blue-500 text-white text-center overflow-hidden">

      {/* Fondo decorativo con ondas (puede ser un svg de fondo) */}
      <div className="absolute inset-0 opacity-20 bg-[url('/ondas.svg')] animate-pulse" />

      <div className="relative max-w-4xl mx-auto px-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl">
            Energías Renovables en la Región Caribe
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-4 text-xl opacity-90">
            Solar · Eólica · Desarrollo Territorial para La Guajira
          </p>
        </Reveal>
      </div>
    </div>
  );
}
