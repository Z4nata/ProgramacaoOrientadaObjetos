import { Arma } from "./Arma";
import { AtualizavelPorTurno } from "./AtualizavelPorTurno";
export declare class Personagem implements AtualizavelPorTurno {
    private nome;
    private vidaMaxima;
    private arma?;
    private experiencia;
    private nivel;
    private vidaAtual;
    private expNeeded;
    private inventario;
    constructor(nome: string, vidaMaxima: number, arma?: Arma | undefined);
    estaVivo(): boolean;
    receberDano(dano: number): void;
    curar(cura: number): void;
    ganharExp(exp: number): void;
    private subirDeNivel;
    equiparNovaArma(arma: Arma): void;
    atacar(inimigo: Personagem): void;
    adicionarItemInventario(nome: string, valor: number): void;
    novoTurno(): void;
}
//# sourceMappingURL=Personagem.d.ts.map