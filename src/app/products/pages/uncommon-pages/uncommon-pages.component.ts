import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-pages',
  templateUrl: './uncommon-pages.component.html',
  styleUrl: './uncommon-pages.component.css'
})
export class UncommonPagesComponent {
  //i18n select
  public name : string = 'Alexis';
  public gender : 'male' | 'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }
  public changeClient():void{
    if(this.gender == 'male')
      {
        this.name = 'Melisa'
        this.gender = 'female'
      }
      else
      {
        this.name = 'Alexis'
        this.gender = 'male'
      }
  }
  //i18n Plural
  public clients : string[] = ['Maria','Pedro','Roberto','Mario','Toby']

  public clientsMap = {
    '=0': 'No hay clientes',
    '=1': 'Cliente a la espera',
    '=2': 'Tenemos dos clientes esperando',
    'other': 'Tenemos # clientes esperando'
  }

  public deleteClient():void{
    this.clients.pop();
  }

  //KeyValue
  public person = {
    name: 'Alexis',
    age:20,
    address:'Garcia N.L.'
  }

  //asyn pipe
  public myObservableTime = interval(2000);
}
