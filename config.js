// 렉시오 홈페이지 설정 — 구글 웹 버전 '사본 링크'를 여기에 넣으세요.
// 앱스크립트 원본 프로젝트 → 공유 → '링크가 있는 모든 사용자 · 뷰어' → 링크 복사
window.LX_CONFIG = {
  webCopy: ''
};
(function () {
  function apply() {
    var url = window.LX_CONFIG.webCopy;
    document.querySelectorAll('[data-link="webcopy"]').forEach(function (a) {
      if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener'; }
      else a.addEventListener('click', function (e) { e.preventDefault(); alert('웹 버전 사본 링크를 준비하고 있습니다. 조금만 기다려 주세요.'); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply); else apply();
})();
