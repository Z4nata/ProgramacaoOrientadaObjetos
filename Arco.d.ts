import { Arma } from "./Arma";
export declare class Arco implements Arma {
    private dano;
    private flechas;
    private cooldow;
    private capacidadeMaxFlechas;
    constructor(dano: number, tempo: number, flechas: number);
    atacar(): number;
    passarTurno(): void;
    recarregarFlechas(): void;
}
//# sourceMappingURL=Arco.d.ts.map