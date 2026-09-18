import { Arma } from "./Arma"
import { CoolDown } from "./CoolDown"

export class Espada implements Arma{

    private cooldown: CoolDown

    constructor(

        private dano: number,
        tempo: number
    )
    {
        this.cooldown = new CoolDown(tempo)
    }

    atacar(): number{
        if(this.cooldown.estaDisponivel()){

            this.cooldown.iniciarCoolDown()
            return this.dano
            
        } else{
            console.log(`Espada em tempo de CoolDown`)
            return 0
        }
    }

    passarTurno():void {
        this.cooldown.novoTurno()
    }
    
}