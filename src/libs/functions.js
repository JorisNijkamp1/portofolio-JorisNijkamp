import $ from "jquery";
import logo2 from "../img/male.png";
import logo1 from "../img/male1.png";

export function anchorLinksAnimation() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
        if (!$("#mainNav").hasClass("navbar-reduce")) {
            $("#mainNav").addClass("navbar-reduce");
        }
    });

    $("body").scrollspy({
        target: "#mainNav",
        offset: navHeight
    });

    $(".js-scroll").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });



    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
        if (
            window.location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
            window.location.hostname === this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - navHeight + 5
                    },
                    1000,
                    "easeInExpo"
                );
                return false;
            }
        }
    });

    $(".js-scroll").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
}
