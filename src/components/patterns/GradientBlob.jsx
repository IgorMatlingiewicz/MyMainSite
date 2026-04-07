export default function GradientBlob({ mode }) {
    const a = mode === 'dark' ? 'rgba(53, 197, 190,' : 'rgba(13, 148, 136,';

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            <div style={{
                position: 'absolute', borderRadius: '50%', filter: 'blur(90px)',
                width: '420px', height: '420px',
                background: `${a} 0.07)`,
                top: '-120px', right: '-80px',
            }} />
            <div style={{
                position: 'absolute', borderRadius: '50%', filter: 'blur(70px)',
                width: '300px', height: '300px',
                background: `${a} 0.05)`,
                bottom: '-80px', left: '-60px',
            }} />
            <div style={{
                position: 'absolute', borderRadius: '50%', filter: 'blur(100px)',
                width: '200px', height: '200px',
                background: `${a} 0.04)`,
                top: '40%', left: '40%',
            }} />
        </div>
    );
}
