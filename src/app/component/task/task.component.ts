import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Task } from '../../Task';
// import { Tasks } from '../../mock-task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.todoService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  handleToggle(task: Task) {
    this.todoService
      .toggleTask({
        ...task,
        status: !task.status,
      })
      .subscribe(
        () =>
          (this.tasks = this.tasks.map((t) =>
            t.id === task.id ? { ...t, status: !t.status } : t
          ))
      );
  }

  handleAddTask(task: Task) {
    this.todoService.addTask(task).subscribe((task)=> this.tasks.push(task));
  }
}
