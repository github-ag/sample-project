import { Component, OnInit } from '@angular/core';
import { YamlDataService } from '../yaml-data.service';
import { student } from '../student'

@Component({
  selector: 'app-display-yamldata',
  templateUrl: './display-yamldata.component.html',
  styleUrls: ['./display-yamldata.component.css']
})
export class DisplayYAMLDataComponent implements OnInit {

  students: any;
  students2: any;
  //public fetchedYAMLData: any ;
  private _url_students_file = "/assets/data/students.yml";
  private _url_students2_file = "/assets/data/students2.yml";

  constructor(private _yamlDataService: YamlDataService) {
    //this.fetchedYAMLData = [];
    this.students = [];
    this.students2= [];
   }

  ngOnInit(): void {
    
    // Getting only the YAML string 
    this._yamlDataService.getYAMLFile(this._url_students_file)
        .subscribe(data => {
          this.students = data;
        });
    
        // Getting the parsed YAML
    this._yamlDataService.getYAMLFile(this._url_students2_file)
        .subscribe(data => {
          this.students2 = this._yamlDataService.yamlToJson(data);
        });
  }

  displayContent(){
    console.log(this.students);
  }
  diffBwStudents(){
    this._yamlDataService.getJsonDiff(this.students, this.students2);
  }
}
