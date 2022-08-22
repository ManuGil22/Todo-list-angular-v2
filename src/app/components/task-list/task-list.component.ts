import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  @Input() taskList: Task[] = [];

  constructor() {  }

  ngOnInit(): void {
  }
}
