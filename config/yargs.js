const { demandOption } = require('yargs');
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
        })
        .check((argv,options)=>{
            //console.log("yargs",argv);
            if(isNaN( argv.b )){
                throw 'La base tiene que ser un número';
            }
            return true;
        })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola :D'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Multiplicacion debe llegas hasta'
    })
    .argv;

    module.exports = argv;