import { useEffect, useState } from "react";

export default function Parallax({ children, speed = 0.2, className = "", zIndex = 0 }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handle = () => {
      // Opcional: Si quieres que se mueva MENOS, baja la velocidad (ej. 0.05)
      setOffset(window.scrollY * speed);
    };

    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [speed]);

  return (
    <div
      style={{ 
        transform: `translateY(${offset}px)`,
        zIndex: zIndex // <--- Agregamos control manual
      }}
      className={`relative ${className}`} // <--- 'relative' es obligatorio para que z-index funcione
    >
      {children}
    </div>
  );
}
