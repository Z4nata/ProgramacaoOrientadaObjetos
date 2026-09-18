import { Efeito } from "./Efeito";
import { Personagem } from "./Personagem";
export declare class Veneno implements Efeito {
    private dano;
    private alvo;
    private faltam;
    constructor(dano: number, duracao: number, alvo: Personagem);
    novoTurno(): void;
}
//# sourceMappingURL=Veneno.d.ts.map