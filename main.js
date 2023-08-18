
class Clientes {
    constructor (nombre , dni, localidad, seleccion) {
    this.nombre = nombre;
    this.dni = dni;
    this.localidad = localidad;
    this.producto = seleccion;
    }
    bienvenida () { alert(`Bienvenido ${cliente1.nombre}. DNI: ${cliente1.dni} Localidad: ${localidad}`)}; 
};

const productos = ["prestamos", "seguros", "inversiones"];
//console.log(productos);

const producto = {
    prestamos: "Hasta 6 cuotas(50% Interes). Hasta 12 cuotas(100% Interes). Hasta 24 cuotas(300%)",
    seguros: "Seguro de Automotor, Seguro de vida, Seguro de vivienda",
    inversiones: " Inersiones de Vienes Raices. Inversiones en Activos",
};

let nombre = prompt ("Ingrese nombre");
let dni = parseInt(prompt("Ingrese numero de DNI"));
let localidad = prompt ("Ingrese localidad");
let seleccion = prompt("Que producto le interesa (prestamos, seguros, inversiones");

const cliente1 = new Clientes (  nombre, dni, localidad, seleccion
    );


if (seleccion === "prestamos") {
    alert(producto.prestamos);
} else if (seleccion === "seguros") {
    alert(producto.seguros);
} else if (seleccion === "inversiones") {
    alert(producto.inversiones);
}else{ alert (`Lo que ud selecciono no esta dispible, tiene que elegit entre ${productos}`)
 
    seleccion = prompt("Que producto le interesa (prestamos, seguros, inversiones");

    alert (producto[seleccion])
}

 cliente1.bienvenida()





console.log(cliente1);

