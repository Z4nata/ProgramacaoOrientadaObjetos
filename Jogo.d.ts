import { AtualizavelPorTurno } from "./AtualizavelPorTurno";
import { Personagem } from "./Personagem";
export declare class Jogo {
    private herois;
    private turno;
    constructor(herois?: Personagem[], turno?: AtualizavelPorTurno[]);
    adicionarPersonagem(personagem: Personagem): void;
    escutadorDeTurno(objeto: AtualizavelPorTurno): void;
    passarTurno(): void;
}
//# sourceMappingURL=Jogo.d.ts.map