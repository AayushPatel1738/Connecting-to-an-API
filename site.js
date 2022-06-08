(function () {
    "use strict";

    $(document).ready(function () {

        $('#getDogButton').click(function () {


            $.get(" https://dog.ceo/api/breeds/image/random", function (data) {
                //  $(".result").html(data);
                console.log(data);

                const dogurl = data.message;
                console.log(dogurl);

                $('#dogDisplayImage').attr('src', dogurl);

            });
        })
    })
})();

