import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { microService } from '../microService'
import { WorkspaceDialogueComponent } from '../workspace-dialogue/workspace-dialogue.component';
import { YamlDataService } from '../yaml-data.service';

@Component({
  selector: 'app-display-services',
  templateUrl: './display-services.component.html',
  styleUrls: ['./display-services.component.css']
})
export class DisplayServicesComponent implements OnInit {

  services: microService[];
  constructor(private _yamlDataService: YamlDataService, public dialog: MatDialog) { 
    this.services = [];
  }
  logServices(){
    console.log(this.services);
  }
  openWorkspace(mservice: microService){
    const dialogRef = this.dialog.open(WorkspaceDialogueComponent,{
      data: mservice,
      height: '800px',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
  }

  ngOnInit(): void {
    this._yamlDataService.getServicesList()
        .subscribe(data => {
          this.services = this._yamlDataService.yamlToJson(data);
        });
  }

}
