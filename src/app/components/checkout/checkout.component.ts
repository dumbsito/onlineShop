import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
total:number=0
constructor(public servi:ProductsService,private route:Router){

  
}
  ngOnInit(): void {
    this.total = this.servi.carrito.reduce(
      (acumulador, actual) => acumulador + actual.cantidad * actual.precio,
      0
    );
  }
isRequired=false

@ViewChild('cliente') cliente!: ElementRef;
@ViewChild('email') email!: ElementRef;

finish(){
  if(this.cliente.nativeElement.value=="" || this.email.nativeElement.value==""){
    Swal.fire({
      title: "You must complete the form!",
      text: "Fill in the form please.",
      icon: "error",
      confirmButtonText: "agree",
    });
  }else{
    Swal.fire({
      title: "Place order",
      text: "Do you submit placing order?",
      icon:"question",
      confirmButtonText: "agree",
    }).then(e=>{
      this.route.navigate(["/productos"])
this.servi.mostrarCompra=true
setTimeout(() => {
   this.servi.mostrarCompra=false
   
}, 3000);
});
  }

 
}

finalizar(){
this.route.navigate(["/productos"])
this.servi.mostrarCompra=true
setTimeout(() => {
   this.servi.mostrarCompra=false
   
}, 3000);

}

onSubmit(){
if(this.isRequired){

}

}

reduce(){

}
}
