$(document).ready(function () {
  // 手機版顯示 menu
  $('#navbarNav').on('show.bs.collapse', function () {
    $("#openNav").addClass("d-none");
    $("#closeNav").removeClass("d-none");
  });

  // 手機版隱藏 menu
  $('#navbarNav').on('hide.bs.collapse', function () {
    $("#openNav").removeClass("d-none");
    $("#closeNav").addClass("d-none");
  });

});
