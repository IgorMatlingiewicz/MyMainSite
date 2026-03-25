export default function WavesPattern({ mode }) {
    const color = mode === 'dark' ? 'rgba(73,123,197,0.15)' : 'rgba(73,123,197,0.09)';
    const waves = 4;
    const amplitude = 10;
    const w = 1400;
    const h = 80;

    const wavePath = (offsetY, phase) => {
        const points = [];
        for (let x = 0; x <= w; x += 10) {
            const y = offsetY + Math.sin((x / w) * Math.PI * 3 + phase) * amplitude;
            points.push(`${x},${y.toFixed(1)}`);
        }
        return `M ${points.join(' L ')}`;
    };

    return (
        <svg
            width="100%"
            height={h}
            viewBox={`0 0 ${w} ${h}`}
            preserveAspectRatio="none"
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {Array.from({ length: waves }, (_, i) => (
                <path
                    key={i}
                    d={wavePath(20 + i * 18, i * 0.6)}
                    fill="none"
                    stroke={color}
                    strokeWidth="1.5"
                />
            ))}
        </svg>
    );
}
