let contador = {
  valor: 0,
  siguiente: function () {
    this.contador=contador++;// Inserte el código aquí
    return contador;
  },
};

export { contador }