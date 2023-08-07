import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.sass']
})
export class ToastComponent {
  @Input() message: string = 'Te postulaste correctamente'
}
