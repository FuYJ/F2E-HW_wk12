$(document).ready(function() {

    //enter search
    $("#find_button").click(function() {
        $(this).addClass("hide");
        if ($(this).prev().hasClass("hide")) {
            $(this).prev().removeClass("hide");
            $(this).prev().focus();
        }
    });
    $(".find_input").blur(function() {
        $(this).addClass("hide");
        if ($(this).next().hasClass("hide"))
            $(this).next().removeClass("hide");
    });

    //hamburger_menu
    $("#hamburger_menu_button").click(function() {
        if ($(".hamburger_menu").hasClass("hamburger_menu_open")) {
            $(".container").animate({
                left: "0"
            }, "normal");
            $(".hamburger_menu").removeClass("hamburger_menu_open");
        } else {
            $(".container").animate({
                left: "50%"
            }, "normal");
            $(".hamburger_menu").addClass("hamburger_menu_open");
        }
    });
});
