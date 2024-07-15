import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent {
  resumeForm: FormGroup;

  constructor(private fb: FormBuilder, private resumeService: ResumeService) {
    this.resumeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      education: this.fb.array([]),
      experience: this.fb.array([]),
      skills: this.fb.array([])
    });
  }

  onSubmit() {
    this.resumeService.createResume(this.resumeForm.value).subscribe(response => {
      console.log('Resume created:', response);
    });
  }
}
