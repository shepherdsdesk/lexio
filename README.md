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

맥 앱(`Lexio-AppleSilicon.dmg`)과 공개 성경 묶음(`Lexio-bible-pack.zip`)은 용량 때문에 저장소가 아니라 **Releases**에 올립니다.

## 배포 순서 (GitHub Pages)

1. 이 폴더의 파일을 저장소 `shepherdsdesk/lexio`의 `main` 브랜치 맨 위에 올립니다.
2. 저장소 **Settings → Pages → Build and deployment**에서 Source를 *Deploy from a branch*, Branch를 `main` / `(root)`로 저장합니다.
3. **Releases → Draft a new release** → 태그 `v1.3.0` → `Lexio-AppleSilicon.dmg`, `Lexio-bible-pack.zip`을 첨부해 게시합니다.
   홈페이지의 내려받기 단추는 `releases/latest/download/파일이름`을 가리키므로, 다음 버전에서도 **파일 이름을 그대로** 두면 링크가 자동으로 최신을 가리킵니다.

다른 계정이나 저장소 이름을 쓰면 모든 파일에서 `shepherdsdesk/lexio`와 `shepherdsdesk.github.io/lexio`를 찾아 바꿔 주세요(`app/index.html`의 `SITE`, `PACK_URL` 포함).

4. Releases에 파일이 올라간 **다음에** `version.json`의 `version`과 `notes`를 고쳐 올립니다. 맥 앱은 이 파일을 보고 “새 버전이 나왔습니다” 알림을 띄웁니다(파일을 먼저 올리면 받을 파일이 없는 알림이 뜹니다).

## 웹 버전 (구글 앱스크립트) 배포

웹 버전은 각 사용자가 자기 구글 계정에 **사본**을 만들어 씁니다. 원고는 사용자 드라이브의 `렉시오` 폴더에 저장됩니다.

1. `설치도우미.html`을 브라우저로 열고, 안내대로 script.google.com 새 프로젝트(이름: 렉시오 웹 (배포용))에 파일 5개를 붙여 넣습니다.
2. `setup` 실행 → 권한 허용 → 배포 → 새 배포 → 웹 앱(나 / 나만)으로 열어 확인합니다.
3. 프로젝트 **공유** → 일반 액세스 *링크가 있는 모든 사용자 · 뷰어* → 링크를 복사해 `config.js`의 `webCopy`에 넣고 올립니다.
4. 웹 버전은 원어 사전·데이터 엔진·기본 공개 성경(`app/bible/`)을 이 홈페이지의 `app/` 폴더에서 불러오므로, `app/` 폴더를 지우지 마세요.

새 버전을 낼 때는 같은 원본 프로젝트에 파일을 다시 붙여 넣으면, 사용자는 새 사본을 만들어 바꿉니다(설치 도움말 #web-update).

## 저작권과 라이선스

- 렉시오 프로그램에는 성경 본문이 들어 있지 않습니다. 저작권이 있는 번역본·주석은 배포하지 않습니다.
- 사용한 오픈소스와 자료는 [THIRD_PARTY.md](THIRD_PARTY.md)를 보세요.

만든 사람 이세진 목사 · bear4jesus@gmail.com
