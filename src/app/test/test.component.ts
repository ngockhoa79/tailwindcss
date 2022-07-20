import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl ,FormGroup, MaxLengthValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  form:FormGroup;
  txtname='John Wick'
  txtgmail='donottake@mydog.com'
  txtnumberphone='0123456789'
  txtgender = 'Male'
  status= false
  slt=''
  txtnote ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  genders =['Female','Other','I do not wish to say']
  
  
  constructor(private FormBuilder:FormBuilder) {
    this.form = FormBuilder.group({
      name :[this.txtname,Validators.required],
      numberphone:[this.txtnumberphone,Validators.required],
      gmail:[this.txtgmail,Validators.required],
      note:[this.txtnote,Validators.required],
      gender:[this.txtgender,Validators]
    })
  }
  getvalue(e:any){
    this.txtgender=(e.target.value)
    
  }
  
 
  ngOnInit(): void {
    
}
}
