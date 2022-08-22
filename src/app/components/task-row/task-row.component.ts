import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent implements OnInit {
  @Input() taskDescription = '';
  @Input() taskId = '';
  taskCompleted = false ;
  
  constructor() { }

  ngOnInit(): void {
  }

  isTaskCompleted(value: boolean){
    this.taskCompleted = value;
  }

}
