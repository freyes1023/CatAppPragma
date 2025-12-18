import { CatImagenComponent } from './../../components/cat-imagen/cat-imagen.component';
import { CatCardComponent } from './../../components/cat-card/cat-card.component';
import { IBreed } from 'src/app/interfaces/IBreed';
import { DataService } from './../../services/data.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Input, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonicModule } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss'],
  standalone:true,
  imports:[CommonModule, IonicModule, CatCardComponent, CatImagenComponent]
})
export class BreedDetailsComponent implements OnInit, AfterViewInit {
  @ViewChild(IonContent, { static: true }) ionContent!: IonContent;
  @ViewChild('scrollTarget', { static: true }) scrollTarget!: ElementRef;
  private route = inject(ActivatedRoute);
  private data = inject(DataService);
  id : string | null = null ;
  breed = signal<IBreed>({} as IBreed);
  constructor() { }


  photoTransform = 'scale(1)';
  borderRadius = '0px';

  async ngAfterViewInit() {
    const scrollEl = await this.ionContent.getScrollElement();


  scrollEl.addEventListener('scroll', () => {
    const scrollTop = scrollEl.scrollTop;

    const maxScroll = 120;
    const minScale = 0.85;

    const progress = Math.min(scrollTop / maxScroll, 1);
    const scale = 1 - progress * (1 - minScale);

    this.photoTransform = `scale(${scale})`;
    this.borderRadius = `${progress * 16}px`;
  });
  }

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id');
      if(this.id){
        this.loadBreedDetails(this.id);
      }
      
  }
  async loadBreedDetails(id: string) {
    try {
      const breedDetails = await firstValueFrom( this.data.getBreedById(id));
      if (!breedDetails) {
        console.error('Breed not found');
        return;
      }
      if(!breedDetails.reference_image_id)breedDetails.reference_image_id = 'none';
      this.breed.set(breedDetails);
    } catch (error) {
      console.error('Error loading breed details:', error);
    }
  }

}
