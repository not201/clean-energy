import { useEffect, useRef, useState } from "react";

export default function ZoomIn({ children, delay = 0, className = "" }) {
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
      { threshold: 0.2 }
    );

    obs.observe(element);

    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        opacity-0 scale-90
        transition-all duration-[900ms] ease-out
        ${visible ? "opacity-100 scale-100" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
