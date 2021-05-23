import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() btnText?: string;
  @Input() btnColor?: string;
  @Output() btnClick = new EventEmitter();

  handleButtonClick = () => {
    this.btnClick.emit();
  };

  constructor() {}

  ngOnInit(): void {}
}
