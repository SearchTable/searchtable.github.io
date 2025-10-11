var version = 'v1::';

// -------------------------------------------------------
// aqui devem ser baixados os recursos offline, que devem vir de uma lista em algum local
// provavelmente alguma API no site
this.addEventListener('install', function(event) {
    console.log('Service Worker instalado!');

    // return self.clients.skipWaiting();
});
