import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { PipeComponent } from './pipe/pipe.component';
import { ryComponent } from './rypipe/rypipe.component';
import { ChildComponent } from './Refrence/child.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ParentComponent } from './parent/parent.component';
import { Child2childComponent } from './child2child/child2child.component';
import { ChildSiblingComponent } from './child-sibling/child-sibling.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { DirectiveComponent } from './directive/directive.component';
import { RoutingComponent } from './routing/routing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PipeComponent,ryComponent, ChildComponent, ParentChildComponent, ParentComponent, Child2childComponent, ChildSiblingComponent, NgForComponent, DirectiveComponent, RoutingComponent
   
  ],
  imports: [
    MatSidenavModule,ReactiveFormsModule,BrowserModule,FormsModule,BrowserAnimationsModule,MatButtonModule, MatCheckboxModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
