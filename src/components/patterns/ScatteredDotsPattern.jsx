export default function ScatteredDotsPattern({ mode }) {
    const color = mode === 'dark' ? 'rgba(73,123,197,0.22)' : 'rgba(73,123,197,0.12)';
    const dots = [
        { cx: 30,  cy: 20,  r: 3 },
        { cx: 80,  cy: 50,  r: 2 },
        { cx: 140, cy: 15,  r: 4 },
        { cx: 200, cy: 40,  r: 2.5 },
        { cx: 55,  cy: 90,  r: 2 },
        { cx: 110, cy: 75,  r: 3.5 },
        { cx: 170, cy: 95,  r: 2 },
        { cx: 230, cy: 70,  r: 3 },
        { cx: 20,  cy: 140, r: 2.5 },
        { cx: 90,  cy: 130, r: 2 },
        { cx: 150, cy: 155, r: 3 },
        { cx: 210, cy: 120, r: 2 },
        { cx: 60,  cy: 185, r: 3.5 },
        { cx: 130, cy: 200, r: 2 },
        { cx: 190, cy: 175, r: 2.5 },
        { cx: 240, cy: 160, r: 3 },
        { cx: 35,  cy: 220, r: 2 },
        { cx: 100, cy: 240, r: 3 },
        { cx: 170, cy: 225, r: 2 },
    ];

    return (
        <svg
            width={260}
            height={260}
            style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {dots.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={color} />
            ))}
        </svg>
    );
}
