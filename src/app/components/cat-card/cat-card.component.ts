import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IBreed } from 'src/app/interfaces/IBreed';
import { CatImagenComponent } from '../cat-imagen/cat-imagen.component';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css'],
  standalone: true,
  imports: [CommonModule, IonicModule, CatImagenComponent],
})
export class CatCardComponent implements OnInit {

  @Input() set breed (value: IBreed) {
    this._breed = value;
  }
  get breed(): IBreed {
    return this._breed;
  }
  private _breed: IBreed = {} as IBreed;

  constructor() { }

  ngOnInit() {
  }

}
