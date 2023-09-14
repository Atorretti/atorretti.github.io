require(['router'], function (router) {
    $(document).ready(function () {
        console.log('DOM is mounted and ready');
        window.alert("Welcome and thank you for visiting my Pokedex. It may take a while to load all the content.");
       
        router.start();

 
    });
});
