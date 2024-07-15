import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      experience: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get experienceControls() {
    return (this.experienceForm.get('experience') as FormArray).controls;
  }

  addExperience() {
    this.experienceControls.push(this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      startYear: ['', Validators.required],
      endYear: ['', Validators.required],
    }));
  }

  removeExperience(index: number) {
    this.experienceControls.splice(index, 1);
  }

  onSubmit() {
    console.log('Experience:', this.experienceForm.value);
  }
}
