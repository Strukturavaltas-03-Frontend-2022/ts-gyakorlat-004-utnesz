// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  {
    id: 16,
    name: "Susulyka",
    sex: "male",
    age: 225,
    health: 98,
  },
  {
    id: 46,
    name: "Rumcajsz",
    sex: "male",
    age: 225,
    health: 98,
  },
  {
    id: 26,
    name: "Amazon",
    sex: "female",
    age: 225,
    health: 4000,
  }
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
  { id: 45, name: "Mari", wings: 2, wheels: 4, clan: "alca" },
  { id: 45, name: "Gizi", wings: 4, wheels: 4, clan: "transformer" },
  { id: 45, name: "Geza", wings: 6, wheels: 4, clan: "alca" },
];
