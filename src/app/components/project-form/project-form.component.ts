import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Manager } from 'src/app/models/manager';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  project!: Project;
  public managers: Manager[] = [];
  public asignedList: Manager[] = [];
  public statusList: string[] = [];
  public successForm: boolean = false;
  public editForm: boolean = false;
  listOfProjects: any[] = [];

  @Input() projectToEdit: any;

  projectForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    manager: ['', [Validators.required]],
    assigned: ['', [Validators.required]],
    status: ['', [Validators.required]],
    id: [0],
  });

  constructor(
    private fb: FormBuilder,
    private formService: FormServiceService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.editForm = false;
    this.successForm = false;
    this.listOfProjects = [];
    this.dataService
      .getManagers()
      .subscribe((managers) => (this.managers = managers));
    this.dataService
      .getAssigned()
      .subscribe((assigned) => (this.asignedList = assigned));

    this.dataService
      .getStatus()
      .subscribe((status) => (this.statusList = status));
    this.listOfProjects = JSON.parse(localStorage.getItem('Projects')!);
    if (this.projectToEdit !== null) {
      this.editProject(this.projectToEdit);
    }
  }

  cleanProjectForm() {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      manager: ['', [Validators.required, Validators.minLength(3)]],
      assigned: ['', [Validators.required, Validators.minLength(3)]],
      status: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  createProject() {
    if (this.projectToEdit) {
      let id = this.projectToEdit.id;
      this.projectForm.controls['id'].setValue(this.projectToEdit.id);
      let projects = localStorage.getItem('Projects');
      let position = projects?.indexOf(id);
      this.formService.editProject(this.projectForm.value, position);
      this.successForm = true;
    } else {
      const creation = Date.now();
      const today = new Date(creation);
      let idToday = today.toISOString();
      this.projectForm.controls['id'].setValue(idToday);
      this.project = this.projectForm.value;
      let projectToSave = Object.assign(this.project, this.projectForm.value);
      this.formService.addProject(projectToSave);
      this.successForm = true;
      this.projectForm.reset();
    }
  }

  editProject(project: Project) {
    this.editForm = true;
    this.projectForm.controls['name'].setValue(project.name);
    this.projectForm.controls['description'].setValue(project.description);
    this.projectForm.controls['manager'].setValue(project.manager);
    this.projectForm.controls['assigned'].setValue(project.assigned);
    this.projectForm.controls['status'].setValue(project.status);
  }

  deleteProject(project: Project) {
    this.formService.deleteProject(project);
  }

  fieldOk(field: string) {
    return (
      this.projectForm.controls[field].errors &&
      this.projectForm.controls[field].touched
    );
  }
}
