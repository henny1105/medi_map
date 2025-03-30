export const ERROR_MESSAGES = {
  LOGIN_FAILED: "이메일이나 비밀번호를 다시 확인해주세요.",
  UNKNOWN_ERROR: "알 수 없는 오류가 발생했습니다.",
  INVALID_CREDENTIAL: "유효하지 않은 자격 증명입니다.",
  LOGIN_ERROR: "로그인 중 문제가 발생했습니다.",
  GOOGLE_LOGIN_ERROR: "구글 로그인 중 문제가 발생했습니다.",
  SIGN_UP_ERROR: "회원가입 중 오류가 발생했습니다.",
  EMAIL_ALREADY_EXISTS: "이미 사용 중인 이메일입니다.",
  PHARMACY_DATA_ERROR: "약국 데이터를 불러오는 중 오류가 발생했습니다.",
  PHARMACY_NOT_FOUND: "해당 위치에서 약국 데이터를 찾을 수 없습니다.",
  LOCATION_ERROR: "위치를 가져오는 데 실패했습니다.",
  REQUEST_ERROR: "잘못된 요청입니다. 위도와 경도가 필요합니다.",
  VALIDATION_ERROR: "위도와 경도가 필요합니다.",
  KAKAO_MAP_ERROR: "카카오 지도를 불러오는 중 오류가 발생했습니다.",
  NETWORK_ERROR: "네트워크 연결에 문제가 있습니다. 잠시 후 다시 시도해 주세요.",
  GENERIC_ERROR: "오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
  EDITOR_NOT_INITIALIZED: "Quill 에디터 인스턴스가 아직 초기화되지 않았습니다.",
  POST_NOT_FOUND: "요청하신 게시글을 찾을 수 없습니다.",
  SERVER_ERROR: "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
  INVALID_RESPONSE_FORMAT: "API 응답 형식이 올바르지 않습니다. 배열이 아닙니다.",
  NO_SEARCH_RESULTS: "검색 결과가 없습니다.",
  API_REQUEST_ERROR: "API 요청 중 오류가 발생했습니다.",
  CLIENT_ERROR: '잘못된 요청입니다. 다시 시도해주세요.'
} as const;

export const FAVORITE_MESSAGES = {
  ADD_FAILURE: '즐겨찾기 추가에 실패했습니다.',
  LOGIN_REQUIRED: '로그인이 필요한 서비스입니다.',
  ALREADY_EXISTS: '이미 즐겨찾기에 추가되었습니다.',
  STATUS_FETCH_ERROR: '즐겨찾기 상태를 불러오지 못했습니다.',
  ID_NOT_FOUND: 'medicineId가 존재하지 않습니다.',
} as const;

export const AUTH_ERROR_MESSAGES = {
  PASSWORD_REQUIRED: "현재 비밀번호를 입력해주세요.",
  NEW_PASSWORD_REQUIRED: "새 비밀번호를 입력해주세요.",
  CONFIRM_PASSWORD_REQUIRED: "새 비밀번호 확인이 필요합니다.",
  PASSWORD_MIN_LENGTH: "비밀번호는 최소 8자 이상이어야 합니다.",
  PASSWORD_MISMATCH: "새 비밀번호가 일치하지 않습니다.",
  NICKNAME_LENGTH: "닉네임은 3자 이상 30자 이하로 입력해주세요.",
  NAME_LENGTH: "이름은 3자 이상이어야 합니다.",
  INVALID_EMAIL: "이메일 형식이 올바르지 않습니다.",
} as const;