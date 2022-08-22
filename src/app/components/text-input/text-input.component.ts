import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() getNewTask = 'false';
  @Output() newTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNewTaskEvent(event:any){
    if (this.getNewTask){
      this.newTask.emit(event.target.value);
      event.target.value = "";
    }
  }

}
