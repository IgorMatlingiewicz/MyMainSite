export default function BracketsPattern({ mode, position = 'bottom-right' }) {
    const color = mode === 'dark' ? 'rgba(53,197,190,0.13)' : 'rgba(13,148,136,0.12)';
    const symbols = [
        { x: 30,  y: 40,  text: '{',   size: 52 },
        { x: 80,  y: 40,  text: '}',   size: 52 },
        { x: 150, y: 20,  text: '</>',  size: 28 },
        { x: 20,  y: 110, text: '<',   size: 44 },
        { x: 70,  y: 120, text: '>',   size: 44 },
        { x: 140, y: 90,  text: '{',   size: 34 },
        { x: 185, y: 50,  text: '}',   size: 34 },
        { x: 10,  y: 180, text: '</>',  size: 22 },
        { x: 100, y: 170, text: '{',   size: 26 },
        { x: 160, y: 155, text: '>',   size: 30 },
    ];

    return (
        <svg
            width={220}
            height={210}
            style={{
                position: 'absolute',
                ...(position === 'center-right' && { right: 0, top: '50%', transform: 'translateY(-50%)' }),
                ...(position === 'bottom-left'  && { left: 0, bottom: 0 }),
                ...(position === 'bottom-right' && { right: 0, bottom: 0 }),
                pointerEvents: 'none',
                zIndex: 0,
                fontFamily: 'monospace',
            }}
        >
            {symbols.map((s, i) => (
                <text
                    key={i}
                    x={s.x}
                    y={s.y}
                    fontSize={s.size}
                    fill={color}
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    {s.text}
                </text>
            ))}
        </svg>
    );
}
