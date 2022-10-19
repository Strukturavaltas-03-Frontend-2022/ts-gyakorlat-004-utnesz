import { ITransformer } from "./hero-interface";

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
  id: number;
  name: string;
  wings: number;
  wheels: number;
  clan: string;

  constructor(
    ide: number,
    nev: string,
    szarnyak: number,
    kerekek: number,
    klan: string,
    foto?: string
  ) {
    this.id = ide;
    this.name = nev;
    this.wings = szarnyak;
    this.wheels = kerekek;
    this.clan = klan;
  }
}

const newTransformer = new TransformerHero(16, "Mikkamakka",  2, 4, "alca");
