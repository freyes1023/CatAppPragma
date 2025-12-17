import { DataService } from './../../services/data.service';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cat-imagen',
  templateUrl: './cat-imagen.component.html',
  styleUrls: ['./cat-imagen.component.css'],
  imports: [IonicModule, CommonModule],
})
export class CatImagenComponent implements OnInit {
  @Input() set imageReference (value: string) {
    this._imageReference = value;
  }
  get imageReference(): string {
    return this._imageReference;
  }
  private _imageReference: string = '';

  imagenURl = signal('');
  imagen_default = 'assets/images/cat_deault.png';
  private data = inject(DataService);

  constructor() { }

  ngOnInit() { 
    this.data.getImagenBreed(this.imageReference).subscribe({
      next: (img) => {
        this.imagenURl.set(img.url);
      },
      error: (err) => {
        this.imagenURl.set(this.imagen_default);
      }
    })
  }
  onError(event:any) {
    console.log("🚀 ~ CatImagenComponent ~ onError ~ onError:")
    this.imagenURl.set(this.imagen_default);
  }

}
