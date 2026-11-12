# HUNTED

브라우저에서 실행되는 1~3인 협동 3D 공포 게임입니다. 서버가 이동 충돌, 서랍/열쇠, 사망, 탈출, 정전, 인형 응시를 판정합니다.

## 실행

```bash
npm install
npm run dev
```

`http://localhost:5173`을 열고, 두 번째 브라우저/PC에서는 같은 주소로 접속합니다. 개발 중 다른 기기에서 테스트할 때는 `client/.env`에 `VITE_SERVER_URL=ws://PC의-LAN-IP:2567`을 넣습니다.

## 배포 (Railway 무료 플랜/크레딧)

1. 이 폴더를 GitHub 저장소에 push합니다.
2. Railway에서 **New Project → Deploy from GitHub repo**를 선택합니다.
3. 서비스 변수에 `CLIENT_ORIGIN=https://생성될-프론트엔드-도메인`을 설정합니다.
4. Railway가 발급한 공개 도메인의 `/`가 게임 페이지입니다. 이 프로젝트는 서버가 `client/dist`를 함께 제공하므로 한 서비스만 배포합니다.

Railway가 자동 감지하지 못하면 `Dockerfile`을 사용하도록 지정하세요. WebRTC는 HTTPS에서만 마이크를 사용할 수 있으며, 네트워크/NAT에 따라 직접 P2P 연결이 안 되면 음성만 비활성화되고 게임은 계속 됩니다.

## 조작

WASD 이동 · 마우스 시점 · Shift 달리기(6초) · E 상호작용/숨기 · F 손전등 · Esc 포인터 해제/설정. 공개 방을 만들거나 방 코드로 비공개 방에 입장할 수 있습니다.
