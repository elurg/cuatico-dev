import { Component } from '@angular/core';
import { InputFile } from '../../core/input-file/input-file';

@Component({
  selector: 'app-module-id',
  imports: [InputFile],
  templateUrl: './module-id.html'
})
export class ModuleId {
  selectedFileName: string = '';
  
  handleFile(file: File) {
    this.selectedFileName = file.name;
}

}
