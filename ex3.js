"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tasks = /** @class */ (function () {
    function Tasks() {
        this.Tasks = [];
    }
    Tasks.prototype.addTask = function (task) {
        var length;
        length = this.Tasks.push(task);
        console.log(task + " has been added to out tasks array");
        return length;
    };
    Tasks.prototype.ListAllTasks = function () {
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log(this.Tasks[i]);
        }
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been deleted from our tasks array");
        }
        else {
            console.log(task + " was not found");
        }
        return this.Tasks.length;
    };
    return Tasks;
}());
var myTodos = new Tasks();
myTodos.addTask("Eat");
myTodos.ListAllTasks();
myTodos.deleteTask("Eat");
