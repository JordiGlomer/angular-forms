import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms02',
  templateUrl: './forms02.component.html',
  styleUrls: ['./forms02.component.scss']
})
export class Forms02Component implements OnInit {
  formulario!: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.formulario = new FormGroup({
    //   name: new FormControl(''),
    //   password: new FormControl('')
    // })
    this.formulario = fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
    })
  }
sendData(){
    console.log(this.formulario.value);
    console.log(this.formulario.get('name')?.value);
};
  ngOnInit(): void {
  }

}
