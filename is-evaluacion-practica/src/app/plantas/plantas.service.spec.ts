import { TestBed } from '@angular/core/testing';

import { PlantasService } from './plantas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Planta } from './planta.model';

describe('PlantasService', () => {
  let service: PlantasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantasService]
    });

    service = TestBed.inject(PlantasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all plants', () => {
    const mockPlants: Planta[] = [
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

    service.getAll().subscribe((plants: Planta[]) => {
      expect(plants.length).toBe(3);
      expect(plants).toEqual(mockPlants);
    });

    const req = httpMock.expectOne(`https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPlants);
  });

  it('should handle empty plants list', () => {
    const mockPlants: Planta[] = [];

    service.getAll().subscribe((plants: Planta[]) => {
      expect(plants.length).toBe(0);
      expect(plants).toEqual(mockPlants);
    });

    const req = httpMock.expectOne(`https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPlants);
  });


});
