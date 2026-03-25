export default function DotGridPattern({ mode }) {
    const color = mode === 'dark' ? 'rgba(73,123,197,0.2)' : 'rgba(73,123,197,0.12)';
    const spacing = 22;
    const cols = 10;
    const rows = 8;
    const r = 1.8;

    const dots = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            dots.push({ cx: col * spacing + spacing, cy: row * spacing + spacing });
        }
    }

    return (
        <svg
            width={cols * spacing + spacing}
            height={rows * spacing + spacing}
            style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {dots.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r={r} fill={color} />
            ))}
        </svg>
    );
}
