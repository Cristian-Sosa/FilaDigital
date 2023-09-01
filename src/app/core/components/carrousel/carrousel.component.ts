import { Component, OnDestroy, OnInit } from '@angular/core';
import { CarrouselService } from 'src/app/shared';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.sass'],
})
export class CarrouselComponent implements OnInit, OnDestroy {
  public imagenOferta: string | null = null;

  constructor(private carrouselService: CarrouselService) {}

  ngOnDestroy(): void {
    this.carrouselService.clearInterval();
  }

  ngOnInit(): void {
    this.carrouselService.getOfertas();
    this.carrouselService.getOfertaObservable().subscribe({
      next: (imagen) => {
        this.imagenOferta = imagen;
      },
    });
  }
}
