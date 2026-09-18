import { AtualizavelPorTurno } from "./AtualizavelPorTurno";
import { Personagem } from "./Personagem"

export class Jogo {


    constructor(
        
        private herois: Personagem[] = [],
        private turno: AtualizavelPorTurno[] = []

    ) {}

    adicionarPersonagem(personagem: Personagem): void{

        this.herois.push(personagem)
        
    }

    escutadorDeTurno(objeto: AtualizavelPorTurno): void{

        this.turno.push(objeto)

    }

    passarTurno():void { 

        for(const hero of this.turno){
            hero.novoTurno()
        }

    }
}