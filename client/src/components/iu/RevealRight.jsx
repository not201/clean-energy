import { useEffect, useRef, useState } from "react";

export default function RevealRight({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    obs.observe(element);

    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        /* ESTRUCTURA ROBUSTA (Igual que el Left) */
        w-full relative flex-shrink-0 z-0
        will-change-transform

        /* ANIMACIÓN */
        transition-all duration-[900ms] ease-out
        
        /* LOGICA: Si es visible, se pone en 0. Si no, se mueve a la DERECHA (positivo) */
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}