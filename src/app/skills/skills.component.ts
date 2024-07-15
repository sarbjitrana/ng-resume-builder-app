import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get skillsControls() {
    return (this.skillsForm.get('skills') as FormArray).controls;
  }

  addSkill() {
    (this.skillsForm.get('skills') as FormArray).push(this.fb.group({
      skill: ['', Validators.required],
    }));
  }

  removeSkill(index: number) {
    (this.skillsForm.get('skills') as FormArray).removeAt(index);
  }

  onSubmit() {
    console.log('Skills:', this.skillsForm.value);
  }
}
