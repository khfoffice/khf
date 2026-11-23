// 앱 설치용 서비스워커: 아무것도 저장하지 않고 그대로 통과 (항상 최신 버전이 열리게)
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
