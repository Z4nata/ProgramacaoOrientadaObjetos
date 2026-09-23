import { Habilidade } from "./Habilidade";
import { Personagem } from "./Personagem";
import { HabilidadeControle } from "./HabilidadeControle";

export class GolpePoderoso implements Habilidade {
    readonly nome: string
    private readonly dano: number
    private controle: HabilidadeControle

    constructor(
    ){  
        this.dano = 60
        this.nome = 'Golpe Poderoso'
        this.controle = new HabilidadeControle(0, 3)
    }

    realizarHabilidade(realizador: Personagem, alvo: Personagem): void{
        if(this.podeUsar(realizador)){
        alvo.receberDano(this.dano)
        this.controle.contabilizarHabilidade(realizador)
        }
    }
    

    podeUsar(realizador: Personagem): boolean{
        return this.controle.podeUsar(realizador)
    }
    
    novoTurno(): void{
        this.controle.novoTurno()
    }




}