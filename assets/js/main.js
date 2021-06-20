AOS.init();

$(document).ready(function ($) {

    let tabs = $(".tabs li a");

    tabs.click(function () {
        let content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");
        $(".footer-second").find('div').hide();
        $(content).fadeIn(200);
    })
});