
class Clientes {
    constructor (nombre , dni, localidad, seleccion) {
    this.nombre = nombre;
    this.dni = dni;
    this.localidad = localidad;
    this.producto = seleccion;
    }
    bienvenida () { alert(`Bienvenido ${nombre}. DNI: ${dni} Localidad: ${localidad}`)}; 
};

const productos = [{nombre: "prestamos", informacion: "Hasta 6 cuotas(50% Interes). Hasta 12 cuotas(100% Interes). Hasta 24 cuotas(300%)"},
                   {nombre: "seguros", informacion:"Seguro de Automotor, Seguro de vida, Seguro de vivienda"},
                   {nombre: "inversiones", informacion:" Inersiones de Vienes Raices. Inversiones en Activos"}
 ];
//console.log(productos);






let nombre = prompt ("Ingrese nombre");
let dni = parseInt(prompt("Ingrese numero de DNI"));
let localidad = prompt ("Ingrese localidad");
let seleccion = prompt("Que producto le interesa (prestamos, seguros, inversiones");
let producto;

    
    
  for (let index = 0; index < productos.length; index++) {
        if (productos[index].nombre === seleccion) {
            producto = productos[index];
            
      } //else { alert (`Lo que ud selecciono no esta dispible, tiene que elegit entre prestamos, seguros e inversiones.`);
      //}

};


alert(`Producto: ${producto.nombre}. Informacion: ${producto.informacion}`);

const cliente1 = new Clientes (  nombre, dni, localidad, seleccion
    );

cliente1.bienvenida()








