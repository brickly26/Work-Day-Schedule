// DEPENDENCIES
formEl = $("#form")

// DATA

var momentOb = moment();

var today = momentOb.format("dddd, MMMM Do");

$("#currentDay").text(today);

// FUNCTIONS




// USER INTERACTIONS

formEl.on("submit", function(event) {
    event.preventDefault();
    console.log(event)
    
})
