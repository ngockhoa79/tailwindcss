import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl ,FormGroup, MaxLengthValidator, Validators} from '@angular/forms';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  constructor() { }
  genders =['Female','Other','I do not wish to say']

  ngOnInit(): void {
  }

}
