import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  title: string = 'The Title';
  tasks: Task[] = [
    { title: "Task 1" },
    { title: "Task 2", completed: true },
    { title: "Task 3" },
    { title: "Task 4" }
  ];

  ngOnInit(): void {
    console.log(this.tasks);
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks)
      this.tasks = JSON.parse(storedTasks);
  }
  save() {
    localStorage.setItem("tasks",
      JSON.stringify(this.tasks));
  }

}
interface Task {
  title: string;
  completed?: boolean;
}