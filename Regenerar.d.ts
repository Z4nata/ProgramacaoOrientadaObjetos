import { Efeito } from "./Efeito";
import { Personagem } from "./Personagem";
export declare class Regenerar implements Efeito {
    private cura;
    private alvo;
    private faltam;
    constructor(cura: number, duracao: number, alvo: Personagem);
    novoTurno(): void;
}
//# sourceMappingURL=Regenerar.d.ts.map