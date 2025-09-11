import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.scss'
})
export class StructuralDirective {
  userPermission: string = ''; // guest, admin
  
  age: number = 20; // 18 or 17

  users:any[] = [
    {
      id:'1',
      name:'Prashant'
    },
    {
      id:'2',
      name:'Ajay'
    },
    {
      id:'3',
      name:'Pratik'
    },
    {
      id:'4',
      name:'Muni'
    }
  ];
}
