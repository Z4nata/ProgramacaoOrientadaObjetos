import { Efeito } from "./Efeito";
import { Personagem } from "./Personagem";


export class Regenerar implements Efeito{


    private faltam: number

    constructor(
        private cura: number,
        duracao: number,
        private alvo: Personagem
    )
    {
        this.faltam = duracao
    }

    novoTurno(): void{

        if(this.faltam > 0){
            this.faltam -= 1
            this.alvo.curar(this.cura)
            console.log(`Cura de:${this.cura} realizada pelo Efeito Regenerar `)
        }
        
    }


}