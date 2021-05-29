import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-branch-profile-input',
  templateUrl: './branch-profile-input.component.html',
  styleUrls: ['./branch-profile-input.component.css']
})
export class BranchProfileInputComponent implements OnInit {

  
  branchValue: any;
  profileValue: any;

  constructor() { }
  

  ngOnInit(): void {
  }

}
