(function($){
        $.fn.bluey = function () {
            this.css("background-color", "black");
            this.css("color", "white");
            this.css("font-size", 24);
            return this;
        };
        }(jQuery));
    $(function () {
            $("button").click(function () {
                $("#changeDiv").bluey().fadeOut("slow").fadeIn("slow");
            });

        });
