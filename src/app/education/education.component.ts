import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.educationForm = this.fb.group({
      education: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get educationControls() {
    return (this.educationForm.get('education') as FormArray).controls;
  }

  addEducation() {
    this.educationControls.push(this.fb.group({
      school: ['', Validators.required],
      degree: ['', Validators.required],
      fieldOfStudy: ['', Validators.required],
      startYear: ['', Validators.required],
      endYear: ['', Validators.required],
    }));
  }

  removeEducation(index: number) {
    this.educationControls.splice(index, 1);
  }

  onSubmit() {
    console.log('Education:', this.educationForm.value);
  }
}
