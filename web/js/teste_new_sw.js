if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(('/sw.js'))
        .then((reg) => {
            console.log('service worker registrado com sucesso', reg);
        }).catch((err) => {
            console.log('algo de errado aconteceu', err);
        })
    });
}