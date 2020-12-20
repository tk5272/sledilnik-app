import { Component, OnInit } from '@angular/core';
import { Oseba } from 'src/app/razredi/Oseba';
import { Soba } from 'src/app/razredi/Soba';
import { OsebjePodatkiService } from 'src/app/storitve/osebje-podatki.service';
import { SobePodatkiService } from 'src/app/storitve/sobe-podatki.service';

@Component({
  selector: 'app-upravljanje-sob',
  templateUrl: './upravljanje-sob.component.html',
  styleUrls: ['./upravljanje-sob.component.css']
})
export class UpravljanjeSobComponent implements OnInit {

  public osebje: Oseba[];
  public sobe: Soba[];
  public sporocilo: string;
  public stevilo_ljudi: number = 1;
  public novaSoba: any = {
    imeSobe: "Gledaliske igre",
    maxLjudi: 45,
    osebe: "Ana Banana",
    sobaId: null,
    stLjudi: 0,
    velikost: 51,
    opis: "Spoznajte Sheaksperovo gledalisce",
    kljucnaBeseda: "theatre"
  };

  constructor(
    private sobePodatki: SobePodatkiService,
    private osebjePodatki: OsebjePodatkiService
    ) { }

  private pridobiSobe(): void {
    this.sobePodatki
      .getSobe()
      .then(najdeneSobe => this.printaj(najdeneSobe));
  }

  public deleteSoba(idSobe: number): void {
    this.sobePodatki
      .deleteSoba(idSobe)
      .then(odgovor => {
        this.sobe.forEach((element,index) => {
          if(element.sobaId == idSobe) {
            this.sporocilo = "Izbris sobe "+ this.sobe[index].imeSobe +" uspešen.";
            this.sobe.splice(index,1);
          }
        });
    });
  }

  public dodajOsebo(idSobe: number, plus: boolean): void {

    this.sobePodatki
      .spremeniStLjudi(idSobe, plus? 1: -1)
      .then(odgovor => {
        if(odgovor.status == 400) this.sporocilo = "Preveri parametre."
        else {
          this.sobe.forEach((element,index) => {
            if(element.sobaId == idSobe) {
              this.sporocilo = "Sprememba oseb sobe "+ this.sobe[index].imeSobe +" uspešna";
              this.sobe[index].stLjudi = odgovor;         
            }
          });
        }
    });
  }

  public createSoba(): void {
      this.sobePodatki
      .createSoba(this.novaSoba)
      .then(odgovor => {
        this.pridobiSobe();
        this.sporocilo = "Soba uspesno dodana."
    });
  }

  private pridobiOsebje(): void {
    this.osebjePodatki
      .getOsebje()
      .then(najdeneOsebe => {
        this.osebje = najdeneOsebe
      });
  };

  private printaj(najdeneSobe):void {
    this.sobe = najdeneSobe;
    console.log(this.sobe);
  }
  
  ngOnInit() {
    this.pridobiSobe();
    this.pridobiOsebje();
  }

}
