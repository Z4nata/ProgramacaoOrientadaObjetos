import { AtualizavelPorTurno } from "./AtualizavelPorTurno";
export declare class CoolDown implements AtualizavelPorTurno {
    private duracao;
    private faltam;
    constructor(duracao: number);
    iniciarCoolDown(): void;
    estaDisponivel(): boolean;
    novoTurno(): void;
}
//# sourceMappingURL=CoolDown.d.ts.map