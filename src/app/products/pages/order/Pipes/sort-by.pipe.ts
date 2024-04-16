import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy ?: keyof Hero | '', inversa ?: boolean): Hero[] {
    switch(sortBy)
    {
      case 'name':
        if(inversa==false)
          return heroes.sort((a,b)=>(a.name > b.name) ? 1:-1);
        else(inversa==true)
          return heroes.sort((a,b)=>(a.name > b.name) ? -1:1);
       case 'cantFly':
         if(inversa==false)
         return heroes.sort((a,b)=>(a.cantFly > b.cantFly) ? 1:-1);
       else(inversa==true)
         return heroes.sort((a,b)=>(a.cantFly > b.cantFly) ? -1:1);
       case 'color':
         if(inversa==false)
         return heroes.sort((a,b)=>(a.color > b.color) ? 1:-1);
       else(inversa==true)
         return heroes.sort((a,b)=>(a.color > b.color) ? -1:1);
       default:
        return heroes;
    }
  }

}
