import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-file',
  standalone: true,
  templateUrl: './input-file.html'
})
export class InputFile {
  selectedFileName: string = '';

  @Output() fileSelected = new EventEmitter<File>();

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.selectedFileName = file.name;
      this.fileSelected.emit(file);
    }
  }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }
}
