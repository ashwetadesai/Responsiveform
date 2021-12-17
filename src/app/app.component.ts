import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'respomsive-form';

  formGroup!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup=this.formBuilder.group({
      firstname:['',[Validators.required,Validators.maxLength(140),Validators.minLength(4)]],
      lastname:['',[Validators.required,Validators.maxLength(140),Validators.minLength(4)]],
      email:['',[Validators.required,Validators.maxLength(255),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$")]],
      mobile:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      pannumber:['',[Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]],
      addressline:['',Validators.required],
      dateofbirth:['',Validators.required],
      radioexample:['',Validators.required],
      Fileinput:['',Validators.required]
     

    })
  }
  get f(){
    return this.formGroup.controls;
  }
  submit(){
    
      console.log(this.formGroup.value);
      alert("Registration successfully");
      this.formGroup.reset();
    
   
  }
}
