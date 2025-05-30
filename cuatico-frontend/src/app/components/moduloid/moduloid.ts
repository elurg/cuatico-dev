import { Component } from '@angular/core';
import { InputFile } from '../../core/input-file/input-file';

@Component({
  selector: 'app-moduloid',
  imports: [InputFile],
  templateUrl: './moduloid.html'
})
export class Moduloid {
  selectedFileName: string = '';
  
  handleFile(file: File) {
    this.selectedFileName = file.name;
  // TODO: Definir donde se guardara el archivo
}

}
