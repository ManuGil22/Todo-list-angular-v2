import { Component } from '@angular/core';
import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  id = 0;
  tasksArray: Task[] = [];

  getNewTask(event:string){
    var newTask = {
      id: this.id,
      task: event
    }
    this.id = this.id + 1;
    this.tasksArray.push(newTask);
  }
}
