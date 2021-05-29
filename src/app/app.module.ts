import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayYAMLDataComponent } from './display-yamldata/display-yamldata.component';
import { DisplayServicesComponent } from './display-services/display-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WorkspaceDialogueComponent } from './workspace-dialogue/workspace-dialogue.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BranchProfileInputComponent } from './branch-profile-input/branch-profile-input.component';

import { FormsModule } from '@angular/forms';
import { ContentDisplayComponent } from './content-display/content-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayYAMLDataComponent,
    DisplayServicesComponent,
    WorkspaceDialogueComponent,
    BranchProfileInputComponent,
    ContentDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
