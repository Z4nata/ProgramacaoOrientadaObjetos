import { Arma } from "./Arma";
export declare class VarinhaMagica implements Arma {
    private dano;
    private mana;
    private manaMax;
    private cooldow;
    constructor(tempo: number, dano: number, mana: number);
    atacar(): number;
    recarregarMana(): void;
    passarTurno(): void;
}
//# sourceMappingURL=Varinha.d.ts.map