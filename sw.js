self.addEventListener('install', function (e) {
    alert()
    e.waitUntill(
        caches.open('static-v1')
        .then(cache => {
            cache.add('/marca_4_pontas')
        })
    )
});

self.addEventListener('fetch', fetchEvent => {
    console.dir(fetchEvent);
});
