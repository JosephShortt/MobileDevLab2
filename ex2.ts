let tasks: Array<string> = [];

function addTask(task: string): number {
    let length: number;

    length = tasks.push(task);
    console.log(task + " has been added to out tasks array");
    return length;
}

function ListAllTasks() {
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
}

function deleteTask(task: string): number {
    let index: number = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(task + " has been deleted from our tasks array")
    } else {
        console.log(task + " was not found")
    }
    return tasks.length;
}


addTask("Eat Lunch");
addTask("Fold Clothes");
ListAllTasks();
deleteTask("Eat Lunch");