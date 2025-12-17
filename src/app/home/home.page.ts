import {
  Component,
  effect,
  inject,
  OnInit,
  signal,
  untracked,
  ViewChild,
} from '@angular/core';
import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonicModule,
  RefresherCustomEvent,
} from '@ionic/angular';

import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IBreed } from '../interfaces/IBreed';
import { CatCardComponent } from '../components/cat-card/cat-card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, CatCardComponent]
})
export class HomePage  {
  private data = inject(DataService);
  breeds = signal<IBreed[]>([] as IBreed[]);
  lastPage = signal(0);
  loading = signal(false);
  hasNextPage = true;

  @ViewChild(IonContent, { static: true })
content!: IonContent;
  constructor() {
    this.effectLoadBreeds();
    this.effectAutoLoadIfNoScroll(); 
  }

 
  private effectLoadBreeds() {
    effect(() => {
   const lastPage = this.lastPage();

    untracked(() => {
      if (!this.loading()) {
        this.loading.set(true);
        this.loadBreeds(lastPage, 'effectLoadBreed');
      }
    });
  });
  }

  async hasScroll(): Promise<boolean> {
    const el = await this.content.getScrollElement();
    return el.scrollHeight > el.clientHeight;
  }

  // 🔹 Effect para auto carga si no hay scroll
  private effectAutoLoadIfNoScroll() {
    effect(() => {
      const breeds = this.breeds();

      if (!breeds.length) return;
      if (this.loading()) return;
      if (!this.hasNextPage) return;

      queueMicrotask(async () => {
        const hasScroll = await this.hasScroll();

        if (!hasScroll) {
          console.log('📦 No hay scroll, cargando siguiente página...');
          this.lastPage.update(p => p + 1);
        }
      });
    });
  }

  loadBreeds(lastPage: number = 0, route: string) {
    if (lastPage === 0) {
      this.breeds.set([] as IBreed[]);
      this.hasNextPage = true;
    }
    if (!this.hasNextPage) {
      this.loading.set(false);
      return;
    }

    this.data.getListBreeds(lastPage).subscribe({
      next: (results: IBreed[]) => {
        this.breeds.update((currentBreeds) => [...currentBreeds, ...results]);
        if (results.length === 0) this.hasNextPage = false;
      },
      error: (error: any) =>
        console.error('🚀 ~ HomePage ~ loadBreeds ~ error:', error),
      complete: () => {
        this.loading.set(false);
      },
    });
  }
  refresh(ev: any) {
    this.lastPage.set(0);
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 1000);
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    if (!this.hasNextPage || this.loading()) {
      event.target.complete();
      return;
    }

    this.lastPage.update(p => p + 1);
    event.target.complete();
  }
}
