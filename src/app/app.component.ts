import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { ingreso } from './ingreso/Ingreso.model';
import { ingresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ingresos:ingreso[]=[];
  egresos: Egreso[]=[];



constructor(private ingresoServicio:ingresoServicio, private egresoServicio:EgresoServicio){
  this.ingresos = ingresoServicio.ingresos
  this.egresos = egresoServicio.egresos


}

getIngresoTotal(){

  let IngresoTotal: number = 0;
  this.ingresos.forEach(ingreso => {

    IngresoTotal += ingreso.valor;
  });

  return IngresoTotal;
}
getEgresoTotal(){

  let egresoTotal: number = 0;
  this.egresos.forEach(egreso => {

    egresoTotal += egreso.valor;
  });

  return egresoTotal;
}

getporcentajeTotal(){

  return this.getEgresoTotal()/this.getIngresoTotal();
}

getPresupuestoTotal(){

return this.getIngresoTotal() - this.getEgresoTotal();

}
  
}
