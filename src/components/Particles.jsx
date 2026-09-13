import { useEffect, useRef } from "react";

// Constelație de particule care se leagă între ele și de cursor
export default function Particles({ density = 70 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let points = [];
    let raf = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      const count = Math.round(density * Math.min(1, window.innerWidth / 1200)) + 20;
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        vy: (Math.random() - 0.5) * 0.3 * dpr,
        r: (Math.random() * 1.3 + 0.5) * dpr,
      }));
    };

    const linkDist = 130 * dpr;
    const mouseDist = 180 * dpr;

    const line = (a, b, alpha) => {
      ctx.strokeStyle = `rgba(138, 164, 255, ${alpha})`;
      ctx.lineWidth = dpr;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(210, 218, 255, 0.7)";
        ctx.fill();

        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < mouseDist) line(p, mouse, (1 - dm / mouseDist) * 0.45);
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const d = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
          if (d < linkDist) line(points[i], points[j], (1 - d / linkDist) * 0.18);
        }
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX * dpr;
      mouse.y = e.clientY * dpr;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [density]);

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />;
}
