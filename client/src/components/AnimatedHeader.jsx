import Reveal from "./iu/Reveal.jsx";

export default function AnimatedHeader() {
  return (
    <header className="relative w-full py-28 bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 shadow-2xl overflow-hidden rounded-3xl mb-16">
      <div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent animate-[pulse_6s_ease-in-out_infinite]"></div>

        {/* Contenido */}
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Título 1 */}
          <Reveal delay={0}>
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white drop-shadow-2xl tracking-wide leading-tight">
              Energías Renovables
            </h1>
          </Reveal>

          {/* Título 2 */}
          <Reveal delay={300}>
            <h1 className="text-5xl md:text-7xl font-poppins font-extrabold text-white drop-shadow-2xl tracking-wide leading-tight">
              en la Región Insular
            </h1>
          </Reveal>

          {/* Subtítulo */}
          <Reveal delay={600}>
            <p className="mt-6 text-2xl md:text-3xl font-inter text-white/90">
              Solar · Eólica
            </p>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
