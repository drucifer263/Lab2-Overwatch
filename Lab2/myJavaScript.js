$(document).ready(function () {
    $('#nav-btn').click(function () {
        $(this).next().toggle();
    });
});

$(window).resize(function () {
    if ($(window).width() > 600)
        $('.navList').css("display", "block");
    else
        $('.navList').css("display", "none");
});