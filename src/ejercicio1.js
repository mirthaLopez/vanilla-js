let contador = {
  valor: 0,
  siguiente: function () {
    this.contador=valor++;// Inserte el código aquí
    return contador;
  },
};

export { contador }