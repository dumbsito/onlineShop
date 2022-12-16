import { Component, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

products=[
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
]
carrito:any[]=[]

constructor(public servi:ProductsService){

}

onDelete=""

add(id:number){
  
  let item=this.products.find(e=>e.id==id)
  console.log(item);
  if(this.servi.carrito.includes(item)){
    return
  }else{
    this.servi.carrito.push(item)
  }
  
  console.log(this.carrito);
  
}
items:any[]=[{nombre:""}]
detalles(item:any){
 this.items.push(item)
 
}
me(){
  console.log(this.products);
  
}

datosEnviados(event:any){
this.products=event;
}

datosEnviados2(event:any){
  this.products=event;
  }
}
