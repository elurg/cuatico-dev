import { Component } from '@angular/core';
import { InputFile } from '../../core/input-file/input-file';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-id',
  imports: [CommonModule, InputFile],
  templateUrl: './module-id.html'
})
export class ModuleId {
  selectedFileName: string = '';
  
  handleFile(file: File) {
    this.selectedFileName = file.name;
}

}
