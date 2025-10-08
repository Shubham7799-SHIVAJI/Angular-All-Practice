import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movieform } from './movieform';

describe('Movieform', () => {
  let component: Movieform;
  let fixture: ComponentFixture<Movieform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Movieform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Movieform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have all the fields ',()=>{
    const form=component.movieForm;
    expect(form.contains('name')).toBeTrue();
    expect(form.contains('date')).toBeTrue();
  });

  it('name field should be required',()=>{
    const name=component.movieForm.get('name');
    name?.setValue('');
    expect(name?.valid).toBeFalse();
    expect(name?.errors?.['required']).toBeTrue();
  });

  it('it conatins only alphabets',()=>{
    const name=component.movieForm.get('name');
    name?.setValue('shubham1234');
    expect(name?.valid).toBeFalse();
    expect(name?.errors?.['required']).toBeTruthy();
    name?.setValue('shubham');
    expect(name?.valid).toBeTrue();
    
  });
  it('it should validate the form',()=>
  {
    component.movieForm.patchValue({
      name:'shubham',
      date:'2025-12-12'
    });
    expect(component.movieForm.valid).toBeTrue();
    
  })
    
});
