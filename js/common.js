// 寬度改變時關閉選單
$(window).resize(function(){
    $(".nav_content").removeClass("active");
    $(".more-btn").removeClass("open");
    $(".list-menu").removeClass("show");
});


// list-menu show/hide
$(".more-btn").click(function () {
    $(this).toggleClass("open");
    $(".list-menu").toggleClass("show");
});
$(".now-num").click(function(){
    $(".set_num").addClass("active");
    $(this).parent().find(".swiper-slide").hide();
});
$(".tablet-num .now-num").click(function(){
    $(".tablet-num").addClass("active");
});


// navbar
$(".navbar-icon").click(function () {
    $(".nav_content").toggleClass("active");
});
$(".navbar-off").click(function () {
    $(".nav_content").toggleClass("active");
});
$(".content").click(function () {
    $(".nav_content").removeClass("active");
    $(".set_num").removeClass("active");
    $(".tablet-num").removeClass("active");
    $(".tablet-num .swiper-slide.slet").css("height","100%");
});

$(".content_right").click(function () {
    $(".nav_content").removeClass("active");

});