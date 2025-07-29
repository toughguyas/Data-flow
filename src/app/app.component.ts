import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildOfAppComponent } from "./child-of-app/child-of-app.component";
import { sendDataToParentType } from './child-of-app/sendToParentType';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildOfAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
  changedChildName = new FormControl();
  dndChildBornData = [ {
    child: 'Arth',
    parent : 'Apurva and Akash'
  },
  {
    child: 'Arth2',
    parent : 'Apurva and Akash2'
  },
  {
    child: 'Arth3',
    parent : 'Apurva and Akash3'
  },
  {
    child: 'Arth4',
    parent : 'Apurva and Akash4'
  }];
  headerName: string = 'DND Hospitals'; 
  @ViewChild(ChildOfAppComponent) childcomp! : ChildOfAppComponent;
  patchChildName(data : sendDataToParentType) {
    this.dndChildBornData[data.index].child = data.childName;
    this.headerName = this.childcomp.changedChildName.value;
  }
}
