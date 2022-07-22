import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentsList:any[]=[
    {name:'Rosmery Rosario', state:'Regular'},
    {name:'Jennifer Rosario', state:'Approved'},
    {name:'Luis Daniel Rosario', state:'Repproved'},
    {name:'Joselyn Estrella', state:'Normal'},
  ]

  show:boolean=true;
  showDontShow(){
    this.show =! this.show;
  }
}
