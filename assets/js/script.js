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

var task = [];

$(".time-block").on("click", "button", function(){

console.log(this)


var descriptionInput = $(this).parent().find("input").val();
var descriptionID = $(this).parent().find(".col-10").attr("id");

console.log(descriptionInput)
 console.log(descriptionID)

task.push({

    todo: descriptionInput,
    id: descriptionID
})

saveTasks()

}

)


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(task));
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