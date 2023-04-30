import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantasListComponent } from './plantas-list.component';
import { PlantasService } from '../plantas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Planta } from '../planta.model';
import { of } from 'rxjs';

describe('PlantasListComponent', () => {
  let component: PlantasListComponent;
  let fixture: ComponentFixture<PlantasListComponent>;
  let plantasService: PlantasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PlantasListComponent ],
      providers: [PlantasService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasListComponent);
    component = fixture.componentInstance;
    plantasService = TestBed.inject(PlantasService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch plants on init', () => {
    const plants: Planta[] = [
    {
      "id": 1,
      "nombre_comun": "Lengua de vaca",
      "nombre_cientifico": "Sansevieria Trifasciata",
      "tipo": "Interior",
      "altura_maxima": 140,
      "clima": "Templado, cálido",
      "sustrato_siembra": "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
    },
    {
      "id": 2,
      "nombre_comun": "Chachafruto",
      "nombre_cientifico": "Schefflera actinophylla",
      "tipo": "Exterior",
      "altura_maxima": 1000,
      "clima": "Todos",
      "sustrato_siembra": "Sustrato para huerto"
    },
    {
      "id": 3,
      "nombre_comun": "Espatifilo",
      "nombre_cientifico": "Spathiphyllum Wallasii",
      "tipo": "Interior",
      "altura_maxima": 65,
      "clima": "Templado, cálido",
      "sustrato_siembra": "Tierra orgánica"
    }
  ];
    spyOn(plantasService, 'getAll').and.returnValue(of(plants));
    component.ngOnInit();
    expect(component.plants).toEqual(plants);
  });



});
