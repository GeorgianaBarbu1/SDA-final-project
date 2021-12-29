import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TutoringService } from 'src/app/service/tutoringService';
import { PrivateLesson } from 'src/app/service/model/privateLesson';
import { ToastsService } from 'src/app/service/toasts.service';

@Component({
  selector: 'app-filtered-subjects',
  templateUrl: './filtered-subjects.component.html',
  styleUrls: ['./filtered-subjects.component.css'],
})
export class FilteredSubjectsComponent implements OnInit {
  filterSubjects: PrivateLesson[] = [];
  keyFilter: string = '';
  userId: string = '';
  constructor(
    private tutoringService: TutoringService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private toastsService: ToastsService
  ) {}

  ngOnInit() {
    if (this.router.url.includes('/anunturileMele')) {
      this.userId = this.auth.getItem('ID');
      this.getPrivateLessonsByUser();
    } else {
      this.keyFilter = this.route.snapshot.params['key'];
      this.getPrivateLessonsBySubject();
    }
  }

  getPrivateLessonsByUser() {
    this.tutoringService
      .getFilteredLessonsByUserId(this.userId)
      .subscribe((res) => {
        this.filterSubjects = res;
      });
  }

  getPrivateLessonsBySubject() {
    this.tutoringService
      .getFilteredLessonsByKey(this.keyFilter)
      .subscribe((res) => {
        this.filterSubjects = res;
      });
  }

  editPrivateLesson(subject: PrivateLesson) {
    this.router.navigate(['/new-add/' + subject.id]);
  }

  async deletePrivateLesson(subject: PrivateLesson) {
    if (!(await this.toastsService.promptForDelete())) {
      return;
    }
    this.tutoringService.deletePost(subject.id).subscribe(() => {
      this.getPrivateLessonsByUser();
    });
  }
}
