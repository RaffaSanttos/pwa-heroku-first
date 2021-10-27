self.addEventListener('install', e =>{
    e.waitUntill(
        caches.open('static-v1')
        .then(cache => {
            cache.add('/marca_4_pontas')
        })
    )
});

self.addEventListener('activate', e => {});

self.addEventListener('fetch', fetchEvent => {
    console.dir(fetchEvent);
});
