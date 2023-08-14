import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilaDigitalComponent } from '../../pages';


const routes: Routes = [
  { path: '', component: FilaDigitalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurneroRoutingModule { }
