import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productColorGroup'})
export class productColorGroupPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    var colors = {};
    value.forEach(function(o) {
      var color = o.color;
      colors[color] = colors[color] ? colors[color] : { name: color, resources: [] };
      colors[color].resources.push(o);  
    });
        
    return Object.keys(colors).map(function (key) {return colors[key]});
  }
}
