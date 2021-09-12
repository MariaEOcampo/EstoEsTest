import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
})
export class HomeLayoutComponent implements OnInit {
  showForm: boolean = false;
  listOfProjects: any[] = [];
  projectToEdit: any;
  isEditHeader: boolean = false;
  deleted: boolean = false;
  p: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.showForm = false;
    this.isEditHeader = false;
    this.deleted = false;
    this.listOfProjects = JSON.parse(localStorage.getItem('Projects')!);
  }

  openCreate(event: any) {
    this.projectToEdit = null;
    this.showForm = event;
  }

  goBack() {
    this.showForm = false;
    this.ngOnInit();
  }

  projectSelected(event: any) {
    this.projectToEdit = event;
  }

  isEdit(event: any) {
    this.showForm = true;
    this.isEditHeader = true;
  }

  isDeleted(event: boolean) {
    this.deleted = event;
    if (this.deleted) {
      this.listOfProjects = JSON.parse(localStorage.getItem('Projects')!);
    }
  }
}
