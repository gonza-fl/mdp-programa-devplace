class Galleta {
  constructor(color, btns, tamanho) {
    this.color = color;
    this.botones = btns;
    this.tamanho = tamanho;
  }
  getColor() {
    return this.color;
  }
  getBotones() {
    return this.botones;
  }
  getTamanho() {
    return this.tamanho;
  }
  setColor(nuevoColor) {
    this.color = nuevoColor;
  }
  setBotones(nuevosBotones) {
    this.botones = nuevosBotones;
  }
  setTamanho(nuevoTamanho) {
    this.color = nuevoTamanho;
  }
}

const galletitaRoja = new Galleta('rojo', 2, 'mid');

galletitaRoja.getColor();
galletitaRoja.getTamanho();
galletitaRoja.getColor();
galletitaRoja.setBotones(3);
galletitaRoja.getBotones();

const galletitaMarron = new Galleta('marron', 4, 'large');

galletitaMarron.getColor();
galletitaRoja.getColor();
