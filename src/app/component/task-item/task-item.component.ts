import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() btnDelete = new EventEmitter();
  @Output() handleToggle = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  handleDeleteTask(task: Task) {
    this.btnDelete.emit();
  }

  handleToggleTask(task: Task) {
    this.handleToggle.emit();
  }
}
