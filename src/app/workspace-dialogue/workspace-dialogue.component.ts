import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { microService } from '../microService';
import { YamlDataService } from '../yaml-data.service';

@Component({
  selector: 'app-workspace-dialogue',
  templateUrl: './workspace-dialogue.component.html',
  styleUrls: ['./workspace-dialogue.component.css']
})
export class WorkspaceDialogueComponent implements OnInit {

  mservice:microService;
  branch: any;
  profile: any;
  displayData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: microService, private _yamlDataService: YamlDataService) {
    this.mservice = data;
    //console.log(this.mservice);
   }  

  ngOnInit(): void {
  }
  sendToContentDisplay(branch_profile: any){
    this.branch = branch_profile.branchValue;
    this.profile = branch_profile.profileValue;
    //console.log(this.branch,this.profile);

    this._yamlDataService.getService(this.mservice.service,this.branch,this.profile)
    .subscribe(data => {
      console.log(data);
      //this.displayData = this._yamlDataService.yamlToJson(data);
      this.displayData = data;
      console.log(this.displayData);
    });

  }

}
