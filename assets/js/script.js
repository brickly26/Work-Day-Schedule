// DEPENDENCIES

var ContainerEl = $(".container");

// DATA

var workingHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// FUNCTIONS

function renderDate() {
    var momentOb = moment();
    var today = momentOb.format("dddd, MMMM Do");
    $("#currentDay").text(today);
}

function RenderRow(i) {
    var time = parseInt(workingHours[i]);


    //Create row div and add the class of row
    var scheduleRow = $("<div>");
    scheduleRow.addClass("row");

    // Create div for time slot
    var timeContainer = $("<div>");
    timeContainer.addClass("col-1 hour d-flex justify-content-end");
    var scheduleTime = $("<span>");
    scheduleTime.addClass("hour timeholder")

    // Create html tags for and gave appropriate tags based on time of day
    var scheduleTextAreaContainer = $("<div>");
    var scheduleTextArea = $('<textarea>');
    scheduleTextAreaContainer.addClass("col-10 past px-0");
    scheduleTextArea.addClass("task-area description todo-block text-dark");
    var timeHour = parseInt(moment().format("HH"));
    if (time < timeHour) {
        scheduleTextArea.addClass("past");
    } else if (time > timeHour) {
        scheduleTextArea.addClass("future");
    } else {
        scheduleTextArea.addClass("present");
    }

    // Create html tags for sav button
    var saveBtnContainer = $("<div>");
    saveBtnContainer.addClass("col-1 saveBtn d-flex");
    var saveBtn = $("<i>");
    saveBtn.addClass("fas fa-save m-auto fa-lg save-button");


    // Build 

    if (time === 9) {
        scheduleTime.text(time + ' AM');
    }else if (time < 12) {
        scheduleTime.text(time + ' AM');
    } else if (time > 12) {
        scheduleTime.text((time - 12) + ' PM');
    } else {
        scheduleTime.text(time + ' PM');
    }

    var ToDo = getToDo(time);
    scheduleTextArea.text(ToDo);

    // Place
    ContainerEl.append(scheduleRow);
    scheduleRow.append(timeContainer);
    timeContainer.append(scheduleTime);
    scheduleRow.append(scheduleTextAreaContainer);
    scheduleTextAreaContainer.append(scheduleTextArea);
    scheduleRow.append(saveBtnContainer);
    saveBtnContainer.append(saveBtn);
}

function SaveToDo() {
    var hourStr = $(this).parent().find(".timeholder")[0].innerText; 
    var ToDo = $(this).parent().find(".task-area")[0].value;
    var hour = parseInt(hourStr.split(" "));
    localStorage.setItem(hour, ToDo);
}

function getToDo(hour) {
    var data = localStorage.getItem(hour);
    console.log(data);
    if (data) {
        return data;
    } else {
        return "";
    }
}

function looper() {
    for (var i = 0; i < workingHours.length; i++) {
        RenderRow(i);
    }
    $(".saveBtn").on("click", SaveToDo)
}

// USER INTERACTIONS



// INITIALIZATION

renderDate();
looper();

