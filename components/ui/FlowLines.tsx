"use client";

import { useEffect, useRef } from "react";

interface Line {
  baseY: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  width: number;
  alpha: number;
}

export default function FlowLines({
  className = "",
  lineRgb = "51, 69, 158",
  count = 6,
  speed = 1,
}: {
  className?: string;
  /** "r, g, b" for every line's stroke color. */
  lineRgb?: string;
  count?: number;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let lines: Line[] = [];
    let raf = 0;
    let active = true;

    function resize() {
      width = parent!.clientWidth;
      height = parent!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      lines = Array.from({ length: count }, (_, i) => ({
        baseY: height * ((i + 1) / (count + 1)),
        amplitude: height * (0.05 + Math.random() * 0.06),
        frequency: 0.0016 + Math.random() * 0.0014,
        phase: Math.random() * Math.PI * 2,
        speed: (0.006 + Math.random() * 0.008) * speed,
        width: i % 3 === 0 ? 1.6 : 1,
        alpha: 0.14 + Math.random() * 0.16,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      const step = Math.max(6, Math.floor(width / 140));

      for (const line of lines) {
        const gradient = ctx!.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, `rgba(${lineRgb}, 0)`);
        gradient.addColorStop(0.5, `rgba(${lineRgb}, ${line.alpha})`);
        gradient.addColorStop(1, `rgba(${lineRgb}, 0)`);

        ctx!.strokeStyle = gradient;
        ctx!.lineWidth = line.width;
        ctx!.lineCap = "round";
        ctx!.beginPath();

        for (let x = 0; x <= width; x += step) {
          const y = line.baseY + Math.sin(x * line.frequency + line.phase) * line.amplitude;
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.stroke();
      }
    }

    function step() {
      if (!active) return;
      for (const line of lines) {
        line.phase += line.speed;
      }
      draw();
      raf = requestAnimationFrame(step);
    }

    function handleVisibility() {
      if (document.hidden) {
        active = false;
        cancelAnimationFrame(raf);
      } else if (!reducedMotion) {
        active = true;
        raf = requestAnimationFrame(step);
      }
    }

    resize();
    draw();
    if (!reducedMotion) raf = requestAnimationFrame(step);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(parent);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [lineRgb, count, speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
