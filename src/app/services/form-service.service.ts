import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor() {}

  addProject(project: any) {
    let projects: any[] = [];
    if (localStorage.getItem('Projects')) {
      projects = JSON.parse(localStorage.getItem('Projects')!);
      projects = [project, ...projects];
    } else {
      projects = [project];
    }
    localStorage.setItem('Projects', JSON.stringify(projects));
  }

  editProject(project: any, position: any) {
    const id = project.id;
    const projects = JSON.parse(localStorage.getItem('Projects')!);
    projects.map(function (dato: any) {
      if (dato.id == id) {
        dato.name = project.name;
      }
      return dato;
    });
    localStorage.setItem('Projects', JSON.stringify(projects));
  }

  deleteProject(project: any) {
    const id = project.id;
    const projects = JSON.parse(localStorage.getItem('Projects')!);
    let newData = projects.filter((item: any) => item.id !== id);
    localStorage.setItem('Projects', JSON.stringify(newData));
  }
}
