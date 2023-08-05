class Pepita {
  constructor(joules = 0) {
    this.energia = joules;
  }
  comer(gr) {
    this.energia += gr * 4;
  }
  volar(km) {
    this.energia -= km;
  }
  despegar_aterrizar() {
    this.energia -= 10;
  }
  getEnergia() {
    return this.energia;
  }
}
