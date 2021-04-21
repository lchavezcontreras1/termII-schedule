$(document).ready(function(){
    $("div#event-container").hide();
    $("input[name=weekday]").on("change", dailySchedule);
});
function dailySchedule(){
    let style = $("input[name=weekday]:checked").val();
    console.log(style);
    switch(style)
    {
        case "Monday":
            $("div#event-item1").show();
            break;
        case "Tuesday":
            $("div#event-item2").show();
            break;
        case "Wednesday":
            $("div#event-item3").show();
            break;
        case "Thursday":
            $("div#event-item4").show();
            break;
        case "Friday":
            $("div#event-item5").show();
            break;
        case "Saturday":
            $("div#event-item6").show();
            break;
        case "Sunday":
            $("div#event-item7").show();
            break;
    }
}