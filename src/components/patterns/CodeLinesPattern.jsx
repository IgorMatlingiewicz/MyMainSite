export default function CodeLinesPattern({ mode }) {
    const color = mode === 'dark' ? 'rgba(73,123,197,0.18)' : 'rgba(73,123,197,0.1)';
    const lines = [
        { y: 20,  w: 120, x: 40 },
        { y: 36,  w: 80,  x: 60 },
        { y: 52,  w: 150, x: 20 },
        { y: 68,  w: 60,  x: 80 },
        { y: 84,  w: 100, x: 40 },
        { y: 100, w: 130, x: 10 },
        { y: 116, w: 70,  x: 70 },
        { y: 132, w: 110, x: 30 },
        { y: 148, w: 50,  x: 90 },
        { y: 164, w: 140, x: 10 },
        { y: 180, w: 90,  x: 50 },
        { y: 196, w: 60,  x: 70 },
    ];

    return (
        <svg
            width={200}
            height={215}
            style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {lines.map((l, i) => (
                <rect
                    key={i}
                    x={l.x}
                    y={l.y}
                    width={l.w}
                    height={5}
                    rx={2.5}
                    fill={color}
                />
            ))}
        </svg>
    );
}
