self.addEventListener('install', e =>{
    e.waitUntill(
        cahes.open('static-v1')
        .then(cache => {
            cache.add('/marca_4_pontas')
        })
    )
});

self.addEventListener('activate', e => {});

self.addEventListener('fetch', FetchEvent => {
    console.dir(fetchEvent);
});
