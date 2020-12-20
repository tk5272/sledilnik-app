import { Component, OnInit, Input } from '@angular/core';

import { SobePodatkiService } from 'src/app/storitve/sobe-podatki.service';

@Component({
  selector: 'app-slike-sob',
  templateUrl: './slike-sob.component.html',
  styleUrls: ['./slike-sob.component.css']
})

export class SlikeSobComponent implements OnInit {
  
  @Input() keyword: string;
  public slike: any;

  constructor(
      private sobePodatki: SobePodatkiService,
    ) { }

    private pridobiSlike(): void {
      console.log(this.keyword);
      this.sobePodatki
        .pridobiSlike(this.keyword)
        .then(najdeneSlike => {
          this.slike=najdeneSlike
        });
    }

  ngOnInit(): void {
    this.pridobiSlike();
  }

}
