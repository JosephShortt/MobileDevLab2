export interface tasksInterface {
    Tasks: Array<string>;
    addTask(tasks: string): number;
    ListAllTasks();
    deleteTask(task: string): number;
}

class Tasks implements tasksInterface {   
    constructor() { }
    Tasks: Array<string> = [];

    addTask(task: string): number {
        let length: number;

        length = this.Tasks.push(task);
        console.log(task + " has been added to out tasks array");
        return length;
    }

    ListAllTasks() {
        for (let i = 0; i < this.Tasks.length; i++) {
            console.log(this.Tasks[i]);
        }
    }

    deleteTask(task: string): number {
        let index: number = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted from our tasks array")
        } else {
            console.log(task + " was not found")
        }
        return this.Tasks.length;
    }

}

let myTodos = new Tasks();
myTodos.addTask("Eat");
myTodos.ListAllTasks();
myTodos.deleteTask("Eat");