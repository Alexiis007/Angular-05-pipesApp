import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, toUpper : boolean = false):string{
        if(toUpper == false)
            return value.toLowerCase();
        else
            return value.toUpperCase();
    }
}