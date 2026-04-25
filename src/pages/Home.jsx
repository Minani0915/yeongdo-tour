import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.png';

export const THEMES = [
  { id: 'sensibility', label: '✨ 감성 코스', desc: '흰여울, 절영해안, 봉래산 뷰', contentTypeId: '12', color: '#FF6B9D' },
  { id: 'history', label: '🏛️ 역사 코스', desc: '깡깡이예술마을, 영도대교, 근대유산', contentTypeId: '12', color: '#4ECDC4' },
  { id: 'coast', label: '🌊 해안 코스', desc: '태종대, 절영해안, 감지해변', contentTypeId: '12', color: '#45B7D1' },
  { id: 'food', label: '🍚 로컬 맛집', desc: '영도 토박이만 아는 찐 밥집', contentTypeId: '39', color: '#FF8C42' },
  { id: 'cafe', label: '☕ 카페', desc: '영도 감성 오션뷰 카페 모음', contentTypeId: '38', color: '#A78BFA' },
  { id: 'activity', label: '🎡 놀거리', desc: '아르떼뮤지엄, 짚라인, 캠핑', contentTypeId: '12', color: '#34D399' },
  { id: 'full', label: '🗺️ 영도 풀코스', desc: '영도를 테마별로 알차게 즐기는 코스!', contentTypeId: '', color: '#1a73e8' },
];

export default function Home() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleStart = () => {
    if (!selected) {
      alert('테마를 선택해주세요!');
      return;
    }
    navigate(`/course/${selected.id}`);
  };

  return (
    <div style={styles.container}>
      {/* 히어로 헤더 */}
      <div style={styles.hero}>
        <img src={heroImg} alt="영도" style={styles.heroImg} />
        <div style={styles.heroOverlay}>
          <p style={styles.heroTag}>🌊 부산 영도구 관광 가이드</p>
          <h1 style={styles.heroTitle}>영도 한 바퀴</h1>
          <p style={styles.heroSubtitle}>영도구의 숨겨진 매력을{'\n'}테마별 코스로 만나보세요</p>
        </div>
      </div>

      {/* 테마 선택 */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>어떤 코스로 떠나볼까요?</h2>
        <div style={styles.themeGrid}>
          {THEMES.map((theme) => {
            const isSelected = selected?.id === theme.id;
            const isFull = theme.id === 'full';
            return (
              <div
                key={theme.id}
                style={{
                  ...styles.themeCard,
                  ...(isFull ? styles.themeCardFull : {}),
                  borderColor: isSelected ? theme.color : 'transparent',
                  background: isSelected
                    ? `${theme.color}22`
                    : isFull
                    ? `linear-gradient(135deg, ${theme.color}22, ${theme.color}11)`
                    : '#fff',
                  boxShadow: isSelected
                    ? `0 4px 16px ${theme.color}44`
                    : '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onClick={() => setSelected(theme)}
              >
                <div style={{ ...styles.themeIcon, background: isSelected ? theme.color : `${theme.color}22` }}>
                  <span style={{ fontSize: '22px' }}>{theme.label.split(' ')[0]}</span>
                </div>
                <div style={styles.themeText}>
                  <h3 style={{ ...styles.themeLabel, color: isSelected ? theme.color : '#333' }}>
                    {theme.label.split(' ').slice(1).join(' ')}
                  </h3>
                  <p style={styles.themeDesc}>{theme.desc}</p>
                </div>
                {isSelected && (
                  <div style={{ ...styles.checkBadge, background: theme.color }}>✓</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 시작 버튼 */}
      <button
        style={{
          ...styles.startBtn,
          background: selected
            ? `linear-gradient(135deg, ${selected.color}, ${selected.color}cc)`
            : 'linear-gradient(135deg, #1a73e8, #0d47a1)',
          opacity: selected ? 1 : 0.5,
          cursor: selected ? 'pointer' : 'not-allowed',
        }}
        onClick={handleStart}
      >
        {selected ? `${selected.label} 시작하기 →` : '코스를 선택해주세요'}
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '480px',
    margin: '0 auto',
    fontFamily: "'Noto Sans KR', sans-serif",
    minHeight: '100vh',
    background: '#f4f6fb',
    paddingBottom: '32px',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '240px',
    overflow: 'hidden',
    marginBottom: '24px',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '16px',
  },
  heroTag: {
    fontSize: '12px',
    background: 'rgba(255,255,255,0.2)',
    padding: '4px 12px',
    borderRadius: '20px',
    marginBottom: '8px',
    backdropFilter: 'blur(4px)',
  },
  heroTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0 0 8px',
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  heroSubtitle: {
    fontSize: '14px',
    opacity: 0.9,
    margin: 0,
    lineHeight: 1.6,
    whiteSpace: 'pre-line',
  },
  section: {
    padding: '0 16px',
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#222',
  },
  themeGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  themeCard: {
    padding: '16px',
    borderRadius: '16px',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  themeCardFull: {
    gridColumn: '1 / -1',
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    gap: '12px',
  },
  themeIcon: {
    width: '52px',
    height: '52px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    flexShrink: 0,
  },
  themeText: {
    flex: 1,
  },
  themeLabel: {
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '0 0 4px',
  },
  themeDesc: {
    fontSize: '12px',
    color: '#888',
    margin: 0,
    lineHeight: 1.4,
  },
  checkBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '11px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  startBtn: {
    width: 'calc(100% - 32px)',
    margin: '0 16px',
    padding: '16px',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.2s',
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
  },
};