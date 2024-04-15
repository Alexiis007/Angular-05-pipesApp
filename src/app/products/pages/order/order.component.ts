import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public isUpperCase : boolean = false;
  public toggleUpperCase():void{
    this.isUpperCase = ! this.isUpperCase;
  }
}
