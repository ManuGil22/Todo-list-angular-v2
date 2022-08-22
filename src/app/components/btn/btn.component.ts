import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Output() clicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  newClick(){
    this.clicked.emit(true);
  }
}
