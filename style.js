$(document).ready(function () {
  $(".big,.large,.hazir").hide();
});

$(document).ready(function () {
  $(".one").click(function () {
    $(".dropdown").hide();
    $(".hazir").hide();
    $(".big").show();
  });
});

$(document).ready(function () {
  $(".two").click(function () {
    $(".dropdown").hide();
    $(".hazir").hide();
    $(".large").show();
  });
});

$(document).ready(function () {
  $(".three").click(function () {
    $(".dropdown").hide();
    $(".hazir").show();
  });
});

navbar - brand;
$(document).ready(function () {
  $(".navbar-brand").click(function () {
    $(".dropdown").show();
    $(".big,.large,.hazir").hide();
  });
});
