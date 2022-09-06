$(document).ready(function () {
  // 偵測滾輪
  window.onscroll = function () {
    scrollFunction()
  };

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

// 手機版 header 滾輪往下縮小
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#nzHeader").addClass("nz-small-header");
  } else {
    $("#nzHeader").removeClass("nz-small-header");
  }
}