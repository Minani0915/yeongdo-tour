import heinyeoul from '../assets/image/heinyeoul.png';
import tunnel from '../assets/image/tunnel.png';
import sunrise from '../assets/image/sunrise.png';
import bongnae from '../assets/image/bongnae.png';
import cruise from '../assets/image/cruise.png';
import ganggang from '../assets/image/ganggang.png';
import bridge from '../assets/image/bridge.png';
import museumImg from '../assets/image/museum.png';
import goguma from '../assets/image/goguma.png';
import haenyeo from '../assets/image/haenyeo.png';
import taejongdae from '../assets/image/taejongdae.png';
import coastal from '../assets/image/coastal.png';
import gamji from '../assets/image/gamji.png';
import wattda from '../assets/image/wattda.png';
import dongsam_jjam from '../assets/image/dongsam_jjam.png';
import taejong_jjam from '../assets/image/taejong_jjam.png';
import wagul from '../assets/image/wagul.png';
import alcheon from '../assets/image/alcheon.png';
import ilgu from '../assets/image/ilgu.png';
import boksung from '../assets/image/boksung.png';
import toro from '../assets/image/toro.png';
import haedae from '../assets/image/haedae.png';
import tonsom from '../assets/image/tonsom.png';
import jaesung from '../assets/image/jaesung.png';
import taekwang from '../assets/image/taekwang.png';
import grazie from '../assets/image/grazie.png';
import okcheon from '../assets/image/okcheon.png';
import jagal from '../assets/image/jagal.png';
import baekseol from '../assets/image/baekseol.png';
import redlighthouse from '../assets/image/redlighthouse.png';
import sarangbang from '../assets/image/sarangbang.png';
import piark from '../assets/image/piark.png';
import cafe385 from '../assets/image/cafe385.png';
import thrill from '../assets/image/thrill.png';
import mippy from '../assets/image/mippy.png';
import haebbing from '../assets/image/haebbing.png';
import bielr from '../assets/image/bielr.png';
import lisboa from '../assets/image/lisboa.png';
import ether from '../assets/image/ether.png';
import atelier from '../assets/image/atelier.png';
import lounge from '../assets/image/lounge.png';
import yangdabang from '../assets/image/yangdabang.png';
import singi from '../assets/image/singi.png';
import arte from '../assets/image/arte.png';
import hotspring from '../assets/image/hotspring.png';
import flying from '../assets/image/flying.png';
import cgv from '../assets/image/cgv.png';
import campingImg from '../assets/image/camping.png';
import shootingImg from '../assets/image/shooting.png';
import jungnori from '../assets/image/jungnori.png';

const PLACEHOLDER = {
  흰여울문화마을: heinyeoul,
  흰여울해안터널: tunnel,
  해돋이전망대: sunrise,
  봉래산: bongnae,
  은하수유람선: cruise,
  깡깡이: ganggang,
  영도대교: bridge,
  해양박물관: museumImg,
  고구마공원: goguma,
  해녀전시관: haenyeo,
  태종대: taejongdae,
  절영해안: coastal,
  감지해변: gamji,
  중리노을전망대: jungnori,
  wattda, dongsam_jjam, taejong_jjam, wagul, alcheon,
  ilgu, boksung, toro, haedae, tonsom,
  jaesung, taekwang, grazie, okcheon, jagal,
  baekseol, redlighthouse, sarangbang,
  piark, cafe385, thrill, mippy, haebbing,
  bielr, lisboa, ether, atelier, lounge,
  yangdabang, singi,
  arte, hotspring, flying, cgv,
  camping: campingImg,
  shooting: shootingImg,
};

