import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl ,FormGroup, MaxLengthValidator, Validators} from '@angular/forms';
@Component({
  selector: 'app-sample-angular-project',
  templateUrl: './sample-angular-project.component.html',
  styleUrls: ['./sample-angular-project.component.css']
})
export class SampleAngularProjectComponent implements OnInit {

  txtname='John Wick'
  txtgmail='donottake@mydog.com'
  txtnumberphone='0123456789'
  txtgender='Male'
  gender = 'Male'
  status= false
  slt=''
  txtnote ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  genders =['Female','Other','I do not wish to say']
  form:FormGroup;
  
  constructor(private FormBuilder:FormBuilder) {
    this.form =FormBuilder.group({
      name:[this.txtname,[Validators.required]],
      gmail:[this.txtgmail,[Validators.required]],
      number:[this.txtnumberphone,[Validators.required]],
      note:[this.txtnote,[Validators.required]]
    })
  }
  getvalue(e:any){
    this.txtgender=(e.target.value)
    console.log(e.target.value)
    
  }
  edit(){
    this.status = !this.status
    console.log(this.form.valid)
    
  }
  
 
  ngOnInit(): void {
    
    
}

}
