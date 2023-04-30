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
  public indoorPlants: Number;
  public outdoorPlants: Number;

  constructor(public plantasService: PlantasService) {
    this.plants = [];
    this.indoorPlants = 0;
    this.outdoorPlants = 0;
  }

  ngOnInit(): void {
    this.getPlants();
  }

  private getPlants(){
    this.plantasService.getAll().subscribe((plants:Planta[]) => {
      this.plants = plants;
      this.indoorPlants = this.plants.filter(plant => plant.tipo === 'Interior').length;
      this.outdoorPlants = this.plants.filter(plant => plant.tipo === 'Exterior').length;
    });
  }

}
