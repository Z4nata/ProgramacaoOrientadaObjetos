import { Efeito } from "./Efeito";
import { Personagem } from "./Personagem";


export class Veneno implements Efeito{


    private faltam: number

    constructor(
        private dano: number,
        duracao: number,
        private alvo: Personagem
    )
    {
        this.faltam = duracao
    }

    novoTurno(): void{

        if(this.faltam > 0){
            this.faltam -= 1
            this.alvo.receberDano(this.dano)
        }
        
    }


}