import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title :string = 'Task Tracker';
  headerStatus: boolean = false; //initial val
  constructor() { }

  ngOnInit(): void {
  }

  myParentEventFunc(status: boolean) : void{
    console.log(`parent called: ${status}`);
    this.headerStatus = status;
  };

}
