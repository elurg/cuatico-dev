import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalVisible = new BehaviorSubject<boolean>(false);
  private modalImage = new BehaviorSubject<string>('');

  modalVisible$ = this.modalVisible.asObservable();
  modalImage$ = this.modalImage.asObservable();

  openModal(imageUrl: string) {
    this.modalImage.next(imageUrl);
    this.modalVisible.next(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalVisible.next(false);
    document.body.style.overflow = '';
  }
} 