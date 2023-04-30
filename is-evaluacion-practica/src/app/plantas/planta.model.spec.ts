import { Planta } from './planta.model';

describe('Planta', () => {
  it('should create an instance', () => {
    expect(new Planta(
      1,
      "Lengua de vaca",
      "Sansevieria Trifasciata",
      "Interior",
      140,
      "Templado, cálido",
      "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
    )).toBeTruthy();
  });
});
