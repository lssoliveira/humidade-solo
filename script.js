const tipoSolo = prompt('Digite o tipo de solo: (fino, medio ou grosso)');
const umidadeSolo = prompt('Digite o valor da umidade do solo: (1 a 100)');
const Resultado = ('Então ');
document.write('Dado que o solo é: ' + tipoSolo, '<br>\n');
document.write('Quando a umidade do solo é: ' + umidadeSolo, '<br>\n');

function validarUmidadeSoloFino(umidadeSolo) {
  if (umidadeSolo <= 0 || umidadeSolo > 100) {
    return 'valor de umidade do solo inválido';
  };
  if (umidadeSolo > 0 && umidadeSolo < 60) {
    return 'umidade do solo perigosamente baixa';
  };
  if (umidadeSolo >= 60 && umidadeSolo < 80) {
    return 'irrigação a ser aplicada';
  };
  if (umidadeSolo >= 80 && umidadeSolo <= 100) {
    return 'irrigação não necessária'
  };
}

function validarUmidadeSoloMedio(umidadeSolo) {
  if (umidadeSolo <= 0 || umidadeSolo > 100) {
    return 'valor de umidade do solo inválido';
  };
  if (umidadeSolo > 0 && umidadeSolo < 70) {
    return 'umidade do solo perigosamente baixa';
  };
  if (umidadeSolo >= 70 && umidadeSolo < 88) {
    return 'irrigação a ser aplicada';
  };
  if (umidadeSolo >= 88 && umidadeSolo <= 100) {
    return 'irrigação não necessária'
  };
}

function validarUmidadeSoloGrosso(umidadeSolo) {
  if (umidadeSolo <= 0 || umidadeSolo > 100) {
    return 'valor de umidade do solo inválido';
  };
  if (umidadeSolo > 0 && umidadeSolo < 80) {
    return 'umidade do solo perigosamente baixa';
  };
  if (umidadeSolo >= 80 && umidadeSolo < 90) {
    return 'irrigação a ser aplicada';
  };
  if (umidadeSolo >= 90 && umidadeSolo <= 100) {
    return 'irrigação não necessária'
  };
}

switch (tipoSolo) {
  case 'fino':
    document.write(Resultado + this.validarUmidadeSoloFino(umidadeSolo));
    break
  case 'medio':
    document.write(Resultado + this.validarUmidadeSoloMedio(umidadeSolo));
    break
  case 'grosso':
    document.write(Resultado + this.validarUmidadeSoloGrosso(umidadeSolo));
    break
  default:
    document.write('Então solo e/ou umidade inválido')
}