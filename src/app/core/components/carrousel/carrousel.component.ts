import { Component, OnInit } from '@angular/core';
import { CarrouselService } from 'src/app/shared';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.sass'],
})
export class CarrouselComponent implements OnInit {
  public imagenOferta: string | undefined;
  public ofertasLength: number | undefined;

  public ofertas: string[] = [];

  constructor(private carrouselService: CarrouselService) {}

  ngOnInit(): void {
    this.carrouselService.getOfertas()
  }

  showImages = () => {
    if (this.ofertasLength! > this.imagenOferta!.length) {
      this.ofertasLength = 0;
      this.imagenOferta = this.ofertas[0];
    } else {
      this.imagenOferta = this.ofertas[this.ofertasLength!];
      this.ofertasLength!++;
    }
  };
}
