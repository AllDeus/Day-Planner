var today = moment();


$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    $(".saveBtn").on("click", function () {
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);

    });
    // Time row // 
    $("#7 .description").val(localStorage.getItem("7"));
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    // add more rows for more time
    function timeChange() {
        var currentHour = moment().hour();

        $('.time-block').each(function () {
            var idTime = parseInt($(this).attr("id"));
            if (idTime < currentHour) {
                $(this).addClass("past");
            } else if (idTime === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }
    timeChange();
    var timeInterval = setInterval(timeChange, 1000);


});