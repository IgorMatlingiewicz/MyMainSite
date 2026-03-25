import { useEffect, useRef } from 'react';

export default function ParticleBackground({ mode }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        if (mode !== 'dark') return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const PARTICLE_COUNT = 13;
        const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: 0.3 + Math.random() * 0.45,
            vy: (Math.random() - 0.5) * 0.12,
            size: 1.5 + Math.random() * 1.5,
            opacity: 0.25 + Math.random() * 0.35,
            trailLength: 70 + Math.floor(Math.random() * 70),
            trail: [],
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                p.trail.push({ x: p.x, y: p.y });
                if (p.trail.length > p.trailLength) p.trail.shift();

                if (p.x > canvas.width + 120) {
                    p.x = -60;
                    p.y = Math.random() * canvas.height;
                    p.trail = [];
                }

                const rgb = mode === 'dark' ? '35, 110, 105' : '120, 100, 210';

                // Smuga
                p.trail.forEach((point, i) => {
                    const ratio = i / p.trail.length;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, p.size * ratio * 0.8, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${rgb}, ${ratio * p.opacity * 0.45})`;
                    ctx.fill();
                });

                // Kropka
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${p.opacity})`;
                ctx.fill();

                // Delikatna poświata
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${p.opacity * 0.1})`;
                ctx.fill();
            });

            animRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
        };
    }, [mode]);

    if (mode !== 'dark') return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
}
