const addTaskBtn = document.querySelector(".add-task-btn")
const taskinput = document.querySelector(".container .heading input")
const taskList = document.querySelector(".tasks_list")
// const tasks = document.querySelectorAll(".tasks_list li")
const inputError = document.getElementById("error")

// console.log(tasks)

function validateInput(){
    let taskText = taskinput.value

    if(taskText.length === 0){
        let errorText = document.createTextNode("Please write something in it")
        inputError.appendChild(errorText)
    }  else if (taskText.length > 0){
        renderTasks()
    }
    return

}


function renderTasks() {
    let taskText = taskinput.value

    let taskLi = document.createElement("li")
    let iconDiv = document.createElement("div")

    taskLi.className = "taskListItem"
    taskLi.appendChild(document.createTextNode(taskText))

    iconDiv.className = "icons"
    iconDiv.innerHTML = `
        <i id="deleteTaskIcon" class="fa-regular fa-circle-xmark"></i>
    `
    taskLi.appendChild(iconDiv)

    taskList.appendChild(taskLi)
    
    clearInput(taskinput)

}

function clearInput(input){
    input.value = ""
}

function deleteTask(e){
    if(e.target.id === "deleteTaskIcon"){
        let iconsParentNode = e.target.parentNode
        let iconDivParentNode = iconsParentNode.parentNode
        if(iconDivParentNode.tagName === "LI"){
            iconDivParentNode.remove()
         } else return

        // iconDivParentNode.parentNode.removeChild(iconDivParentNode)
    }
}

function toggleCheck(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    return
    
}

taskList.addEventListener("dblclick", toggleCheck)
taskList.addEventListener("click", deleteTask)
addTaskBtn.addEventListener("click", validateInput)
