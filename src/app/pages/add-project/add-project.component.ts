import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  create: boolean = false;

  @Output() openCreate = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  addProjectPage() {
    this.create = true;
    this.openCreate.emit(this.create);
  }
}
