import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {


  @Input() products:any[]=[]
  @Input()carrito:any[]=[]
  @Output() onDelete=new EventEmitter<any>()

  constructor(public servi:ProductsService,private route:Router){
 
  }

 
 
  delete(id:number){

  this.servi.carrito= this.servi.carrito.filter((e) => e.id !== id);

  console.log(this.servi.carrito);
  }

  checkout(){
    if(this.servi.carrito.length>0){
      this.route.navigate(['/checkout'])
    }
  }
  me(){
   
    console.log(this.servi.carrito);
    
      }
  
      onKey(event:any) {
        const inputValue = event.target.value;
        console.log(inputValue);
        
      }

      sumar(item:any){
       item.cantidad++
      }

      restar(item:any){
        if(item.cantidad>0){
          item.cantidad--
        }
      
      }

}

