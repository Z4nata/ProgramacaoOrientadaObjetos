import { Habilidade } from "./Habilidade";
import { Personagem } from "./Personagem";
import { HabilidadeControle } from "./HabilidadeControle";

export class Cura implements Habilidade {
    readonly nome: string
    private readonly cura: number
    private controle: HabilidadeControle

    constructor(
    ){  
        this.cura = 30
        this.nome = 'Cura'
        this.controle = new HabilidadeControle(20, 1)
    }

    realizarHabilidade(realizador: Personagem, alvo: Personagem): void{
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