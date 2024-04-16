import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

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
  public heros : Hero[] = [
    {
      name:'Superman',
      cantFly:true,
      color:Color.blue
    },
    {
      name:'Daredevill',
      cantFly:false,
      color:Color.red
    },
    {
      name:'Batman',
      cantFly:false,
      color:Color.black
    },
    {
      name:'Green Litner',
      cantFly:true,
      color:Color.green
    }
  ];

  public orderBy : keyof Hero | '' = '';
  public filtroInverso : boolean = true;

  changeOrder(value : keyof Hero):void{
    this.orderBy=value;
    this.filtroInverso = !this.filtroInverso;
  }
}
