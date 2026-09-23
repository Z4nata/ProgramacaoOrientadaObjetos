import { AtualizavelPorTurno } from "./AtualizavelPorTurno";
import { Personagem } from "./Personagem";
import { Alvo } from "./Alvo";

export interface Habilidade extends AtualizavelPorTurno{

    readonly nome: string

    realizarHabilidade(utilizador: Personagem, recebedor: Alvo): void
    podeUsar(utilizador: Personagem): boolean

}