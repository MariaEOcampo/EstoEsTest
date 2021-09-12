import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { AddProjectComponent } from './pages/add-project/add-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ItemProjectComponent } from './components/item-project/item-project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    AddProjectComponent,
    ProjectFormComponent,
    ItemProjectComponent,
    EmptyStateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
