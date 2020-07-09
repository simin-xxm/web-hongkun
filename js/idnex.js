
// document.getElementById("showMenu").addEventListener('click',function () {
//     alert("123");
// });

jQuery(document).ready(function($) {
    $('.showMenu').on('click', function(event){
        event.preventDefault();
        toggleNav(true);
    });
    $('.cd-overlay').on('click', function(event){
        event.preventDefault();
        toggleNav(false);
    });
    function toggleNav(bool) {
        $('.phone-content, .cd-overlay').toggleClass('is-visible', bool);
        $('computer').toggleClass( bool);
    }
});