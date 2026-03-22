// Service Worker — Agenda notifiche
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body,
      icon: '/Agenda/icon.png',
      badge: '/Agenda/icon.png',
      vibrate: [300, 100, 300, 100, 300],
      requireInteraction: true,
      tag: 'agenda-alarm'
    });
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/Agenda/agenda.html'));
});
