//const productos = {}
function Clientes (nombre , dni, localidad, producto) {
    this.nombre = nombre;
    this.dni = dni;
    this.localidad = localidad;
    this.producto = producto;
};


let nombre = prompt ("Ingrese nombre");
let dni = parseInt(prompt("Ingrese numero de DNI"));
let localidad = prompt ("Ingrese localidad");
let producto= prompt ("Ingrese producto que desea consultar");

const cliente1 = new Clientes ( {
   nombre: `${nombre}`,
   dni: `${dni}`,
   localidad: `${localidad}`,
   producto:  `${producto}`,
});

alert ( [cliente1])


console.log(Clientes);