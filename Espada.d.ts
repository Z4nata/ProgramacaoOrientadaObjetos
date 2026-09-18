import { Arma } from "./Arma";
export declare class Espada implements Arma {
    private dano;
    private cooldown;
    constructor(dano: number, tempo: number);
    atacar(): number;
    passarTurno(): void;
}
//# sourceMappingURL=Espada.d.ts.map