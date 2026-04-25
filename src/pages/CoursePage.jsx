import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getYeongdoSpots } from '../api/tourApi';
import { THEMES } from './Home';
import CourseMap from '../components/CourseMap';
import { filterCuratedSpots, FULL_COURSES } from '../data/curatedSpots';

const THEME_EMOJI = {
  sensibility: '✨',
  history: '🏛️',
  coast: '🌊',
  food: '🍽️',
  cafe: '☕',
  activity: '🎡',
  full: '🗺️',
};

export default function CoursePage() {
  const { themeId } = useParams();
  const navigate = useNavigate();

  const theme = THEMES.find((t) => t.id === themeId);
  const isFull = themeId === 'full';

  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(0);

  useEffect(() => {
    const fetchSpots = async () => {
      if (!theme) {
        setError('잘못된 테마입니다.');
        setLoading(false);
        return;
      }
      if (isFull) {
        setSpots(FULL_COURSES[selectedCourse].spots);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const data = await getYeongdoSpots(theme.contentTypeId);
        const curated = filterCuratedSpots(themeId, data);
        const finalSpots = curated.length > 0 ? curated : data.slice(0, 10);
        setSpots(finalSpots);
      } catch (e) {
        console.error('CoursePage 오류:', e);
        setError('관광지 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };
    fetchSpots();
  }, [themeId, theme, selectedCourse]);

  if (loading) {
    return (
      <div style={styles.center}>
        <div style={styles.loadingSpinner}>
          <p style={{ color: '#1a73e8', fontWeight: 'bold' }}>영도 코스를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.center}>
        <p style={{ color: '#e53e3e', marginBottom: '12px' }}>{error}</p>
        <button style={styles.backBtnDark} onClick={() => navigate('/')}>돌아가기</button>
      </div>
    );
  }

  const emoji = THEME_EMOJI[themeId] || '📍';
  const themeColor = theme?.color || '#1a73e8';

  return (
    <div style={styles.container}>
      {/* 헤더 */}
      <div style={{ ...styles.header, background: `linear-gradient(135deg, ${themeColor}, ${themeColor}99)` }}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>← 뒤로</button>
        <h1 style={styles.title}>{theme?.label}</h1>
        <p style={styles.subtitle}>{theme?.desc}</p>
        <div style={styles.spotCount}>총 {spots.length}개 장소</div>
      </div>

      {/* 풀코스 선택 탭 */}
      {isFull && (
        <div style={styles.courseTabWrap}>
          {FULL_COURSES.map((course, idx) => (
            <button
              key={course.id}
              style={{
                ...styles.courseTab,
                background: selectedCourse === idx ? themeColor : '#fff',
                color: selectedCourse === idx ? '#fff' : '#555',
                border: `2px solid ${selectedCourse === idx ? themeColor : '#e0e0e0'}`,
                boxShadow: selectedCourse === idx ? `0 4px 12px ${themeColor}44` : 'none',
              }}
              onClick={() => { setSelectedCourse(idx); setSelectedIndex(null); }}
            >
              {course.label}
            </button>
          ))}
        </div>
      )}

      {/* 지도 */}
      <CourseMap spots={spots} selectedIndex={selectedIndex} showLine={isFull} />

      {/* 장소 목록 */}
      <div style={styles.courseList}>
        {spots.map((spot, index) => {
          const imageUrl = spot.firstimage || null;
          return (
            <div
              key={spot.contentid || index}
              style={styles.spotCard}
              onClick={() => {
                setSelectedIndex(index);
                navigate(`/spot/${spot.contentid}`, { state: { spot, themeId } });
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              {/* 번호 뱃지 */}
              <div style={{ ...styles.stepBadge, background: themeColor }}>
                {index + 1}
              </div>

              {/* 이미지 */}
              <div style={styles.imageBox}>
                {imageUrl ? (
                  <img src={imageUrl} alt={spot.title} style={styles.image}
                    onError={(e) => { e.target.style.display = 'none'; }} />
                ) : (
                  <div style={{ ...styles.imageFallback, background: `${themeColor}18` }}>
                    <span style={{ fontSize: '40px' }}>{emoji}</span>
                  </div>
                )}
                {/* 이미지 위 태그 */}
                {spot.hours && (
                  <div style={styles.hoursTag}>🕐 {spot.hours.split('/')[0].trim()}</div>
                )}
              </div>

              {/* 정보 */}
              <div style={styles.spotInfo}>
                <h3 style={styles.spotTitle}>{spot.title}</h3>
                <p style={styles.spotAddr}>📍 {spot.addr1 || '주소 정보 없음'}</p>
                {spot.desc && (
                  <p style={styles.spotDesc}>{spot.desc}</p>
                )}
                <div style={styles.cardFooter}>
                  {isFull && index < spots.length - 1 && (
                    <span style={{ ...styles.nextArrow, color: themeColor }}>↓ 다음 장소</span>
                  )}
                  <span style={{ ...styles.detailLink, color: themeColor }}>상세정보 보기 →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 공유 버튼 */}
      <button
        style={{ ...styles.shareBtn, borderColor: themeColor, color: themeColor }}
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert('링크가 복사되었습니다!');
        }}
      >
        🔗 코스 공유하기
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '480px',
    margin: '0 auto',
    padding: '24px 16px',
    fontFamily: "'Noto Sans KR', sans-serif",
    minHeight: '100vh',
    background: '#f4f6fb',
  },
  center: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    minHeight: '100vh',
  },
  loadingSpinner: {
    textAlign: 'center', padding: '40px',
  },
  header: {
    marginBottom: '20px',
    padding: '24px 16px',
    borderRadius: '20px',
    color: '#fff',
  },
  title: { fontSize: '24px', fontWeight: 'bold', margin: '8px 0 4px' },
  subtitle: { fontSize: '13px', opacity: 0.9, margin: '0 0 12px' },
  spotCount: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.25)',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  backBtn: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none', color: '#fff',
    padding: '6px 12px', borderRadius: '8px',
    cursor: 'pointer', fontSize: '13px', marginBottom: '8px',
  },
  backBtnDark: {
    background: '#1a73e8', border: 'none', color: '#fff',
    padding: '10px 16px', borderRadius: '8px',
    cursor: 'pointer', fontSize: '14px',
  },
  courseTabWrap: {
    display: 'flex', flexDirection: 'column',
    gap: '8px', marginBottom: '16px',
  },
  courseTab: {
    width: '100%', padding: '14px',
    borderRadius: '12px', cursor: 'pointer',
    fontSize: '14px', fontWeight: 'bold',
    transition: 'all 0.2s', textAlign: 'left',
  },
  courseList: {
    display: 'flex', flexDirection: 'column',
    gap: '16px', marginBottom: '24px',
  },
  spotCard: {
    background: '#fff', borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    position: 'relative', cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
  },
  stepBadge: {
    position: 'absolute', top: '12px', left: '12px',
    width: '28px', height: '28px', borderRadius: '50%',
    color: '#fff', fontWeight: 'bold', fontSize: '13px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1, boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  imageBox: {
    width: '100%', height: '180px',
    overflow: 'hidden', position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  imageFallback: {
    width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  hoursTag: {
    position: 'absolute', bottom: '8px', right: '8px',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff', fontSize: '11px',
    padding: '3px 8px', borderRadius: '8px',
  },
  spotInfo: { padding: '14px 16px 16px' },
  spotTitle: { fontSize: '17px', fontWeight: 'bold', margin: '0 0 6px', color: '#222' },
  spotAddr: { fontSize: '12px', color: '#999', margin: '0 0 8px' },
  spotDesc: { fontSize: '13px', color: '#666', margin: '0 0 10px', lineHeight: 1.5 },
  cardFooter: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  detailLink: { fontSize: '13px', fontWeight: 'bold', margin: 0 },
  nextArrow: { fontSize: '12px', margin: 0 },
  shareBtn: {
    width: '100%', padding: '14px',
    background: '#fff',
    border: '2px solid', borderRadius: '12px',
    fontSize: '15px', fontWeight: 'bold', cursor: 'pointer',
  },
};