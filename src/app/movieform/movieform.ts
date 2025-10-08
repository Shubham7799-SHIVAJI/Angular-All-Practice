import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import { FormArray } from '@angular/forms';

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
    date:['',Validators.required],
    genres:this.fb.array([this.fb.control('',Validators.required)]),
    
  });
  }
  get f(){
    return this.movieForm.controls;
  }
  get genres(): FormArray {
  return this.movieForm.get('genres') as FormArray;
}

  // Add a new genre
  addGenre() {
    this.genres.push(this.fb.control('', Validators.required));
  }

  // Remove a genre
  removeGenre(index: number) {
    this.genres.removeAt(index);
  }

  onSubmit(){
    if(this.movieForm.valid){
      console.log('Form is submitted',this.movieForm.value);
      this.movieForm.reset();

  //     while (this.genres.length) {
  //   this.genres.removeAt(0);
  // }
      this.genres.clear();
    }
    else{
      alert('please eneter all the details');
      this.movieForm.markAllAsTouched();
      
    }
  }
  


}
