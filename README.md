# 렉시오 (Lexio) — 설교 작업실

> 읽고 · 묵상하고 · 전하다.
> 성경을 읽다가, 그 자리에서 설교를 씁니다.

한국 목회자를 위한 무료 설교 준비 도구입니다. 왼쪽에는 성경 본문·번역 대조·원어·검색·주석, 오른쪽에는 설교 원고. 설교 종류(강해·새벽·심방·장례 등)와 구조(강해식·3대지·귀납·스토리 등)를 고르면 뼈대가 세워집니다.

- 홈페이지: https://shepherdsdesk.github.io/lexio/
- 웹 버전: https://shepherdsdesk.github.io/lexio/app/
- 내려받기: [Releases](https://github.com/shepherdsdesk/lexio/releases/latest)

## 저장소 구성

| 경로 | 내용 |
|---|---|
| `index.html` | 소개 홈페이지 |
| `install.html` | 설치 도움말 |
| `guide.html` | 사용 설명서 |
| `bible.html` | 성경 자료 안내와 파일 형식 |
| `style.css`, `assets/` | 홈페이지 스타일, 아이콘, 화면 캡처 |
| `app/` | 렉시오 웹 버전 (index.html 하나 + sql.js + 원어 사전) |

맥 앱(`Lexio-mac-arm64.zip`)과 공개 성경 묶음(`Lexio-bible-pack.zip`)은 용량 때문에 저장소가 아니라 **Releases**에 올립니다.

## 배포 순서 (GitHub Pages)

1. 이 폴더의 파일을 저장소 `shepherdsdesk/lexio`의 `main` 브랜치 맨 위에 올립니다.
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 *Deploy from a branch*, Branch를 `main` / `(root)`로 저장합니다.
3. **Releases → Draft a new release** → 태그 `v1.0.0` → `Lexio-mac-arm64.zip`, `Lexio-bible-pack.zip`을 첨부해 게시합니다.
   홈페이지의 내려받기 단추는 `releases/latest/download/파일이름`을 가리키므로, 다음 버전에서도 **파일 이름을 그대로** 두면 링크가 자동으로 최신을 가리킵니다.

다른 계정이나 저장소 이름을 쓰면 모든 파일에서 `shepherdsdesk/lexio`와 `shepherdsdesk.github.io/lexio`를 찾아 바꿔 주세요(`app/index.html`의 `SITE`, `PACK_URL` 포함).

## 저작권과 라이선스

- 렉시오 프로그램에는 성경 본문이 들어 있지 않습니다. 저작권이 있는 번역본·주석은 배포하지 않습니다.
- 사용한 오픈소스와 자료는 [THIRD_PARTY.md](THIRD_PARTY.md)를 보세요.

만든 사람 촌놈루니 · contact@mokyangdesk.com
