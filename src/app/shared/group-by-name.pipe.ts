import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupByName'})
export class groupByName implements PipeTransform {
  transform(value, args:string[]) : any {
    var names = {};
    value.forEach(function(o) {
      var name = o.name;
      names[name] = names[name] ? names[name] : { name: name, resources: [] };
      names[name].resources.push(o);  
    });
        
    return Object.keys(names).map(function (key) {return names[key]});
  }
}
