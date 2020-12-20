import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Soba } from 'src/app/razredi/Soba';
import { SobePodatkiService } from 'src/app/storitve/sobe-podatki.service';

@Component({
  selector: 'app-podrobnosti-sobe',
  templateUrl: './podrobnosti-sobe.component.html',
  styleUrls: ['./podrobnosti-sobe.component.css']
})
export class PodrobnostiSobeComponent implements OnInit {

  public soba: Soba;

  constructor(
      private sobaPodatki: SobePodatkiService,
      private pot: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.pot.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        let idSobe = params.get('idSobe');
        return this.sobaPodatki.getSoba(idSobe);
      })
    )
    .subscribe((odgovor: Soba) => {
        this.soba = odgovor;
    });
  }

}
