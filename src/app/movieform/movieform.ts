import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-movieform',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './movieform.html',
  styleUrl: './movieform.css'
})
export class Movieform {
  movieForm!:FormGroup;
  constructor(private fb: FormBuilder){
    this.movieForm=this.fb.group({
    name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],

    // ,  Validators.pattern('^[a-zA-Z ]*$')]
    date:['',Validators.required]
  });
  }
  get f(){
    return this.movieForm.controls;
  }
  onSubmit(){
    if(this.movieForm.valid){
      console.log('Form is submitted',this.movieForm.value);
      this.movieForm.reset();

    }
    else{
      alert('please eneter all the details');
      this.movieForm.markAllAsTouched();
      
    }
  }
  


}
