import { Component, OnInit } from '@angular/core';
import { ingreso } from './Ingreso.model';
import { ingresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: ingreso []=[];

  constructor(private ingresoServicio:ingresoServicio) { }


  ngOnInit() {

    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(Ingreso: ingreso){

this.ingresoServicio.eliminar(Ingreso);

  }

}
