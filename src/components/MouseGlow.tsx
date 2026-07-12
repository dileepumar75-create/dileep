import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="mouse-glow hidden md:block"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
};

export default MouseGlow;
