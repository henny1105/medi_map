FROM node:20-alpine3.18

WORKDIR /app

# 1) 전체 프로젝트 복사
COPY . .

# 2) 패키지 매니저 캐시 활용 + 의존성 설치
RUN yarn install --frozen-lockfile --cache-folder ./yarncache

# 3) 전체 프로젝트 빌드
RUN yarn build

# 4) 불필요한 캐시 제거
RUN rm -rf ./yarncache

# 5) Cloud Run 포트 노출
EXPOSE 8080

# 6) express-server 실행
CMD ["yarn", "workspace", "express-server", "start"]