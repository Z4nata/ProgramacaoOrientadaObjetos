import { Habilidade } from "./Habilidade";
import { Personagem } from "./Personagem";
import { HabilidadeControle } from "./HabilidadeControle";
import { Alvo } from "./Alvo";

export class BombaDeCura implements Habilidade {
    readonly nome: string
    private readonly cura: number
    private controle: HabilidadeControle

    constructor(
    ){  
        this.cura = 15
        this.nome = 'Bomba De Cura'
        this.controle = new HabilidadeControle(35, 4)
    }

    realizarHabilidade(realizador: Personagem, alvo: Alvo): void{
        if(this.podeUsar(realizador)){
        alvo.curar(this.cura)
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