$(document).ready(() => {
$(".popup-btn").on("click", () => {
    $(".popup-body").css({"visibility":"visible","opacity":"1"});
    $(".popup").css({"overflow":"hidden"})
});
$(".popup-cancel").on("click", () => {
    $(".popup-body").css({"visibility":"hidden","opacity":"0"});
    $(".popup").css({"overflow":"auto"})
});
})