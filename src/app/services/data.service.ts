import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Manager } from '../models/manager';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  projectManagerList: Manager[] = [
    {
      name: 'Juan Carlos Perez',
    },
    {
      name: 'Lina Gomez',
    },
    {
      name: 'Monica Lopez',
    },
  ];

  assignation: Manager[] = [
    {
      name: 'Lina Tolosa',
    },
    {
      name: 'Lucas Lopez',
    },
    {
      name: 'Agustin Perez',
    },
  ];

  status = ['Enabled', 'Disabled', 'Pending'];

  constructor() {}

  getManagers(): Observable<Manager[]> {
    return of(this.projectManagerList);
  }

  getAssigned(): Observable<Manager[]> {
    return of(this.assignation);
  }

  getStatus(): Observable<string[]> {
    return of(this.status);
  }
}
