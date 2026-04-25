let kakaoMapLoadingPromise = null;

export function loadKakaoMap() {
  if (window.kakao && window.kakao.maps) {
    return Promise.resolve(window.kakao);
  }

  if (kakaoMapLoadingPromise) {
    return kakaoMapLoadingPromise;
  }

  kakaoMapLoadingPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[data-kakao-map="true"]'
    );

    if (existingScript) {
      existingScript.addEventListener('load', () => {
        window.kakao.maps.load(() => resolve(window.kakao));
      });
      existingScript.addEventListener('error', reject);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&autoload=false`;
    script.async = true;
    script.dataset.kakaoMap = 'true';

    script.onload = () => {
      window.kakao.maps.load(() => resolve(window.kakao));
    };

    script.onerror = () => {
      reject(new Error('카카오맵 스크립트를 불러오지 못했습니다.'));
    };

    document.head.appendChild(script);
  });

  return kakaoMapLoadingPromise;
}