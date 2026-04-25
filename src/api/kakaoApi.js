const KAKAO_REST_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

// 장소 이름으로 카카오 로컬 검색 → 사진 URL 반환
export const getKakaoPlaceImage = async (placeName) => {
  try {
    const response = await fetch(
      `/kakao/v2/local/search/keyword.json?query=${encodeURIComponent(placeName + ' 영도구')}&size=1`,
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
        },
      }
    );

    const data = await response.json();
    const place = data.documents?.[0];

    if (!place) return null;

    const detailResponse = await fetch(
      `/kakao/v2/local/search/keyword.json?query=${encodeURIComponent(placeName)}&category_group_code=FD6,CE7&size=1`,
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
        },
      }
    );

    const detailData = await detailResponse.json();
    return detailData.documents?.[0] || place;
  } catch (err) {
    console.error('카카오 장소 검색 오류:', err);
    return null;
  }
};

// 주소로 좌표 가져오기
export const getCoordsByAddress = async (address) => {
  try {
    const res = await fetch(
      `/kakao/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
      { headers: { Authorization: `KakaoAK ${KAKAO_REST_KEY}` } }
    );
    const data = await res.json();
    const result = data.documents?.[0];
    if (!result) return null;
    return {
      mapx: result.x,
      mapy: result.y,
    };
  } catch (err) {
    console.error('좌표 변환 오류:', err);
    return null;
  }
};