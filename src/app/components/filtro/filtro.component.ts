import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit{
ngOnInit(): void {

 
}
desde:number=0
hasta:number=0
campos:boolean=false
products2:any[]=[
  {
    id:1,
    img:"../../../assets/laptop.jpg",
    nombre:"Laptop Ultima Generacion",
    precio:300,
    cantidad:"1"
  },
  {
    id:2,
    img:"../../../assets/auricular.jpg",
    nombre:"Auriculares Gamer",
    precio:50,
    cantidad:"1"
  },
  {
    id:3,
    img:"../../../assets/bici.jpg",
    nombre:"Bicicleta Mountain-Bike",
    precio:200,
    cantidad:"1"
  },
  {
    id:4,
    img:"../../../assets/skate.jpg",
    nombre:"Skate Completo Element",
    precio:100,
    cantidad:"1"
  },
  {
    id:5,
    img:"../../../assets/parlante.jpg",
    nombre:"Parlantes alta definicion",
    precio:100,
    cantidad:"1"
  },
  {
    id:6,
    img:"../../../assets/TV.jpg",
    nombre:"Tv Ultra HD",
    precio:400,
    cantidad:"1"
  },

];
@Input()products:any[]=[]
@Output()productos=new EventEmitter<any>()
@Output()productos2=new EventEmitter<any>()

filtrar(){
if(this.desde>this.hasta){
  this.campos=true
}else if(this.desde===0||this.hasta===0){
this.campos=true
}
else{
  this.campos=false
  let menor=this.products.filter(item=>item.precio>=this.desde&&item.precio<=this.hasta)
  this.products=menor;
  console.log(this.products);
  this.productos.emit(this.products)
}
}

lol(){

  console.log(this.products);
  
  
}

all(){
 
  this.products=this.products2
  this.productos2.emit(this.products2)
}
}
