import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { microService } from '../microService';

@Component({
  selector: 'app-workspace-dialogue',
  templateUrl: './workspace-dialogue.component.html',
  styleUrls: ['./workspace-dialogue.component.css']
})
export class WorkspaceDialogueComponent implements OnInit {

  mservice:microService;
  branch: any;
  profile: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: microService) {
    this.mservice = data;
    //console.log(this.mservice);
   }  

  ngOnInit(): void {
  }
  sendToContentDisplay(branch_profile: any){
    this.branch = branch_profile.branchValue;
    this.profile = branch_profile.profileValue;
    console.log(this.branch,this.profile);
  }

}
