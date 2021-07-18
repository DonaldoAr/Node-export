// Realizar multiplicación
//const { argv, option } = require('yargs');

const { crearArchivoMult } = require('./helpers/multiplicar');
const colors = require('colors')
const argv = require('./config/yargs');
console.clear();
crearArchivoMult(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err  => console.log(err) );


/*  Documentation
//console.log(process.argv);        // comando: node app --base=9
const [ , ,arg3 = 'base=7'] = process.argv;  //Desestructuración
// Separando el valor del string
const [ , base = 0] = arg3.split('=');
console.log(base)
*/