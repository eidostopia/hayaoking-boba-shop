export default function Home() {
  return (
    <div style={{
      backgroundColor: '#d0ecff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Hayaoking Boba Shop</h1>
      <p>ようこそ！5大カテゴリから選んでください：</p>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        fontSize: '1.5rem',
        lineHeight: '2.5rem'
      }}>
        <li>🧋 タピオカ（珍珠）</li>
        <li>🥛 クリーマー（奶精）</li>
        <li>🍓 ジャム（果醬）</li>
        <li>🥤 コップ（杯材）</li>
        <li>🍬 トッピング（配料）</li>
      </ul>
      <div style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
      }}>
        💬
      </div>
    </div>
  );
}