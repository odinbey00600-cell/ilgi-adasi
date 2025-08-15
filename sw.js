// PWA Builder için temel service worker dosyası
// Bu dosya, uygulamanızın çevrimdışı yeteneklerini yönetir.

self.addEventListener('install', (event) => {
  console.log('Service worker yükleniyor...');
  // Kurulum sırasında bekleme adımını atla
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service worker aktive ediliyor...');
});

self.addEventListener('fetch', (event) => {
  // Temel ağ öncelikli strateji
  // Herhangi bir dosya isteği olduğunda, önce internetten getirmeye çalışır.
  event.respondWith(fetch(event.request));
});
