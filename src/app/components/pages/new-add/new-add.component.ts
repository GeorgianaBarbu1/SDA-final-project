import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivateLesson } from 'src/app/service/model/privateLesson';
import { AuthService } from 'src/app/service/auth.service';
import { TutoringService } from 'src/app/service/tutoringService';
import { Subject } from 'src/app/service/model/subject';

@Component({
  selector: 'app-new-add',
  templateUrl: './new-add.component.html',
  styleUrls: ['./new-add.component.css'],
})
export class NewAddComponent implements OnInit {
  constructor(
    private tutoringService: TutoringService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  subjectsData: Subject[] = [];
  id: number | undefined;
  selectedPrivateLesson: PrivateLesson | undefined;
  localUrl = '';
  key = '';

  //editam anuntul
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.tutoringService.getPrivateLessonsById(this.id).subscribe((res) => {
        this.selectedPrivateLesson = res;
        if (this.selectedPrivateLesson) {
          this.form.patchValue(this.selectedPrivateLesson);
        }
      });
    }
    //dupa editare, luam lista noastra din nou
    this.tutoringService.getSubjects().subscribe((data: Subject[]) => {
      this.subjectsData = data;
    });
  }
  //functia pentru incarcarea imaginii

  fileEvent(fileInput: any) {
    const reader = new FileReader();
    if (fileInput.target.files && fileInput.target.files[0]) {
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.form.controls.img.setValue(this.localUrl);
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  //butonul de creare a anuntului
  submitForm() {
    let submittedForm: PrivateLesson = this.form.value;
    submittedForm = {
      ...submittedForm,
      userId: this.auth.getItem('ID'),
      key: this.getSubjectKey(),
    };
    this.tutoringService.postSubject(submittedForm).subscribe(() => {
      this.router.navigate(['/anunturileMele']);
    });
  }
  //functia pentru popularea fieldului key din db, obtinem cheia subiectului selectat
  getSubjectKey() {
    const subject: Subject | undefined = this.subjectsData.find(
      (item) => item.title === this.form.controls.subject.value
    );
    if (subject) return subject.subjectKey;
    else return '';
  }
  //functia care editeaza la click pe buton

  updateForm() {
    const updatedForm = {
      ...this.form.value,
      userId: this.selectedPrivateLesson?.userId,
      key: this.selectedPrivateLesson?.key,
      id: this.selectedPrivateLesson?.id,
    };
    this.tutoringService.putSubject(updatedForm).subscribe(() => {
      this.router.navigate(['/anunturileMele']);
    });
  }
}
