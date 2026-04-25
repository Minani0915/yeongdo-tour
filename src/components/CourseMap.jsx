import { useEffect, useRef } from 'react';
import { loadKakaoMap } from '../utils/loadKakaoMap';
import { getCoordsByAddress } from '../api/kakaoApi';

export default function CourseMap({ spots = [], selectedIndex = null, showLine = false }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const polylineRef = useRef(null);
  const openInfoWindowRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || spots.length === 0) return;

    let cancelled = false;

    const initMap = async () => {
      try {
        const kakao = await loadKakaoMap();
        if (cancelled || !mapRef.current) return;

        // 주소로 좌표 변환
        const spotsWithCoords = await Promise.all(
          spots.map(async (spot) => {
            if (spot.isLocal && spot.addr1) {
              try {
                const coords = await getCoordsByAddress(spot.addr1);
                if (coords) return { ...spot, mapx: coords.mapx, mapy: coords.mapy };
              } catch {}
            }
            return spot;
          })
        );

        const validSpots = spotsWithCoords.filter(
          (spot) => spot.mapx && spot.mapy &&
          !isNaN(Number(spot.mapx)) && !isNaN(Number(spot.mapy))
        );

        if (validSpots.length === 0) return;

        const first = validSpots[0];
        const center = new kakao.maps.LatLng(Number(first.mapy), Number(first.mapx));

        const map = new kakao.maps.Map(mapRef.current, { center, level: 5 });
        mapInstanceRef.current = map;

        const bounds = new kakao.maps.LatLngBounds();
        const linePath = [];

        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = [];
        if (polylineRef.current) {
          polylineRef.current.setMap(null);
          polylineRef.current = null;
        }

        validSpots.forEach((spot, index) => {
          const position = new kakao.maps.LatLng(Number(spot.mapy), Number(spot.mapx));
          bounds.extend(position);
          linePath.push(position);

          const marker = new kakao.maps.Marker({ map, position, title: spot.title });

          const infowindow = new kakao.maps.InfoWindow({
            content: `
              <div style="padding:8px 10px;font-size:12px;max-width:180px;">
                <strong>${index + 1}. ${spot.title}</strong><br/>
                <span>${spot.addr1 || ''}</span>
              </div>
            `,
          });

          kakao.maps.event.addListener(marker, 'click', () => {
            // 이전 인포윈도우 닫기
            if (openInfoWindowRef.current) {
              openInfoWindowRef.current.close();
            }
            infowindow.open(map, marker);
            openInfoWindowRef.current = infowindow;
          });

          markersRef.current.push(marker);
        });

        if (showLine && linePath.length >= 2) {
          const polyline = new kakao.maps.Polyline({
            path: linePath,
            strokeWeight: 4,
            strokeColor: '#3366FF',
            strokeOpacity: 0.8,
            strokeStyle: 'solid',
          });
          polyline.setMap(map);
          polylineRef.current = polyline;
        }

        map.setBounds(bounds);
      } catch (error) {
        console.error('지도 초기화 실패:', error);
      }
    };

    initMap();
    return () => { cancelled = true; };
  }, [spots, showLine]);

  useEffect(() => {
    if (
      selectedIndex === null ||
      !window.kakao ||
      !mapInstanceRef.current ||
      selectedIndex >= markersRef.current.length
    ) return;

    const marker = markersRef.current[selectedIndex];
    if (!marker) return;

    const position = marker.getPosition();
    mapInstanceRef.current.panTo(position);
  }, [selectedIndex]);

  if (spots.length === 0) {
    return <div style={styles.emptyMap}>지도 좌표 정보가 없습니다.</div>;
  }

  return <div ref={mapRef} style={styles.map} />;
}

const styles = {
  map: {
    width: '100%', height: '320px', borderRadius: '16px',
    overflow: 'hidden', marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  emptyMap: {
    width: '100%', height: '160px', borderRadius: '16px',
    background: '#f0f0f0', color: '#777',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '20px',
  },
};