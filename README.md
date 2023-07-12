<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
  </a>

  <h1 align="center">⏰ 몰브리타임 Project</h1>

  <p align="center">
    KAIST 2023 여름 몰입캠프 2주차 과제 (2분반 김창완, 김하진)  
  <br />
  <br />
  <br />
  </p>
</div>

## :pushpin: 몰입캠프 2주차 과제 (공통)

**2. 공통과제 II (7/5 ~ 7/12)** - **서버 및 DB 기술 적응 및 응용**

- 목적:
    - 서로 함께 공통의 과제를 함으로써, 서버 및 DB를 활용하는 것에 익숙해지기
- 결과물:
    - **서버, DB, SDK를 활용한 앱**으로, 데이터를 서버와 주고받는 것은 포함.
    - DB 활용: NoSQL이든 SQL이든 상관없음. (추천: [MongoDB](https://www.mongodb.com/), [MySQL](http://mysql.com/) 등)
    - 서버 활용: HTTP(웹 서버)든 TCP든 상관없음. (추천: [NodeJS](https://nodejs.org/ko/) 등)
    - SDK 적용: Login 등의 기능을 SDK를 활용해서 구현. (추천: Facebook, Google, Naver, Kakao 등)
    - 공통과제 I 을 활용해도 좋고 처음부터 새로 만들어도 좋음.
    - 배우는 것이 적은 Firebase 활용은 가급적 지양하기를 권고.
- 서버 기술 세미나
    - 서버, DB 등에 관한 내용을 (검색/학습 출발점 관점에서) 간략히 소개할 예정

## 📌 업로드 파일 설명
📁storybooks → Node.js로 server를 열고 MongoDB와 연결하기 위한 코드  
📁madtime → Kotlin으로 Android에서 해당 server의 webpage를 모바일에 띄우기 위한 코드

## :pushpin: 개발 환경

Frontend: Handlerbars, CSS, Kotlin   
Backend: Node.js (express)  
DataBase: MongoDB (mongoose)  
IDE: VScode, Android Studio
minSdk: 24  
targetSdk: 33  
Hardware: Galaxy S10e (Android 11)

## :pushpin: 역할 분담

- 공통: 서버 구축, 데이터베이스 구축, 게시판 기능
- 김창완: 댓글 기능  
- 김하진: 좋아요 기능


## :pushpin: 앱 설명

대학생 커뮤니티 앱 "에브리타임"을 모티브로, 익명게시판 앱을 만들었다.  

<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/37593bc2-8e64-480a-9322-c5abc0e31955" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/57d33a5e-688b-4bd3-9b4c-ef91ab1347c1" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/09819b3f-5ae6-4aaa-b947-a5f11036a8fb" width="30%" height="30%">  

1. 앱 "mad time"을 실행하면 앱 내에서 Chrome Custom Tab이 열리며 몰브리타임 서비스 페이지로 이동한다. 첫 화면에는 간단하게 서비스를 소개하는 텍스트와 구글 로그인 버튼이 있다.  
2. 구글 로그인 버튼을 누르면 Google OAuth2.0을 이용한 구글 로그인 서비스가 진행되고, 원하는 구글 계정을 클릭하거나 새로 로그인해서 몰브리타임 서비스를 이용할 수 있다.
3. 로그인에 정상적으로 성공하면 구글 계정에 등록된 이름(First Name)으로 인사를 건네는 화면으로 서비스가 시작된다. 

<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/ba79ab75-3cad-4ba8-a260-1a37d216226e" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/d1b16520-518f-4765-89a6-f40b1bca4c8a" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/ea01f637-88d3-4cd2-a7f7-c77c443f6bee" width="30%" height="30%">
  
4. 왼쪽 상단의 메뉴바를 누르면 탭이 열리며, 총 3개의 메뉴가 있다. 뒤로가기 버튼이나 탭 화면 밖을 누르면 탭이 닫히며, 오른쪽 아래 큰 빨강 더하기 버튼을 누르면 새로운 게시글을 작성할 수 있다.
5. 제목과 내용을 작성할 수 있는 화면으로 전환되고, 본문 내용은 진한 글씨·기울임·취소선·링크 등의 기능을 이용할 수 있다. "게시" 버튼을 누르면 대나무숲 게시판에 글이 올라가며, "취소" 버튼을 누를 경우 쓰고 있던 게시글 내용이 저장되지 않고 취소된다.
6. 정상적으로 게시글이 등록됐을 경우, "내 게시물 목록" 탭에서 자신이 쓴 게시물의 목록을 최신 순으로 확인할 수 있다.

<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/8bd99e87-29a4-42c5-97c4-e2a6c30a1154" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/15d233ef-a94c-4c65-ad2d-1a1a24ccb183" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/317db785-22c5-43ac-8d0d-d929221362f2" width="30%" height="30%">

7. 왼쪽 상단의 메뉴바에서 "몰입캠프 대나무숲" 탭을 누르면, 다른 사람이 쓴 글도 확인할 수 있는 탭으로 이동하게 된다. 여기서 자신이 쓴 글의 오른쪽 상단에는 게시글을 수정할 수 있는 버튼이 뜨게 되며, 최신 글이 위쪽으로 정렬된다. 각 글마다 좋아요수와 댓글수를 확인할 수 있으며, 원하는 글의 "자세히 보기" 버튼을 누르면 해당 글의 탭으로 이동하게 된다.  
8. 원하는 게시글의 제목과 본문뿐만 아니라 작성된 시간까지 확인 가능하다.
9. 댓글은 모두 익명으로 달린다. 다만, 글쓴이와 익명의 사용자 1, 익명의 사용자 2, ... 등의 최소한의 구분 시스템을 구현했다. (에브리타임의 댓글 기능 중 익명 표시 시스템과 동일한 매커니즘이다. 같은 사용자가 댓글을 여러 번 달면 같은 번호로 찍힌다.) 그리고 자신이 쓴 댓글에만 뜨는 작은 삭제 아이콘을 누르게 되면 댓글이 삭제된다.

<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/6aa1c4a6-5712-4f02-9af9-657ec962e8ff" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/c2a6e005-48ab-4307-9f16-41c29b4a9b1a" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/498c060d-1a70-4d67-9df0-f5be7658bb27" width="30%" height="30%">  

10. 좋아요 기능은 한 사람 당 같은 글에는 한 번만 누를 수 있게 구현했다. 좋아요를 누르게 될 경우, 좋아요 버튼이 좋아요 취소 버튼으로 바뀌며 여기서 한 번 더 누르면 좋아요가 취소된다.
11. 만약 다른 사람이 내 글에 좋아요나 댓글을 달게 되면,
12. "내 게시물 목록" 메뉴에서 좋아요수와 댓글수를 확인할 수 있다.


<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/9f01c2a4-d715-4555-b276-cbf23a2794dd" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/782af8b2-cdee-4858-a62b-2099ec268681" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/0e134f74-5b11-432e-a028-fc1a75ec95d0" width="30%" height="30%">

13. "몰입캠프 대나무숲"에서 수정 아이콘 버튼을 누르거나, 내 게시물 목록에서 수정 아이콘 버튼을 누르게 되면 게시글 수정 페이지로 이동하게 된다. 제목이나 내용을 수정한 "저장" 버튼을 누르면 해당 게시글의 좋아요와 댓글은 유지된 채 수정 사항만 변경되고, "취소" 버튼을 누를 경우 수정 사항이 저장되지 않고 취소된다.
14. "저장" 버튼을 눌렀을 경우 위 사진과 같이 본문 내용이 잘 수정된다.
15. "내 게시물 목록"에서 삭제 아이콘 버튼을 누르게 되면 해당 게시글은 모든 메뉴에서 삭제되게 된다.
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/41311ba5-a009-4984-8d4e-6df94661aa05" width="30%" height="30%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/d7c14147-0a2d-42d8-8ced-e9add3ee89ca" width="30%" height="30%">  

16. 삭제된 게시글은 "몰입캠프 대나무숲"에서도 삭제된다.
17. 왼쪽 상단의 메뉴바에서 "로그아웃"을 누를 경우, 맨 처음 화면으로 돌아가게 되며 같은 계정으로 로그인하게 될 경우 해당 계정으로 했던 모든 활동들을 이어서 할 수 있다.



### 부가 설명

- Webview는 Google이 보안 상의 이유를 OAuth 사용을 제한해두어, Chrome Custom Tabs를 활용했다.
- Google Cloud redirect URL로 원격 서버 주소(http://172.xx.x.xxx) 를 직접 등록할 수 없어 무료 도메인 주소(http://rlagkwls.duckdns.org) 를 발급 받아 등록했다.
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/ad0d0ca1-5c60-4751-bb80-dfa0e694af29" width="100%" height="100%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/f87c99ed-0a43-4d92-b643-3428ce0c7271" width="100%" height="100%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/d28adb1e-c53b-47d9-9c7b-292a899fab26" width="100%" height="100%">
<img src = "https://github.com/changwann/madcamp_week2/assets/122224659/dab8c53c-1506-492d-8e88-c0ebca16b9a8" width="100%" height="100%">
- MongoDB Collection에 저장되는 data 형식을 참고하기 위한 사진이다.
- 게시글(Story)의 댓글(Comment) 리스트는 직접 객체로 다 저장하는 것이 아니라 ObjectId만 저장하고 *.populate() 함수를 이용하여 구현했다.
  
### 참고 자료

https://www.youtube.com/watch?v=SBvmnHTQIPY  
https://github.com/bradtraversy/storybooks

## :pushpin: 느낀 점

김창완: 팀메이트와 나 모두 개발 경험도 거의 없고, 서버와 데이터베이스를 처음 다뤄보는 거라 처음에는 정말 막막하고 절망스러웠다. 로컬 서버랑 원격 서버가 뭔지도 몰라서, 이론적인 내용을 주변 사람들한테 물어보고 인터넷 서칭으로 공부하며 조금씩 감을 잡아갔다. 그럼에도 앱을 처음부터 모두 디자인하기에는 시간이 촉박하다고 생각해서 유튜브에 공개된 게시판 예제를 중심으로 기존에 있던 앱인 "에브리타임"을 모티브 삼아 기능을 추가·수정했다. PC 환경에서 레이아웃을 디자인하다보니 모바일에서 디자인이 엉성한 것이 좀 아쉽지만, 아무것도 모른 상태에서 일주일 만에 이런 서비스를 구현했다는 것이 뿌듯하다. 이번에는 과제 마감 기한이 있다 보니 이해보단 구현을 우선시했는데, 시간이 여유로울 땐 DB 구조나 Router 작동 원리 등을 자세히 공부해보고 싶다. 또, 처음에는 React를 쓰려다가 환경 설정이 잘 되지 않아 포기했는데, 다음에 기회가 된다면 React Native나 Flutter 같은 크로스 플랫폼도 배우고 싶다.

김하진: *

## :pushpin: 팀원 연락처

김창완 GIST - changwan@gm.gist.ac.kr  
김하진 KAIST - *@kaist.ac.kr
