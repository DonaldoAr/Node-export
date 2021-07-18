
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];
/*
const getEmpleado = ( id ) => {
    const promesa = new Promise( (resolver, reject )=>{
        const empleado = empleados.find( e => e.id === id )?.nombre
        if( empleado ){
            resolver( empleado );
        }else{
            reject( `No existe empleado con id ${ id }` );
        }
    });
    return promesa;
}
*/
const getEmpleado = ( id ) => {
    return new Promise( (resolver, reject )=>{
        const empleado = empleados.find( e => e.id === id )?.nombre;
        ( empleado )
            ?resolver( empleado )
            :reject( `No existe empleado con id ${ id }` );
    });
}


const id = 5;

getEmpleado(id)
    .then( empleado => console.log( empleado ) )
    .catch( err => console.log(err) );
