import { useEffect, useRef, useState } from "react";

export default function RevealLeft({ children, delay = 0, className = "" }) {
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
      { threshold: 0.1 } // Bajamos el umbral para que detecte antes
    );

    obs.observe(element);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        w-full relative flex-shrink-0 will-change-transform
        transition-all duration-[900ms] ease-out
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}