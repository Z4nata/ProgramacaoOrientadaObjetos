import { Personagem } from "./Personagem"

export interface Arma {
    atacar(personagem: Personagem): number
    passarTurno(): void
}