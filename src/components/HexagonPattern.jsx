export default function HexagonPattern({ mode, position = 'bottom-right' }) {
    const r = 32;
    const dx = r * Math.sqrt(3);
    const dy = r * 1.5;
    const color = mode === 'dark' ? 'rgba(53,197,190,0.18)' : 'rgba(13,148,136,0.15)';

    const hexPoints = (cx, cy) =>
        Array.from({ length: 6 }, (_, i) => {
            const angle = (Math.PI / 3) * i - Math.PI / 2;
            return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
        }).join(' ');

    const hexagons = [];
    const rows = 4;
    const cols = 5;

    for (let row = 0; row < rows; row++) {
        const offset = row % 2 === 0 ? 0 : dx / 2;
        for (let col = 0; col < cols; col++) {
            hexagons.push({
                cx: col * dx + offset + r,
                cy: row * dy + r,
            });
        }
    }

    const svgW = cols * dx + dx / 2 + r;
    const svgH = rows * dy + r * 0.5;

    return (
        <svg
            width={svgW}
            height={svgH}
            style={{
                position: 'absolute',
                ...(position === 'bottom-right' && { bottom: 0, right: 0 }),
                ...(position === 'top-left'    && { top: 0, left: 0 }),
                ...(position === 'center-left' && { left: 0, top: '60%', transform: 'translateY(-50%)' }),
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {hexagons.map((h, i) => (
                <polygon
                    key={i}
                    points={hexPoints(h.cx, h.cy)}
                    fill="none"
                    stroke={color}
                    strokeWidth="1.5"
                />
            ))}
        </svg>
    );
}
