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

  constructor(@Inject(MAT_DIALOG_DATA) public data: microService) {
    this.mservice = data;
    console.log(this.mservice);

   }  

  ngOnInit(): void {
  }

}
