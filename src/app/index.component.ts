 import {Component,Pipe} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	
    <!--<div *ngFor="let group of resources | groups">
      <h3>{{group.name}}</h3>
      <ul>
        <li *ngFor="let resource of group.resources">{{resource.name}}</li>
      </ul>
    </div>
    <select>
        <optgroup *ngFor="let item of itemSource3 | groupBy: 'league'" label="{{item.key}}">
            <option *ngFor="let group of item.value">
                {{group.name}}
            </option>
        </optgroup>
    </select>
    <div *ngFor="let item of resources | groupBy: 'group' ">
       group {{ item.key }} has {{ item.value.length }} name
    </div>-->
  `,
})
export class IndexComponent {
  constructor() {
    this.resources = [
        {name: "metal", group: "factory"},
        {name: "plastic", group: "factory"},
        {name: "shovel", group: "hardware store"},
        {name: "ladder", group: "hardware store"}
    ];
    
     this.itemSource3 = [
                  {league: "EPL", name: "Arsenal", id: 11},
                  {league: "EPL", name: "Liverpool", id: 1},
                  {league: "EPL", name: "Chelsea", id: 2},
                  {league: "EPL", name: "QPR", id: 3},
                  {league: "LFP", name: "Barcelona", id: 4},
                  {league: "LFP", name: "Real Madrid", id: 5},
                  {league: "LFP", name: "Atletico Madrid", id: 6},
                  {league: "EreDivisie", name: "Ajax", id: 7},
                  {league: "League I", name: "Marseille", id: 8},
                  {league: "League I", name: "PSG", id: 9},
                  {league: "Seria A", name: "Juventus", id: 10},
                  {league: "Searie A", name: "AC Milan", id: 11}
   ];
  }
  
}