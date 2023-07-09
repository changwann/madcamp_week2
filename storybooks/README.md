# StoryBooks

> Create public and private stories from your life

This app uses Node.js/Express/MongoDB with Google OAuth for authentication

## Usage

Add your mongoDB URI and Google OAuth credentials to the config.env file

```
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```

# 2023.07.08 (토)

사용법: ./config/config.env 파일에서 MONGO_URI, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET을 수정 후 !npm run dev
현재 개발 진도:

- Nodejs server와 MongoDB 모두 local 환경에서만 돌아가는 상태. -> 원격 서버로 곧 옮겨야함
- 익명 게시판 기능의 기본 틀만 만듦. -> 댓글과 추천/비추천 기능도 만들어야 함.
- 현재는 Google로만 로그인이 가능. -> Kakao나 Naver로도 가능하게 해야 함. (MongoDB에 들어가는 user data 형식 바꿔야 될 듯)
