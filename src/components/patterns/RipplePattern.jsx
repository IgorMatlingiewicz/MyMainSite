export default function RipplePattern({ mode }) {
    const color = mode === 'dark' ? 'rgba(53,197,190,0.15)' : 'rgba(13,148,136,0.13)';
    const cx = 320;
    const cy = 220;
    const radii = [60, 100, 145, 195, 250, 310];

    return (
        <svg
            width={320}
            height={230}
            overflow="visible"
            style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        >
            {radii.map((r, i) => (
                <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth="1.5"
                />
            ))}
        </svg>
    );
}
