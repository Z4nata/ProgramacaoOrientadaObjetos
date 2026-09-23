import { Alvo } from "./Alvo";

export class Grupo implements Alvo{
    

    constructor(
        private readonly alvos: Alvo[],

    )

    {}
   
    

    receberDano(dano: number): void{
        this.alvos.forEach(alvo => alvo.receberDano(dano))
    }

    curar(cura: number): void{
        this.alvos.forEach(alvo => alvo.curar(cura))
    }

}
