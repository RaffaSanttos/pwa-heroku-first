if('serviceWorker' in navigator){
    console.log("Instalando serviceWorker...");
    navigator.serviceWorker.register("/web/js/sw.js")
        
        .then(e => {console.log("sw.js instalado")})
        
        .catch(err => {console.log(err)});
}