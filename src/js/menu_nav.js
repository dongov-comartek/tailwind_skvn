// eslint-disable-next-line no-undef
$(document).ready(function () {
    // eslint-disable-next-line no-undef
    $(".nav-toggler").each(function (_, navToggler) {
        // eslint-disable-next-line no-undef
        var target = $(navToggler).data("target");
        // eslint-disable-next-line no-undef
        $(navToggler).on("click", function () {
            // eslint-disable-next-line no-undef
            $(target).animate({
                height: "toggle"
            });
        });
    });
});
