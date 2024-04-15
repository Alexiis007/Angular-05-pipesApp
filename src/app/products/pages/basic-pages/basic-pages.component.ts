import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrl: './basic-pages.component.css'
})
export class BasicPagesComponent {
  public nameUpper : string = 'minusculas'
  public nameLower : string = 'MAYUSCULAS'
  public nameTitle : string = 'DeSoRdEn'
  public customDate : Date = new Date();
}
