$(document).ready(function() {
    $('.h-content').before('<div class="mobile-trigger"><i></i></div>');
    $('.mobile-trigger').click(function() {
        $('.mobile-trigger i').toggleClass('change');
        $('.nav-bar').toggleClass('change');
        return false;
    });
});
$(".rotate").textrotator({
    animation: "flipUp",
    separator: ",",
    speed: 2000
});
AOS.init({
    duration: 2000,
    once: true,
});