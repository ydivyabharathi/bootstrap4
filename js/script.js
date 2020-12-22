$(document).ready(() => {
  $("#mycarousel").carousel({ interval: 500 });

  $("#carousal-btn").click(() => {
    if ($("#carousal-btn").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carousal-btn").children("span").removeClass("fa-pause");
      $("#carousal-btn").children("span").addClass("fa-play");
    } else {
      $("#mycarousel").carousel("cycle");
      $("#carousal-btn").children("span").addClass("fa-pause");
      $("#carousal-btn").children("span").removeClass("fa-play");
    }
  });

  $("#login-button").click(() => {
    $("#loginModal").modal("toggle");
  });
  $("#reserve-button").click(() => {
    $("#reserveTable").modal("toggle");
  });
});
