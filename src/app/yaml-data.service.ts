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

  private _url_getServicesList = "/assets/data/services.yml";
  private _url_getService = "/assets/data/";
  constructor(private http: HttpClient) { 
    //this.yamlToJson();
  }

  //////////// Getting Services Functions ////////////
  getServicesList(){
    return this.http.get(this._url_getServicesList, {responseType: 'text'});
  }
  getService(service:any, branch:any, profile:any){
    let modified_url = this._url_getService.concat(branch.toString()," branch/",service,"_",profile.toString(),".yml");
    //console.log("modified url is");
    console.log(modified_url);
    return this.http.get(modified_url,{responseType: 'text'});
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