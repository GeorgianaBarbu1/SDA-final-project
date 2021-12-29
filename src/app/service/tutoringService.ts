import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './model/subject';
import { Tutoring } from './model/tutoring';
import { map } from 'rxjs/operators';
import { PrivateLesson } from './model/privateLesson';
import { API_PRIVATE_LESSONS, API_SUBJECTS } from './constants';
import { getRandomId } from './utils';

@Injectable({
  providedIn: 'root',
})
export class TutoringService {
  constructor(private http: HttpClient) {}

  getAllPrivateLessons() {
    return this.http.get<PrivateLesson[]>(API_PRIVATE_LESSONS);
  }

  getSubjects() {
    return this.http.get<Subject[]>(API_SUBJECTS);
  }
  // functia pentru filtrare

  getFilteredLessonsByKey(keyFilter: string) {
    return this.getAllPrivateLessons().pipe(
      map((res) => {
        const filterSubject = res.filter((item) => item.key === keyFilter);
        return filterSubject;
      })
    );
  }

  getFilteredLessonsByUserId(userId: string) {
    return this.getAllPrivateLessons().pipe(
      map((res) => {
        const filterSubject = res.filter((item) => item.userId === userId);
        return filterSubject;
      })
    );
  }

  getPrivateLessonsById(id: number) {
    return this.getAllPrivateLessons().pipe(
      map((res) => {
        const privateLesson = res.find((item) => item.id === id);
        return privateLesson;
      })
    );
  }

  postSubject(subject: PrivateLesson) {
    return this.http.post(API_PRIVATE_LESSONS, {
      ...subject,
      id: getRandomId(),
    });
  }
  //functia care face update anuntului

  putSubject(subject: PrivateLesson) {
    return this.http.put(`${API_PRIVATE_LESSONS}/${subject.id}`, subject);
  }
  deletePost(subjectId: number) {
    return this.http.delete(`${API_PRIVATE_LESSONS}/${subjectId}`);
  }
}
