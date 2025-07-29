import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { sendDataToParentType } from './sendToParentType';

@Component({
  selector: 'app-child-of-app',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-of-app.component.html',
  styleUrl: './child-of-app.component.css'
})

export class ChildOfAppComponent {
@Input() childName!: string;
@Input() parentName!: string;
@Input() index!: number;
changedChildName = new FormControl();
@Output() childNameAfterChange = new EventEmitter<sendDataToParentType>();
ClickOnChangingChildName() {
  const data: sendDataToParentType = {
    childName: this.changedChildName.value,
    index: this.index
  };
  this.childNameAfterChange.emit(data);
}
}
