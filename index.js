let Coche = {marca: '', modelo: '', matricula: ''} ;
////////////////////////////////////////////////////

let Casa = { codPostal: '', calle: '', portal: '', piso: ''};
//////////////////////////////////////////////////////////////

let FullStackDevoloper = {lenguajes: '', proyectos:''};
///////////////////////////////////////////////////////

let Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar(){
        console.log('au au au au');
    },
    popo(){
        return Math.random() * 10;
    }
 }
 
 /////////////////////////////////////////////////////////////

 //////////////// Lectura de propiedades ////////////////////

marcaPortatil = Portatil.marca;

/////////////////////////////////////////////////
marcaPortatil2 = Portatil['marca'];

/////////////////////////////////////////////////
grupos = Concierto.grupos;

//////////////////////////////////////////////////
RGB = [Led.rojo, Led.verde, Led.azul];

///////////// Modificación de propiedades /////////

///////////////////////////////////////////////////
Portatil.modelo = 'P345';

//////////////////////////////////////////////////
Concierto.cartelera.push('Guns N\' Roses')
//////////////////////////////////////////////////

Concierto.fecha = new Date();
///////////////////////////////////////////////////

Impresora.imprimiendo = objetoConPropiedades = {
    nombreArchivo: '',
    copias: '',
    numPaginas: ''
}
/////////////////// Declaración ////////////////////
////////////////////////////////////////////////////
const Noticia = {
    titular: '',
    cuerpo: ''
}
////////////////////////////////////////////////////
const Persona = {
    nombre: '',
    apellidos: '',
    edad: ''
}
/////////////////////////////////////////////////////
const Avion = {
    numPasajeros: '',
    despegar(){
        console.log('despegando');
    },
    volar(){
        console.log('llegando al destino');
    },
    aterrizar(){
        console.log('aterrizando');
    }
}
//////////////////////////////////////////////////////
const Paquete = {
    contenido: []
}

//////////////////////////////////////////////////////

const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: ''
}

/////////////Lectura de propiedades////////////////////
///////////////////////////////////////////////////////

codError = O_Error.codigo;
///////////////////////////////////////////////////////

integrantes = Grupo.integrantes;
////////////////////////////////////////////////////////

nivelesTinta = Impresora.tinta;
////////////////////////////////////////////////////////

pixeles = Pantalla.pixeles;
////////////////////////////////////////////////////////

especificaciones = Movil['especificaciones'];

/////////////Modificación de propiedades////////////////
////////////////////////////////////////////////////////

Grupo.numIntegrantes = 5;
////////////////////////////////////////////////////////

Pantalla.dimensiones = '1920x1080';
////////////////////////////////////////////////////////
if(Led.encendido){
    Led.encendido = false;
} else {
    Led.encendido = true;
}
////////////////////////////////////////////////////////
Movil.temperatura = '20º';