import { ingreso } from "./Ingreso.model";

export class ingresoServicio{

    ingresos: ingreso[]=[

        new ingreso("salario", 4000),
        new ingreso("Venta coche",500)
    ];

    eliminar(ingreso: ingreso){

const indice:number=this.ingresos.indexOf(ingreso);
this.ingresos.splice(indice,1);

    }
}