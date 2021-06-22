import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  hide=true;
  password!:string;
  confirmPassword!:string;
  editing!:string;
  selected!:any;

  arrayLanguages:string[]= ['catalán','español','inglés', 'francés','italiano','ruso', 'griego']
  constructor() { }

  ngOnInit(): void {
  }
senData(data:any):void{
console.log(data.selected.length)
}
}



