import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabebero',
  templateUrl: './cabebero.component.html',
  styleUrls: ['./cabebero.component.css']
})
export class CabeberoComponent implements OnInit {
  @Input()PresupuestoTotal: number;
  @Input()ingresoTotal:number;
  @Input()egresoTotal:number;
  @Input()porcentajeTotal:number;



  constructor() { }

  ngOnInit(): void {
  }

}
