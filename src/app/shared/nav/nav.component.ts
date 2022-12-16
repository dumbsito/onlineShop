import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

search:string=""
  @Input() products:any[]=[]
  @Input()carrito:any[]=[]
  @Output() onDelete=new EventEmitter<any>()

  constructor(public servi:ProductsService,private route:Router){
 
  }
  ngOnInit(): void {
 
   
   
  }

total(){
  let total=0
  this.servi.carrito.forEach(e=>{
 total+=e.precio 
  })
return total
}
  delete(id:number){

  this.servi.carrito= this.servi.carrito.filter((e) => e.id !== id);

  console.log(this.servi.carrito);
  }


  mo(){
    console.log(this.servi.carrito);
    
  }

  checkout(){
    this.route.navigate(['/contacto'])
  }

  
}

