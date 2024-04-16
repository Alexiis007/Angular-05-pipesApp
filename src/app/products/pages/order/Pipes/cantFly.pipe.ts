import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cantFly'
})

export class CantFlyPipe implements PipeTransform {
    transform(value: boolean):string {
        if (value == true)
            return 'Vuela'
        else
            return 'No Vuela'
    }   
}