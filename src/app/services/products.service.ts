import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  search:string=""
  carrito:any[]=[]
  mostrarCompra:boolean=false;

  

  constructor() { }

}
