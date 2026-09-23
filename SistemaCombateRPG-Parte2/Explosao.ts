import { Habilidade } from "./Habilidade";
import { Personagem } from "./Personagem";
import { HabilidadeControle } from "./HabilidadeControle";
import { Alvo } from "./Alvo";

export class Explosao implements Habilidade {
    readonly nome: string
    private readonly dano: number
    private controle: HabilidadeControle

    constructor(
    ){  
        this.dano = 20
        this.nome = 'Explosao'
        this.controle = new HabilidadeControle(25, 3)
    }

    realizarHabilidade(realizador: Personagem, alvo: Alvo): void{
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