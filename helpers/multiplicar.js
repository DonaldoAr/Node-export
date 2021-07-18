
const fs = require('fs');
const { resolve } = require('path');
/* Codigo para antiguo de la función
const crearArchivoMult = ( base = 5 ) =>{
    console.log(`Tabla de multiplicar del ${base}`)
    let salida = '';

    for(let i = 1; i < 11; i++ ){
        salida += `${base} x ${i} = ${base * i}\n`; // Concatenación
    }
    console.log(salida);

    fs.writeFileSync( `tabla-${base}.txt`, salida);
    console.log(`La tabla-${base}.txt, ha sido creada`);
}
module.exports = {
    //crearArchivoMult: crearArchivoMult Esto es redundante
    crearArchivoMult // Mejor
}
*/
const crearArchivoMult = ( base = 5 , l = false, h = 10) =>{
    return new Promise( (resolver,reject)=>{
        console.log(`Tabla de multiplicar del ${base}`)
        let salida = '';
        for(let i = 1; i < h+1; i++ ){
            salida += `${base} x ${i} = ${base * i}\n`;       // Concatenation
        }
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        ( salida )
            ?resolver(()=>{
                //if(l == true ){console.log(salida)}
                //console.log(salida)
            })
            :reject(` Algo salio mal :'( revisa la ${ base } `)
        //console.log(salida);                                 // Multiplication
        //fs.writeFileSync( `tabla-${base}.txt`, salida);
        //console.log(`La tabla-${base}.txt, ha sido creada`); // Warning, a new file built
    });
}
module.exports = {
    //crearArchivoMult: crearArchivoMult Esto es redundante
    crearArchivoMult // Mejor
}




/* Este codigo es utilizando la función writeFile la cual es mas dificil que Sync
fs.writeFile( 'tabla-5.txt', salida, (err) => {
    if (err) throw err;
    console.log('tabla-5.txt creado');
    })
*/