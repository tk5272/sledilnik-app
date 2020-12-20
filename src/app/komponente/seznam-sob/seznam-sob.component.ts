import { Component, OnInit } from '@angular/core';

import { Soba } from 'src/app/razredi/Soba';
import { SobePodatkiService } from 'src/app/storitve/sobe-podatki.service';

@Component({
  selector: 'app-seznam-sob',
  templateUrl: './seznam-sob.component.html',
  styleUrls: ['./seznam-sob.component.css']
})

export class SeznamSobComponent implements OnInit {

  public sobe: Soba[];

  constructor(private sobePodatki: SobePodatkiService) { }

  private pridobiSobe(): void {
    this.sobePodatki
      .getSobe()
      .then(najdeneSobe => this.printaj(najdeneSobe));
  }

  private printaj(najdeneSobe):void {
    this.sobe = najdeneSobe;
    console.log(this.sobe);
  }
  
  ngOnInit() {
    this.pridobiSobe();
  }

}
