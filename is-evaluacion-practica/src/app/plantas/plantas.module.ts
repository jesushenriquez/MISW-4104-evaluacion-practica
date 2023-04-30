import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasListComponent } from './plantas-list/plantas-list.component';



@NgModule({
  declarations: [
    PlantasListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PlantasListComponent]
})
export class PlantasModule { }
