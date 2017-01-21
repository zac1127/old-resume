$(document).ready(function() {
    var i = 0;
    $("#next").on('click', function() {
        if (i == 0) {
            $(".name h1").addClass("is_showing");
            setTimeout(function() {
                $(".name p").addClass("is_showing");
            }, 50);
            $(".my_picture").addClass("is_showing");
            $(".cover h1").addClass("is_showing");
            $(".paragraph").addClass("is_showing");
        } else if (i == 1) {
            remove_classes();
            $(".sfa_picture").addClass("is_showing");
            $(".skills").addClass("is_showing");
        } else if (i == 2) {

            remove_classes();
            $(".contact_wrapper").css({
                'display': 'none'
            });
            $(".projects").addClass("is_showing");
            $(".project-title").addClass("is_showing");
            setTimeout(function() {
                $(".lfcn").addClass("is_showing");
                $(".aps").addClass("is_showing");
                $(".affinity").addClass("is_showing");
                $(".old-resume").addClass("is_showing");
                $(".grade-tracker").addClass("is_showing");
            }, 1250);

        } else if (i == 3) {
            remove_classes();
            $(".contact_wrapper").css({
                'display': 'block'
            });
            setTimeout(function() {
                $(".contact h1").addClass("is_showing");
            }, 500);
            setTimeout(function() {
                $(".social").addClass("is_showing");
            }, 400);
            setTimeout(function() {
                $(".contact_info").addClass("is_showing");
            }, 50);

        }

        if (i < 4) {
            i++;
        } else {
            i = 0;
            go_to_start();
        }
    });


    function go_to_start() {
        $(".my_picture").removeClass("is_showing");
        $(".cover h1").removeClass("is_showing");
        $(".paragraph").removeClass("is_showing");
        $(".sfa_picture").removeClass("is_showing");
        $(".skills").removeClass("is_showing");

        setTimeout(function() {
            $(".contact h1").removeClass("is_showing");
        }, 0);
        setTimeout(function() {
            $(".social").removeClass("is_showing");
        }, 200);
        setTimeout(function() {
            $(".contact_info").removeClass("is_showing");
        }, 500);
        $(".name h1").removeClass("is_showing");
        $(".name p").removeClass("is_showing");

    }

    function remove_classes() {

        $(".my_picture").removeClass("is_showing");
        $(".cover h1").removeClass("is_showing");
        $(".paragraph").removeClass("is_showing");
        $(".sfa_picture").removeClass("is_showing");
        $(".skills").removeClass("is_showing");
        $(".contact h1").removeClass("is_showing");
        $(".social").removeClass("is_showing");
        $(".projects").removeClass("is_showing");
        $(".project-title").removeClass("is_showing");

        $(".lfcn").removeClass("is_showing");
        $(".aps").removeClass("is_showing");
        $(".affinity").removeClass("is_showing");
        $(".old-resume").removeClass("is_showing");
        $(".grade-tracker").removeClass("is_showing");



        $(".contact_info").removeClass("is_showing");
    }

});
