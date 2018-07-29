<!-- 寬度改變時關閉選單 -->
$(window).resize(function(){
    $(".nav_content").removeClass("active").css("display","none");
    if($(".more-btn").hasClass("open")){
        $(".more-btn").removeClass("open");
        $(".list-menu").css("display","none");
    }
});


// list-menu show/hide
$(".more-btn").click(function () {
    $(this).toggleClass("open");
    $(".list-menu").fadeToggle("slow").css("display", "flex");
});
$(".list-menu a").click(function () {
    $(".list-menu").fadeOut("slow");
    $(".more-btn").removeClass("open");
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
    $(".nav_content").css("display","block")
    setTimeout(function(){
        $(".nav_content").toggleClass("active");
    },200);
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