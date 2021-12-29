import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ToastsService {
  constructor() {}
  async promptForDelete(): Promise<boolean> {
    const result = await Swal.fire({
      title: 'Stergere anunt',
      text: 'Sigur vrei sa stergi acest anunt?',
      showCancelButton: true,
      confirmButtonText: 'Da',
      confirmButtonColor: '#3399ff',
      cancelButtonColor: '#cc3300',
      cancelButtonText: 'Nu',
      customClass: {
        title: 'sweet_title',
      },
    });
    return !!result.value;
  }
}
