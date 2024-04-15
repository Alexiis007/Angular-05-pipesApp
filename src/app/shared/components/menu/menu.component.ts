import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
  public itemsMenu : MenuItem[] = [];
  ngOnInit(): void {
    this.itemsMenu = [
      {
        label:'Pipes de Angular',
        icon:'pi pi-desktop',
        items:[
          {
            label:'Textos y Fechas',
            icon:'pi pi-align-left',
            routerLink:' '
          },
          {
            label:'Numeros',
            icon:'pi pi-dollar',
            routerLink:'Numbers'
          },
          {
            label:'No Comunes',
            icon:'pi pi-globe',
            routerLink:'Uncommon'
          },
        ]
      },
      {
        label:'Pipes Personalizados',
        icon:'pi pi-cog',
        items:[
          {
            label:'Customs Pipes',
            icon:PrimeIcons.TELEGRAM,
            routerLink:'Customs'
          },
        ]
      },
    ]
  }
}