export const LOCAL_SPOTS = {

  // ✨ 감성 코스
  sensibility: [
    { contentid: 'local-s-1', title: '흰여울문화마을', addr1: '부산 영도구 영선동4가 1044-6', mapx: '129.0285', mapy: '35.0866', isLocal: true, firstimage: PLACEHOLDER.흰여울문화마을, desc: '부산의 산토리니, 파란 바다와 골목이 어우러진 감성 마을', tel: '051-419-4067', hours: '' },
    { contentid: 'local-s-2', title: '영도 흰여울해안터널', addr1: '부산 영도구 영선동4가 1210-38', mapx: '129.0278', mapy: '35.0858', isLocal: true, firstimage: PLACEHOLDER.흰여울해안터널, desc: '흰여울마을 아래 해안 절벽을 뚫어 만든 터널', tel: '051-403-1861', hours: '' },
    { contentid: 'local-s-3', title: '해돋이전망대', addr1: '부산 영도구 해돋이3길 410-1', mapx: '129.0812', mapy: '35.0611', isLocal: true, firstimage: PLACEHOLDER.해돋이전망대, desc: '영도 최고의 일출 명소, 탁 트인 바다 전망', tel: '051-416-0455', hours: '' },
    { contentid: 'local-s-4', title: '봉래산', addr1: '부산 영도구 청학동 산 54-10', mapx: '129.0401', mapy: '35.0912', isLocal: true, firstimage: PLACEHOLDER.봉래산, desc: '영도 중심의 산, 정상에서 부산항 파노라마 뷰', tel: '051-415-1001', hours: '' },
    { contentid: 'local-s-5', title: '태종대 은하수유람선', addr1: '부산 영도구 동삼동 1052-3', mapx: '129.0823', mapy: '35.0558', isLocal: true, firstimage: PLACEHOLDER.은하수유람선, desc: '태종대 앞바다를 운항하는 낭만적인 유람선', tel: '051-405-1700', hours: '매일 11:00 ~ 15:00' },
  ],

  // 🏛️ 역사 코스
  history: [
    { contentid: 'local-h-1', title: '깡깡이예술마을', addr1: '부산 영도구 대평동2가', mapx: '129.0356', mapy: '35.0942', isLocal: true, firstimage: PLACEHOLDER.깡깡이, desc: '조선소 노동자들의 삶이 담긴 벽화·예술 마을', tel: '0507-1488-3337', hours: '마을투어 매일 10:00~17:00 / 브레이크타임 12:00~13:00' },
    { contentid: 'local-h-2', title: '영도대교', addr1: '부산 영도구 대교동1가 190-1', mapx: '129.0327', mapy: '35.0965', isLocal: true, firstimage: PLACEHOLDER.영도대교, desc: '한국 최초의 도개교, 부산의 역사적 랜드마크', tel: '', hours: '매주 토요일 14:00~14:15 도개행사 (통행제한)' },
    { contentid: 'local-h-3', title: '국립해양박물관', addr1: '부산 영도구 해양로301번길 45', mapx: '129.0701', mapy: '35.0736', isLocal: true, firstimage: PLACEHOLDER.해양박물관, desc: '한국 유일의 국립해양박물관 (관람료 무료)', tel: '051-309-1900', hours: '화~금 09:00~18:00 / 토·일 09:00~19:00 / 월요일 휴관' },
    { contentid: 'local-h-4', title: '조내기고구마역사공원', addr1: '부산 영도구 청학동 산 54-120', mapx: '129.0445', mapy: '35.0843', isLocal: true, firstimage: PLACEHOLDER.고구마공원, desc: '조선시대 고구마 재배지 역사가 담긴 공원 (관람료 무료)', tel: '', hours: '화~일 10:00~18:00 / 월요일 휴관' },
    { contentid: 'local-h-5', title: '영도해녀문화전시관', addr1: '부산 영도구 중리남로 2-36', mapx: '129.0756', mapy: '35.0634', isLocal: true, firstimage: PLACEHOLDER.해녀전시관, desc: '제주 해녀들의 삶과 문화를 전시한 박물관', tel: '051-419-4505', hours: '화~일 09:00~18:00 / 브레이크타임 12:00~13:00 / 월요일 휴관' },
  ],

  // 🌊 해안 코스
  coast: [
    { contentid: 'local-c-1', title: '태종대유원지', addr1: '부산 영도구 동삼동 산 29-1', mapx: '129.0812', mapy: '35.0551', isLocal: true, firstimage: PLACEHOLDER.태종대, desc: '영도 최남단, 부산 8경 중 하나인 절경 명소', tel: '051-405-8745', hours: '매일 09:20~18:30' },
    { contentid: 'local-c-2', title: '절영해안산책로', addr1: '부산 영도구 영선동4가 186-47', mapx: '129.0298', mapy: '35.0859', isLocal: true, firstimage: PLACEHOLDER.절영해안, desc: '파도 소리와 함께 걷는 아름다운 해안 산책로', tel: '', hours: '' },
    { contentid: 'local-c-3', title: '감지해변', addr1: '부산광역시 영도구 동삼동 1052-3', mapx: '129.0756', mapy: '35.0623', isLocal: true, firstimage: PLACEHOLDER.감지해변, desc: '태종대 인근의 조용하고 아름다운 해변', tel: '051-419-4064', hours: '' },
    { contentid: 'local-c-4', title: '중리 노을 전망대', addr1: '부산 영도구 중리북로 5', mapx: '129.0756', mapy: '35.0623', isLocal: true, firstimage: PLACEHOLDER.중리노을전망대, desc: '영도 중리동에서 바라보는 아름다운 노을 명소', tel: '', hours: '' },
  ],

  // 🍚 로컬 맛집
  food: [
    { contentid: 'local-f-1', title: '왔다식당', addr1: '부산 영도구 하나길 811', mapx: '129.0442', mapy: '35.0889', isLocal: true, firstimage: PLACEHOLDER.wattda, desc: '한우 스지 전문, 영도 로컬들의 찐 맛집', tel: '051-412-2676', hours: '월~토 08:30 ~ 14:30' },
    { contentid: 'local-f-2', title: '동삼동불짬뽕', addr1: '부산 영도구 동삼남로 21', mapx: '129.0789', mapy: '35.0634', isLocal: true, firstimage: PLACEHOLDER.dongsam_jjam, desc: '쯔양도 다녀간 챌린지급 매운 불짬뽕', tel: '051-403-7388', hours: '월·수~일 10:30 ~ 20:00 / 화요일 휴무' },
    { contentid: 'local-f-3', title: '태종대짬뽕', addr1: '부산 영도구 태종로 805', mapx: '129.0801', mapy: '35.0567', isLocal: true, firstimage: PLACEHOLDER.taejong_jjam, desc: '부산 3대 짬뽕, 2대째 이어온 해물짬뽕 전문점', tel: '051-405-2992', hours: '월·화·목~일 10:00 ~ 21:30 / 수요일 휴무' },
    { contentid: 'local-f-4', title: '와글와글', addr1: '부산 영도구 중리북로22번길 5', mapx: '129.0756', mapy: '35.0645', isLocal: true, firstimage: PLACEHOLDER.wagul, desc: '생활의 달인 출연, 라면밥볶이 원조 맛집', tel: '', hours: '월~금 11:00 ~ 19:00' },
    { contentid: 'local-f-5', title: '영도알천국밥', addr1: '부산 영도구 웃서발로 65-1', mapx: '129.0412', mapy: '35.0921', isLocal: true, firstimage: PLACEHOLDER.alcheon, desc: '영도 현지인이 즐겨 찾는 진한 국밥 맛집', tel: '051-403-0464', hours: '월·화·수·금~일 09:00 ~ 22:00 / 목요일 휴무' },
    { contentid: 'local-f-6', title: '일구향만두', addr1: '부산 영도구 절영로49번길 24', mapx: '129.0389', mapy: '35.0934', isLocal: true, firstimage: PLACEHOLDER.ilgu, desc: '바삭한 군만두와 찐만두가 일품인 로컬 만두집', tel: '051-418-7285', hours: '월~토 10:00 ~ 20:00 / 브레이크타임 14:00 ~ 17:00 / 일요일 휴무' },
    { contentid: 'local-f-7', title: '복성만두', addr1: '부산 영도구 대평로34번길 5-8', mapx: '129.0367', mapy: '35.0948', isLocal: true, firstimage: PLACEHOLDER.boksung, desc: '영도 오랜 터줏대감, 정겨운 손만두 전문점', tel: '051-412-9468', hours: '월~금 10:00 ~ 18:00' },
    { contentid: 'local-f-8', title: '토로', addr1: '부산 영도구 태종로752번길 25', mapx: '129.0745', mapy: '35.0678', isLocal: true, firstimage: PLACEHOLDER.toro, desc: '한달 에이징 숙성 스테이크, 영도의 고급 레스토랑', tel: '051-403-8939', hours: '매일 11:30 ~ 22:00' },
    { contentid: 'local-f-9', title: '해대이모횟집', addr1: '부산 영도구 태종로 709', mapx: '129.0523', mapy: '35.0812', isLocal: true, firstimage: PLACEHOLDER.haedae, desc: '신선한 영도 로컬 횟집, 현지인 추천 맛집', tel: '051-404-1217', hours: '화~일 11:00 ~ 21:30 / 월요일 휴무' },
    { contentid: 'local-f-10', title: '톤섬', addr1: '부산 영도구 남항로9번길 36', mapx: '129.0445', mapy: '35.0867', isLocal: true, firstimage: PLACEHOLDER.tonsom, desc: '영도의 숨은 맛집, 로컬들이 즐겨 찾는 곳', tel: '0507-1337-0279', hours: '화~일 11:00 ~ 19:00 / 브레이크타임 14:00 ~ 17:00 / 월요일 휴무' },
    { contentid: 'local-f-11', title: '재성밀면', addr1: '부산 영도구 태종로 794', mapx: '129.0398', mapy: '35.0912', isLocal: true, firstimage: PLACEHOLDER.jaesung, desc: '부산 정통 밀면, 시원하고 쫄깃한 면발', tel: '051-715-8292', hours: '매일 10:00 ~ 20:30' },
    { contentid: 'local-f-12', title: '태광돼지국밥', addr1: '부산 영도구 절영로49번길 31', mapx: '129.0412', mapy: '35.0934', isLocal: true, firstimage: PLACEHOLDER.taekwang, desc: '진한 육수의 영도 돼지국밥 맛집', tel: '051-413-4801', hours: '월~토 08:30 ~ 20:00' },
    { contentid: 'local-f-13', title: '그라치에', addr1: '부산 영도구 청학동로 12', mapx: '129.0467', mapy: '35.0856', isLocal: true, firstimage: PLACEHOLDER.grazie, desc: '영도의 이탈리안 레스토랑, 파스타와 피자 맛집', tel: '070-4150-9999', hours: '매일 11:30 ~ 21:30 / 브레이크타임 15:00 ~ 17:00' },
    { contentid: 'local-f-14', title: '옥천횟집', addr1: '부산 영도구 중리남로 2-21', mapx: '129.0534', mapy: '35.0823', isLocal: true, firstimage: PLACEHOLDER.okcheon, desc: '신선한 영도 앞바다 생선회 전문점', tel: '051-403-7771', hours: '매일 11:00 ~ 21:00 / 브레이크타임 15:00 ~ 16:00' },
    { contentid: 'local-f-15', title: '태종대자갈마당', addr1: '부산 영도구 감지해변길 81', mapx: '129.0798', mapy: '35.0589', isLocal: true, firstimage: PLACEHOLDER.jagal, desc: '태종대 앞 해녀들의 신선한 해산물 먹거리 명소', tel: '', hours: '' },
    { contentid: 'local-f-16', title: '백설대학', addr1: '부산 영도구 동삼로28번길 6', mapx: '129.0712', mapy: '35.0645', isLocal: true, firstimage: PLACEHOLDER.baekseol, desc: '영도 대학가 인근 오랜 전통의 로컬 맛집', tel: '051-404-5039', hours: '화~토 11:30 ~ 21:00 / 브레이크타임 14:20 ~ 15:40 / 일·월 휴무' },
    { contentid: 'local-f-17', title: '빨간등대 영도본점', addr1: '부산 영도구 남항서로 40', mapx: '129.0334', mapy: '35.0956', isLocal: true, firstimage: PLACEHOLDER.redlighthouse, desc: '영도 남항동 신선한 해산물 맛집', tel: '0507-1382-7941', hours: '매일 11:30 ~ 21:30 / 브레이크타임 15:00 ~ 17:00' },
    { contentid: 'local-f-18', title: '사랑방 태종대점', addr1: '부산 영도구 태종로 816', mapx: '129.0801', mapy: '35.0567', isLocal: true, firstimage: PLACEHOLDER.sarangbang, desc: '태종대 인근 조개구이 맛집', tel: '010-5555-2953', hours: '일~목 12:00 ~ 23:00 / 금·토 12:00 ~ 24:00' },
  ],

  // ☕ 카페
  cafe: [
    { contentid: 'local-cafe-1', title: '피아크', addr1: '부산 영도구 해양로195번길 180', mapx: '129.0712', mapy: '35.0634', isLocal: true, firstimage: PLACEHOLDER.piark, desc: '3000평 복합문화공간, 영도 최대 오션뷰 카페', tel: '051-404-9204', hours: '매일 10:00 ~ 23:00' },
    { contentid: 'local-cafe-2', title: '카페385', addr1: '부산 영도구 태종로 539', mapx: '129.0589', mapy: '35.0756', isLocal: true, firstimage: PLACEHOLDER.cafe385, desc: '부산항대교·오륙도 뷰 루프탑 대형 카페', tel: '051-403-0385', hours: '매일 10:00 ~ 22:00' },
    { contentid: 'local-cafe-3', title: '스릴온더머그', addr1: '부산 영도구 해양힐링로 55', mapx: '129.0623', mapy: '35.0712', isLocal: true, firstimage: PLACEHOLDER.thrill, desc: '탁 트인 오션뷰, 저녁엔 재즈 공연도 있는 감성 카페', tel: '070-4141-1162', hours: '월·수~일 10:00 ~ 21:30 / 화요일 휴무' },
    { contentid: 'local-cafe-4', title: '미피카페 부산', addr1: '부산 영도구 와치로51번길 2', mapx: '129.0534', mapy: '35.0823', isLocal: true, firstimage: PLACEHOLDER.mippy, desc: '미피 캐릭터 테마 카페, 루프탑 오션뷰 포토존', tel: '070-8230-1116', hours: '매일 11:00 ~ 22:00' },
    { contentid: 'local-cafe-5', title: '해빙모먼트', addr1: '부산 영도구 절영로 196', mapx: '129.0289', mapy: '35.0861', isLocal: true, firstimage: PLACEHOLDER.haebbing, desc: '흰여울마을 인근 오션뷰 감성 카페', tel: '0507-1393-6919', hours: '매일 10:00 ~ 20:00' },
    { contentid: 'local-cafe-6', title: '비엘르', addr1: '부산 영도구 절영로 202-2', mapx: '129.0291', mapy: '35.0863', isLocal: true, firstimage: PLACEHOLDER.bielr, desc: '영도 감성 카페, 아늑한 분위기의 로컬 카페', tel: '070-8801-6150', hours: '매일 10:00 ~ 20:00' },
    { contentid: 'local-cafe-7', title: '리스보아', addr1: '부산 영도구 절영로 198', mapx: '129.0287', mapy: '35.0860', isLocal: true, firstimage: PLACEHOLDER.lisboa, desc: '포르투갈 감성의 영도 이색 카페', tel: '0507-1457-1980', hours: '일~목 09:00 ~ 21:30 / 금·토 09:00 ~ 22:00' },
    { contentid: 'local-cafe-8', title: '에테르', addr1: '부산 영도구 절영로 234', mapx: '129.0301', mapy: '35.0872', isLocal: true, firstimage: PLACEHOLDER.ether, desc: '영도 뷰맛집 감성 카페', tel: '051-263-5055', hours: '월~금 10:00 ~ 21:00 / 토·일 09:00 ~ 21:00' },
    { contentid: 'local-cafe-9', title: '아뜰리에오', addr1: '부산 영도구 절영로 204', mapx: '129.0292', mapy: '35.0864', isLocal: true, firstimage: PLACEHOLDER.atelier, desc: '아틀리에 감성의 아늑한 영도 카페', tel: '0507-1448-0399', hours: '매일 10:00 ~ 20:00' },
    { contentid: 'local-cafe-10', title: '라운지일렁', addr1: '부산 영도구 대교로2번길 7', mapx: '129.0334', mapy: '35.0956', isLocal: true, firstimage: PLACEHOLDER.lounge, desc: '파도처럼 일렁이는 감성, 영도 오션뷰 라운지 카페', tel: '0507-1466-2561', hours: '수~일 11:00 ~ 19:30 / 월·화 휴무' },
    { contentid: 'local-cafe-11', title: '양다방', addr1: '부산 영도구 대평로 49', mapx: '129.0356', mapy: '35.0942', isLocal: true, firstimage: PLACEHOLDER.yangdabang, desc: '영도 감성 카페, 따뜻한 분위기의 로컬 다방', tel: '051-416-1117', hours: '월~토 07:30 ~ 18:00 / 일 09:00 ~ 18:00' },
    { contentid: 'local-cafe-12', title: '신기커피', addr1: '부산 영도구 와치로 65', mapx: '129.0534', mapy: '35.0823', isLocal: true, firstimage: PLACEHOLDER.singi, desc: '영도 오션뷰 감성 카페', tel: '051-414-7774', hours: '매일 11:00 ~ 21:00' },
  ],

  // 🎡 놀거리
  activity: [
    { contentid: 'local-a-1', title: '아르떼뮤지엄', addr1: '부산 영도구 해양로247번길 29', mapx: '129.0723', mapy: '35.0712', isLocal: true, firstimage: PLACEHOLDER.arte, desc: '몰입형 미디어아트 전시관, 영도의 새로운 핫플', tel: '1899-5008', hours: '매일 10:00~20:00' },
    { contentid: 'local-a-2', title: '태종대온천', addr1: '부산 영도구 태종로 808', mapx: '129.0801', mapy: '35.0567', isLocal: true, firstimage: PLACEHOLDER.hotspring, desc: '태종대 인근 온천 찜질방', tel: '051-404-9001', hours: '연중무휴' },
    { contentid: 'local-a-3', title: '태종대오션플라잉 테마파크', addr1: '부산 영도구 해양힐링로 55', mapx: '129.0623', mapy: '35.0712', isLocal: true, firstimage: PLACEHOLDER.flying, desc: '짚라인과 다양한 어트랙션이 있는 해양 테마파크', tel: '051-404-0219', hours: '월·수~일 09:30~17:15 / 휴게시간 11:30~12:30 / 화요일 휴무' },
    { contentid: 'local-a-4', title: 'CGV DRIVE IN 영도', addr1: '부산 영도구 동삼동 1009', mapx: '129.0734', mapy: '35.0634', isLocal: true, firstimage: PLACEHOLDER.cgv, desc: '영도의 드라이브인 영화관, 색다른 영화 경험', tel: '1544-1122', hours: '' },
    { contentid: 'local-a-5', title: '영도마리노오토캠핑장', addr1: '부산 영도구 해양로 13-16', mapx: '129.0701', mapy: '35.0712', isLocal: true, firstimage: PLACEHOLDER.camping, desc: '바다 옆 오토캠핑장, 영도에서 즐기는 캠핑', tel: '051-412-9114', hours: '' },
    { contentid: 'local-a-6', title: '영도관광사격장', addr1: '부산 영도구 절영로 319', mapx: '129.0312', mapy: '35.0878', isLocal: true, firstimage: PLACEHOLDER.shooting, desc: '영도 해안가에 위치한 관광 사격장', tel: '0507-1331-9130', hours: '매일 10:00~19:00' },
  ],

  full: [],
};

