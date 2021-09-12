import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-item-project',
  templateUrl: './item-project.component.html',
  styleUrls: ['./item-project.component.scss'],
})
export class ItemProjectComponent implements OnInit {
  isEdit: boolean = false;
  @Input() project: any;
  @Output() projectSelected = new EventEmitter<any>();
  @Output() isEditForm = new EventEmitter<boolean>();
  @Output() isDeleted = new EventEmitter<boolean>();
  constructor(private formService: FormServiceService) {}

  ngOnInit(): void {}

  editForm(project: any) {
    this.isEdit = true;
    this.isEditForm.emit(this.isEdit);
    this.projectSelected.emit(project);
  }

  deleteForm(project: any) {
    this.projectSelected.emit(project);
    if (confirm('Are you sure you want to delete it?')) {
      this.formService.deleteProject(project);
      this.isDeleted.emit(true);
    }
  }
}
