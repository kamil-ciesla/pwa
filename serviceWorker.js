
const staticDevCoffee = "dev-coffee-site-v1"
const GHPATH = '/pwa';
const assets = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/map.html`,
  `${GHPATH}/vibration.html`,
  `${GHPATH}/js/app.js`,
]


self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })