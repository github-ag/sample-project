import { Component, OnInit } from '@angular/core';
import { microService } from '../microService'
import { YamlDataService } from '../yaml-data.service';

@Component({
  selector: 'app-display-services',
  templateUrl: './display-services.component.html',
  styleUrls: ['./display-services.component.css']
})
export class DisplayServicesComponent implements OnInit {

  services: microService[];
  constructor(private _yamlDataService: YamlDataService) { 
    this.services = [];
  }
  logServices(){
    console.log(this.services);
  }

  ngOnInit(): void {
    this._yamlDataService.getServices()
        .subscribe(data => {
          this.services = this._yamlDataService.yamlToJson(data);
        });
  }

}