export const FULL_COURSES = [
  {
    id: 'full-1',
    label: '🗺️ 영도 알차게 다니는 코스',
    spots: [
      { contentid: 'full-1-1', title: '흰여울문화마을', addr1: '부산 영도구 영선동4가 1044-6', isLocal: true, firstimage: PLACEHOLDER.흰여울문화마을, desc: '부산의 산토리니, 파란 바다와 골목이 어우러진 감성 마을' },
      { contentid: 'full-1-2', title: '스릴온더머그', addr1: '부산 영도구 해양힐링로 55', isLocal: true, firstimage: PLACEHOLDER.thrill, desc: '탁 트인 오션뷰, 저녁엔 재즈 공연도 있는 감성 카페' },
      { contentid: 'full-1-3', title: '태종대유원지', addr1: '부산 영도구 동삼동 산 29-1', isLocal: true, firstimage: PLACEHOLDER.태종대, desc: '영도 최남단, 부산 8경 중 하나인 절경 명소' },
      { contentid: 'full-1-4', title: '태종대조개마당', addr1: '부산 영도구 감지해변길 81', isLocal: true, firstimage: PLACEHOLDER.jagal, desc: '태종대 앞 해녀들의 신선한 해산물 먹거리 명소' },
    ],
  },
  {
    id: 'full-2',
    label: '📸 바다 인생샷 코스',
    spots: [
      { contentid: 'full-2-1', title: '흰여울문화마을', addr1: '부산 영도구 영선동4가 1044-6', isLocal: true, firstimage: PLACEHOLDER.흰여울문화마을, desc: '부산의 산토리니, 파란 바다와 골목이 어우러진 감성 마을' },
      { contentid: 'full-2-2', title: '흰여울해안터널', addr1: '부산 영도구 영선동4가 1210-38', isLocal: true, firstimage: PLACEHOLDER.흰여울해안터널, desc: '흰여울마을 아래 해안 절벽을 뚫어 만든 터널' },
      { contentid: 'full-2-3', title: '에테르', addr1: '부산 영도구 절영로 234', isLocal: true, firstimage: PLACEHOLDER.ether, desc: '영도 뷰맛집 감성 카페' },
      { contentid: 'full-2-4', title: '해녀촌', addr1: '부산 영도구 중리남로 2-35', isLocal: true, firstimage: PLACEHOLDER.haedae, desc: '제주 해녀들이 직접 잡은 신선한 해산물 맛집' },
    ],
  },
  {
    id: 'full-3',
    label: '🔥 힙하게 노는 코스',
    spots: [
      { contentid: 'full-3-1', title: '아르떼뮤지엄 부산', addr1: '부산 영도구 해양로247번길 29', isLocal: true, firstimage: PLACEHOLDER.arte, desc: '몰입형 미디어아트 전시관, 영도의 새로운 핫플' },
      { contentid: 'full-3-2', title: '피아크', addr1: '부산 영도구 해양로195번길 180', isLocal: true, firstimage: PLACEHOLDER.piark, desc: '3000평 복합문화공간, 영도 최대 오션뷰 카페' },
      { contentid: 'full-3-3', title: '국립해양박물관', addr1: '부산 영도구 해양로301번길 45', isLocal: true, firstimage: PLACEHOLDER.해양박물관, desc: '한국 유일의 국립해양박물관' },
      { contentid: 'full-3-4', title: '영도마리노 오토캠핑장', addr1: '부산 영도구 해양로 13-16', isLocal: true, firstimage: PLACEHOLDER.camping, desc: '바다 옆 오토캠핑장, 영도에서 즐기는 캠핑' },
    ],
  },
  {
    id: 'full-4',
    label: '🎢 색다른 코스',
    spots: [
      { contentid: 'full-4-1', title: '깡깡이예술마을', addr1: '부산 영도구 대평동2가', isLocal: true, firstimage: PLACEHOLDER.깡깡이, desc: '조선소 노동자들의 삶이 담긴 벽화·예술 마을' },
      { contentid: 'full-4-2', title: '절영해안산책로', addr1: '부산 영도구 영선동4가 186-47', isLocal: true, firstimage: PLACEHOLDER.절영해안, desc: '파도 소리와 함께 걷는 아름다운 해안 산책로' },
      { contentid: 'full-4-3', title: '태종대오션 플라잉 테마파크', addr1: '부산 영도구 해양힐링로 55', isLocal: true, firstimage: PLACEHOLDER.flying, desc: '짚라인과 다양한 어트랙션이 있는 해양 테마파크' },
      { contentid: 'full-4-4', title: '감지해변', addr1: '부산 영도구 동삼동 1052-3', isLocal: true, firstimage: PLACEHOLDER.감지해변, desc: '태종대 인근의 조용하고 아름다운 해변' },
    ],
  },
];

LOCAL_SPOTS.full = FULL_COURSES[0].spots;

export const CURATED_KEYWORDS = {
  sensibility: [],
  history: [],
  coast: [],
  food: [],
  cafe: [],
  activity: [],
  full: [],
};

export function filterCuratedSpots(themeId, apiSpots) {
  const keywords = CURATED_KEYWORDS[themeId] || [];
  const localSpots = LOCAL_SPOTS[themeId] || [];

  const filtered = apiSpots.filter((spot) => {
    const title = (spot.title || '').replace(/\s/g, '');
    return keywords.some((keyword) =>
      title.includes(keyword.replace(/\s/g, ''))
    );
  });

  const combined = [...localSpots, ...filtered];

  const seen = new Set();
  return combined.filter((spot) => {
    if (seen.has(spot.contentid)) return false;
    seen.add(spot.contentid);
    return true;
  });
}