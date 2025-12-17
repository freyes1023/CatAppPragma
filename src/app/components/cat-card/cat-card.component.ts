import { UtilsService } from './../../services/utils.service';
import { DIR_COUNTRIES } from './../../services/contries';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IBreed } from 'src/app/interfaces/IBreed';
import { CatImagenComponent } from '../cat-imagen/cat-imagen.component';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CatImagenComponent],
})
export class CatCardComponent implements OnInit {

  @Input() set breed (value: IBreed) {
    this._breed = value;
  }
  @Input() set showDetails (value: boolean) {
    this._showDetails = value;
  }
  @Input() set showImage (value: boolean) {
    this._showImage = value;
  }

  get breed(): IBreed {
    return this._breed;
  }
  get showDetails(): boolean {
    return this._showDetails;
  }
  get showImage(): boolean {
    return this._showImage;
  }

  private _breed: IBreed = {} as IBreed;
  private _showDetails: boolean = false;
  private _showImage: boolean = true;

  readonly utilsService = inject(UtilsService)
  countries = DIR_COUNTRIES
  keysShownPreviously = [
    'id',
    'name',
    'origin',
    'temperament',
    'description',
    'life_span',
    'weight',
    'reference_image_id'
  ]
  constructor() { }

  ngOnInit() {
  }

  get breedKeys(){
    const objectWithoutKeysShownPreviously = {...this.breed}
    Object.keys(this.breed).forEach((key) => {
      if(this.keysShownPreviously.includes(key)){
        delete objectWithoutKeysShownPreviously[key as keyof typeof this.breed];
      }
    })

    return Object.keys(objectWithoutKeysShownPreviously);
  }

  breedValueForKey(key :string){
    const keySerialized = key as keyof typeof this.breed
    const value = this.breed[keySerialized];
    if (key === 'country_code' ){
      return this.utilsService.get_country(value as string);
    }
    return value;
  }

  
}
