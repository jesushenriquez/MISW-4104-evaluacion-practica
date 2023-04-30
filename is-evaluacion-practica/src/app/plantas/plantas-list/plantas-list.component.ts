import { Component } from '@angular/core';
import { Planta } from '../planta.model';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-plantas-list',
  templateUrl: './plantas-list.component.html',
  styleUrls: ['./plantas-list.component.css']
})
export class PlantasListComponent {

  public plants: Planta[];

  constructor(public plantasService: PlantasService) {
    this.plants = [];
  }

  ngOnInit(): void {
    this.getPlants();
  }

  private getPlants(){
    this.plantasService.getAll().subscribe((plants:Planta[]) => {
      this.plants = plants;
    })
  }

}
