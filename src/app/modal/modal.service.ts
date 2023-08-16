import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private isVisibleSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();

  showModal(): void {
    this.isVisibleSubject.next(true);
  }

  hideModal(): void {
    this.isVisibleSubject.next(false);
  }
}
