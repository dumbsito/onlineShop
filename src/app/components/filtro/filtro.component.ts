import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit{
ngOnInit(): void {

 
}

constructor(public servi:ProductsService ){

}

desde:number=0
hasta:number=0
campos:boolean=false
products2=[
  {
    id:1,
    img:"../../../assets/laptop.jpg",
    nombre:"Laptop Latest Generation",
    precio:300,
    cantidad:"1",
    description:"The latest laptop launched in the market, new core and graphics architectures. "
  },
  {
    id:2,
    img:"../../../assets/auricular.jpg",
    nombre:"Headphones Gamer",
    precio:50,
    cantidad:"1",
    description:"These headsets offer an easy, all-in-one solution to your game audio needs, usually packing in a microphone, decent sound, and lengthy cords to suit just about any gaming setup. As with any kind of tech, there are quite a few gaming headsets on the market, and many aren’t great"
  },
  {
    id:3,
    img:"../../../assets/bici.jpg",
    nombre:"Bycicle Mountain-Bike",
    precio:200,
    cantidad:"1",
    description:"Incorporate features designed to enhance durability and performance in rough terrain, which makes them heavier, more complex and less efficient on smooth surfaces."
  },
  {
    id:4,
    img:"../../../assets/skate.jpg",
    nombre:"Skate Complet Element",
    precio:100,
    cantidad:"1",
    description:"Designed with high-grade materials, this deck delivers a smooth ride for users of all skill levels. Comes in two sizes with everything you'd expect from a standard complete"
  },
  {
    id:5,
    img:"../../../assets/parlante.jpg",
    nombre:"Speaker HD",
    precio:100,
    cantidad:"1",
    description:"Reference Premiere speakers fully embody the ideals of Klipsch design philosophy: low distortion, high efficiency, flat frequency response, broad dynamic range and controlled directivity."
  },
  {
    id:6,
    img:"../../../assets/TV.jpg",
    nombre:"Tv Ultra HD",
    precio:400,
    cantidad:"1",
    description:"Its Full HD resolution shows a clear evolution compared to its predecessor. The images that you are going to see will have a superior quality with a high level of detail and much more striking colors."
  },
]
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
