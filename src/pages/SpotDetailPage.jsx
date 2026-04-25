import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getSpotDetail, getSpotImages } from '../api/tourApi';
import { loadKakaoMap } from '../utils/loadKakaoMap';
import { getCoordsByAddress } from '../api/kakaoApi';
import { LOCAL_SPOTS } from '../data/curatedSpots';

export default function SpotDetailPage() {
  const { contentId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const spot = state?.spot;
  const themeId = state?.themeId;
  const realContentTypeId = spot?.contenttypeid;

  const [detail, setDetail] = useState(spot || null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    const fetchDetail = async () => {
      if (spot?.isLocal) {
        const allSpots = Object.values(LOCAL_SPOTS).flat();
        const originalSpot = allSpots.find((s) => s.title === spot.title && s.tel);
        const mergedSpot = originalSpot ? { ...spot, ...originalSpot } : spot;

        if (mergedSpot.addr1) {
          try {
            const coords = await getCoordsByAddress(mergedSpot.addr1);
            if (coords) {
              setDetail({ ...mergedSpot, mapx: coords.mapx, mapy: coords.mapy });
            } else {
              setDetail(mergedSpot);
            }
          } catch {
            setDetail(mergedSpot);
          }
        } else {
          setDetail(mergedSpot);
        }
        setImages([]);
        setLoading(false);
        return;
      }

      if (!realContentTypeId) {
        setError('contentTypeId 정보가 없습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const detailData = await getSpotDetail(contentId, realContentTypeId);
        const imageData = await getSpotImages(contentId);
        setDetail(detailData || spot);
        setImages(imageData);
      } catch (e) {
        console.error('상세페이지 오류:', e);
        setError('상세 정보를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [contentId, realContentTypeId, spot]);

  useEffect(() => {
    if (!detail?.mapx || !detail?.mapy) return;
    const lat = Number(detail.mapy);
    const lng = Number(detail.mapx);
    if (isNaN(lat) || isNaN(lng)) return;

    const drawMap = async () => {
      try {
        const kakao = await loadKakaoMap();
        await new Promise((resolve) => setTimeout(resolve, 300));
        const container = mapRef.current;
        if (!container) return;
        const position = new kakao.maps.LatLng(lat, lng);
        const map = new kakao.maps.Map(container, { center: position, level: 4 });
        new kakao.maps.Marker({ map, position, title: detail.title || '관광지' });
      } catch (err) {
        console.error('상세페이지 지도 로딩 실패:', err);
      }
    };
    drawMap();
  }, [detail]);

  if (loading) {
    return (
      <div style={styles.center}>
        <p style={{ color: '#1a73e8', fontWeight: 'bold' }}>장소 정보를 불러오는 중...</p>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div style={styles.center}>
        <p style={{ color: '#e53e3e', marginBottom: '12px' }}>{error || '상세 정보가 없습니다.'}</p>
        <button style={styles.backBtnDark} onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    );
  }

  const fallbackImageObj = images.find((img) => img?.originimgurl || img?.smallimageurl);
  const mainImage =
    detail.firstimage || detail.firstimage2 ||
    fallbackImageObj?.originimgurl || fallbackImageObj?.smallimageurl || null;

  const cleanOverview = detail.overview
    ? detail.overview.replace(/<[^>]+>/g, '')
    : detail.desc || '소개 정보가 없습니다.';

  const canShowMap =
    detail.mapx && detail.mapy &&
    !isNaN(Number(detail.mapx)) && !isNaN(Number(detail.mapy));

  const handleRoute = () => {
    if (!canShowMap) { alert('지도 좌표 정보가 없습니다.'); return; }
    const lat = Number(detail.mapy);
    const lng = Number(detail.mapx);
    window.open(
      `https://map.kakao.com/link/to/${encodeURIComponent(detail.title || '목적지')},${lat},${lng}`,
      '_blank'
    );
  };

  const handleCall = () => {
    if (detail.tel) window.open(`tel:${detail.tel}`);
  };

  return (
    <div style={styles.container}>
      {/* 메인 이미지 + 헤더 오버레이 */}
      <div style={styles.heroBox}>
        {mainImage ? (
          <img src={mainImage} alt={detail.title} style={styles.heroImage} />
        ) : (
          <div style={styles.heroFallback}>📍</div>
        )}
        <div style={styles.heroOverlay}>
          <button style={styles.backBtn} onClick={() => navigate(-1)}>← 뒤로</button>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>{detail.title}</h1>
            <p style={styles.heroAddr}>📍 {detail.addr1 || '주소 정보 없음'}</p>
          </div>
        </div>
      </div>

      {/* 빠른 액션 버튼 */}
      <div style={styles.actionRow}>
        {detail.tel && (
          <button style={styles.actionBtn} onClick={handleCall}>
            📞 전화하기
          </button>
        )}
        <button
          style={{ ...styles.actionBtn, background: '#FEE500', color: '#222' }}
          onClick={handleRoute}
        >
          🧭 길찾기
        </button>
      </div>

      {/* 기본 정보 카드 */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>📋 기본 정보</h2>
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>장소명</span>
          <span style={styles.infoValue}>{detail.title || '-'}</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.infoRow}>
          <span style={styles.infoLabel}>주소</span>
          <span style={styles.infoValue}>{detail.addr1 || '-'}</span>
        </div>
        {detail.tel && (
          <>
            <div style={styles.divider} />
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>전화번호</span>
              <span style={{ ...styles.infoValue, color: '#1a73e8' }}
                onClick={handleCall}>{detail.tel}</span>
            </div>
          </>
        )}
        {detail.hours && (
          <>
            <div style={styles.divider} />
            <div style={styles.infoRow}>
              <span style={styles.infoLabel}>영업시간</span>
              <span style={styles.infoValue}>{detail.hours}</span>
            </div>
          </>
        )}
      </div>

      {/* 장소 소개 카드 */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>💬 장소 소개</h2>
        <p style={styles.overview}>{cleanOverview}</p>
      </div>

      {/* 지도 카드 */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>🗺️ 위치 보기</h2>
        {canShowMap ? (
          <>
            <div ref={mapRef} style={styles.mapBox} />
            <button style={styles.routeBtn} onClick={handleRoute}>
              🧭 카카오맵으로 길찾기
            </button>
          </>
        ) : (
          <div style={styles.noMap}>지도 좌표 정보가 없습니다.</div>
        )}
      </div>

      {/* 추가 이미지 */}
      {images.filter((img) => img?.originimgurl || img?.smallimageurl).length > 0 && (
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>🖼️ 추가 이미지</h2>
          <div style={styles.imageGrid}>
            {images
              .filter((img) => img?.originimgurl || img?.smallimageurl)
              .map((img, index) => (
                <img
                  key={index}
                  src={img.originimgurl || img.smallimageurl}
                  alt={`추가 이미지 ${index + 1}`}
                  style={styles.subImage}
                />
              ))}
          </div>
        </div>
      )}

      <div style={{ height: '24px' }} />
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
  center: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    minHeight: '100vh',
  },
  heroBox: {
    position: 'relative',
    width: '100%', height: '280px',
    overflow: 'hidden',
    marginBottom: '0',
  },
  heroImage: {
    width: '100%', height: '100%', objectFit: 'cover',
  },
  heroFallback: {
    width: '100%', height: '100%',
    background: 'linear-gradient(135deg, #1a73e8, #0d47a1)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '60px',
  },
  heroOverlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.6) 100%)',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '16px',
  },
  backBtn: {
    alignSelf: 'flex-start',
    background: 'rgba(0,0,0,0.4)',
    border: 'none', color: '#fff',
    padding: '8px 14px', borderRadius: '20px',
    cursor: 'pointer', fontSize: '13px',
    backdropFilter: 'blur(4px)',
  },
  heroText: { color: '#fff' },
  heroTitle: { fontSize: '24px', fontWeight: 'bold', margin: '0 0 6px', textShadow: '0 2px 8px rgba(0,0,0,0.5)' },
  heroAddr: { fontSize: '13px', opacity: 0.9, margin: 0 },
  actionRow: {
    display: 'flex', gap: '10px',
    padding: '12px 16px',
    background: '#fff',
    marginBottom: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  actionBtn: {
    flex: 1, padding: '12px',
    background: '#1a73e8', color: '#fff',
    border: 'none', borderRadius: '12px',
    fontSize: '14px', fontWeight: 'bold', cursor: 'pointer',
  },
  card: {
    background: '#fff', borderRadius: '16px',
    padding: '20px', margin: '0 16px 12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  sectionTitle: {
    fontSize: '16px', fontWeight: 'bold',
    marginBottom: '14px', color: '#222',
  },
  infoRow: {
    display: 'flex', gap: '12px',
    padding: '10px 0', alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: '13px', color: '#999',
    minWidth: '64px', fontWeight: 'bold',
    flexShrink: 0,
  },
  infoValue: {
    fontSize: '14px', color: '#333',
    lineHeight: 1.5, flex: 1,
  },
  divider: {
    height: '1px', background: '#f0f0f0',
  },
  overview: {
    fontSize: '14px', color: '#555',
    lineHeight: 1.8, whiteSpace: 'pre-line', margin: 0,
  },
  mapBox: {
    width: '100%', height: '240px', borderRadius: '12px',
    overflow: 'hidden', marginBottom: '12px',
  },
  noMap: {
    width: '100%', height: '80px', borderRadius: '12px',
    background: '#f0f0f0', color: '#777',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  routeBtn: {
    width: '100%', padding: '14px', background: '#FEE500',
    color: '#222', border: 'none', borderRadius: '12px',
    fontSize: '15px', fontWeight: 'bold', cursor: 'pointer',
  },
  backBtnDark: {
    background: '#1a73e8', border: 'none', color: '#fff',
    padding: '10px 16px', borderRadius: '8px',
    cursor: 'pointer', fontSize: '14px',
  },
  imageGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  subImage: { width: '100%', height: '120px', objectFit: 'cover', borderRadius: '10px' },
};