import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as yaml from 'yaml';
//import * as jsonDiff from 'json-diff';
import * as diff from 'deep-diff';




@Injectable({
  providedIn: 'root'
})
export class YamlDataService {

  //private _url_yaml_file = "/assets/data/learningYAML.yml";
  //private _url_json_file = "/assets/data/jsonFile.json";
  //private _url_students_json = "/assets/data/students.json";

  private _url_getService = "/assets/data/services.yml";
  constructor(private http: HttpClient) { 
    //this.yamlToJson();
  }

  //////////// Getting Services Functions ////////////
  getServices(){
    return this.http.get(this._url_getService, {responseType: 'text'});
  }

  yamlToJson(temp: string){
    return yaml.parse(temp);
  }


  ///////////////////////// Faaltu Functions ////////////
  getYAMLFile(_url:any){
     return this.http.get(_url, { responseType: 'text' });
    
  }
  
  getJsonDiff(temp1: any, temp2: any){
    //console.log(jsonDiff.diffString(temp1,temp2));
    console.log(diff.diff(temp1,temp2));
  }
}

// npm i --save-dev @types/deep-diff