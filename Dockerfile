FROM node:20-alpine3.18

WORKDIR /app

# 의존성 및 빌드에 필요한 파일들만 우선 복사
COPY turbo.json .
COPY tsconfig.json .
COPY package.json .
COPY yarn.lock .
COPY apps/express-server ./apps/express-server

# 패키지 매니저 캐시 활용
RUN yarn install --frozen-lockfile --cache-folder ./yarncache

# 전체 프로젝트 빌드
RUN yarn build

# 불필요한 캐시 제거
RUN rm -rf ./yarncache

# Cloud Run 포트 노출
EXPOSE 8080

# 서버 실행
CMD ["yarn", "workspace", "express-server", "start"]