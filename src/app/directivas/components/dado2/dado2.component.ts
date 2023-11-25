import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado2',
  templateUrl: './dado2.component.html',
  styleUrls: ['./dado2.component.scss']
})
export class Dado2Component implements OnInit {
@Input()
valor: string ='';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
