import axios from 'axios';

const BASE_URL = '/api/B551011/KorService2';
const API_KEY = import.meta.env.VITE_TOUR_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const normalizeItems = (items) => {
  if (!items) return [];
  return Array.isArray(items) ? items : [items];
};

// 영도구 관광지 목록 조회
export const getYeongdoSpots = async (contentTypeId = '') => {
  try {
    const response = await api.get('/areaBasedList2', {
      params: {
        serviceKey: API_KEY,
        MobileOS: 'ETC',
        MobileApp: 'yeongdo-tour',
        _type: 'json',
        numOfRows: 50,
        pageNo: 1,
        arrange: 'C',
        areaCode: 6,
        sigunguCode: 14,   // ← 이걸로 수정
        ...(contentTypeId ? { contentTypeId } : {}),
      },
    });

    console.log('목록 응답:', response.data);

    const items = response.data?.response?.body?.items?.item;
    return normalizeItems(items);
  } catch (error) {
    console.error('getYeongdoSpots 오류:', error);
    console.error('상태코드:', error.response?.status);
    console.error('응답데이터:', error.response?.data);
    throw error;
  }
};

export const getSpotDetail = async (contentId, contentTypeId) => {
  try {
    const response = await api.get('/detailCommon2', {
      params: {
        serviceKey: API_KEY,
        MobileOS: 'ETC',
        MobileApp: 'yeongdo-tour',
        _type: 'json',
        contentId,
        contentTypeId,
        defaultYN: 'Y',
        addrinfoYN: 'Y',
        mapinfoYN: 'Y',
        overviewYN: 'Y',
        firstImageYN: 'Y',
      },
    });

    console.log('상세 응답:', response.data);

    const items = response.data?.response?.body?.items?.item;
    const normalized = normalizeItems(items);
    return normalized[0] || null;
  } catch (error) {
    console.error('getSpotDetail 오류:', error);
    console.error('상태코드:', error.response?.status);
    console.error('응답데이터:', error.response?.data);
    throw error;
  }
};

export const getSpotImages = async (contentId) => {
  try {
    const response = await api.get('/detailImage2', {
      params: {
        serviceKey: API_KEY,
        MobileOS: 'ETC',
        MobileApp: 'yeongdo-tour',
        _type: 'json',
        contentId,
        imageYN: 'Y',
        subImageYN: 'Y',
      },
    });

    console.log('이미지 응답:', response.data);

    const items = response.data?.response?.body?.items?.item;
    return normalizeItems(items);
  } catch (error) {
    console.error('getSpotImages 오류:', error);
    console.error('상태코드:', error.response?.status);
    console.error('응답데이터:', error.response?.data);
    throw error;
  }
};