const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listTask = document.querySelector('.task-list')

let myList = []

function addNewTask() {
    myList.push({
        task: input.value,
        check: false
    })

    input.value = ''

    toShowTask()
}

function toShowTask() {

    let newList = ''

    myList.forEach((task, index) => {
        newList = newList + `
         <li class="task ${task.check ? "done" : ""}">
                <img  src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png" alt="check" onclick="checkTask(${index})">
                <p>${task.task}</p>
                <img src="https://static.vecteezy.com/system/resources/previews/001/200/274/original/check-png.png" alt="not check" onclick="removeTask(${index})">
            </li>
        `
    })

    listTask.innerHTML = newList

}







function checkTask(index){
    myList[index].check = !myList[index].check

    toShowTask()

}

function removeTask(index){
    myList.splice(index, 1)

    toShowTask()
}


button.addEventListener('click', addNewTask)