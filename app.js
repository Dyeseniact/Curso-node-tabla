
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err));



// Por posicion - No recomendado 
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(arg3);
//console.log(base);

//let base = 6;

//crearArchivo(base)
//    .then (nombreArchivo => console.log(nombreArchivo, 'creado'))
//    .catch( err => console.log(err));