// using moment to determine the date make sure moment is added to html as well
var today = moment().format('dddd, MMM Do')

// finding the element on the html 
var todayInHtml = document.getElementById("currentDay")
var timeblock = document.getElementsByClassName("container")
var textareasection = document.getElementsByClassName("textarea")

// setting the current day to today via ID
todayInHtml.textContent = today

// create element for list

var now = moment().format('H')

// Create Object for tasks

var tasks = [];

$(".saveBtn").on("click",function(){

console.log(this)


var descriptionInput = document.querySelector("input[name='task-name']").value;
var descriptionID = document.querySelector("input[name='task-name']").id

tasks.push({

    todo: descriptionInput,
    id: descriptionID
})

saveTasks()

}

)


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  var loadTasks = function() {
    var savedTasks = localStorage.getItem("tasks");

    for(i=0; i<savedTasks.length; i++) {

             var id = savedTasks[i].id;
             var todo = savedTasks[i].todo;
            $(id).val(todo);

        }




}

loadTasks()

// var taskArr = [];

// var today= moment().format('dddd, MMMM Do');
// $("#currentDay").text(today);

// function auditTask(taskEl) {
//     var hour = $(taskEl).attr("id");
//     hour = parseInt(hour);
//     var time = moment().set({'hour': hour, minute: 00});
//     var pastTime = moment().set({'hour': hour+1, minute: 00});
//     if (moment().isAfter(pastTime)) {
//         taskEl.removeClass("bg-success bg-danger");
//         taskEl.addClass("alert-dark");
//     } else if (moment().isAfter(time)) {
//         taskEl.removeClass("bg-success alert-dark");
//         taskEl.addClass("bg-danger");
//     } else {
//         taskEl.removeClass("bg-danger alert-dark");
//         taskEl.addClass("bg-success");
//     }
// }

// function checkTasks() {
//     for (i=9; i<=17; i++) {
//         var currentTaskString = '#'+i;
//         var currentTask = $(currentTaskString)
//         auditTask(currentTask);
//     }
// }

// $(".hour").on("click","button", function() {
//     console.log(this);
//     var task = $(this).parent().find("textarea").val();
//     var time = $(this).parent().find(".col-10").attr("id");
//     taskArr.push({
//         task: task,
//         time: time
//     });
//     saveTasks();
// });

// function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(taskArr));
// }

// function loadTasks() {
//     taskArr = JSON.parse(localStorage.getItem("tasks"));
//     if(!taskArr){
//         taskArr=[];
//     }
//         for(i=0; i<taskArr.length; i++) {
//             var time = "#" + taskArr[i].time;
//             var task = taskArr[i].task;
//             console.log(time,task);
//             $(time).val(task);
//         }
// }

// setInterval(function(){
//     checkTasks();
// }, 60000);

// loadTasks();
// checkTasks(); //